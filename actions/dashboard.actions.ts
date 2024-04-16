"use server";

import { cookies } from "next/headers";
import { nanoid } from "nanoid";
import { createClient } from "../lib/supabase/createServerClient";

export async function getLinks(userId?: string) {
  if (!userId) {
    throw new Error("No user id provided");
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", userId);

  if (error) console.log("Error getting links", error);

  return data;
}

export async function createNewLink() {
  const supabase = createClient();
  const userObj = await supabase.auth.getSession();
  const userId = userObj.data.session?.user.id;

  const linksFromCookie = cookies().get("links")?.value;

  const newLink = {
    id: nanoid(),
    name: "",
    url: "",
    userId,
  };

  if (linksFromCookie) {
    const links = JSON.parse(linksFromCookie) ?? [];
    links.push(newLink);
    cookies().set("links", JSON.stringify(links));
  } else {
    const currentLinks = await getLinks(userId);
    cookies().set("links", JSON.stringify([...(currentLinks ?? []), newLink]));
  }
}

export async function saveLinks(formData: FormData) {
  const supabase = createClient();
  const userObj = await supabase.auth.getSession();
  const userId = userObj.data.session?.user.id;

  if (!userId) {
    console.log("User not found");
    return;
  }

  const ids = formData.getAll("id") as (string | number)[];
  const names = formData.getAll("name") as string[];
  const urls = formData.getAll("url") as string[];

  const data = names.map((name, index) => {
    const url = urls[index];
    const id = ids[index] ? parseInt(ids[index] as string) : undefined;
    const finalName = name === "Other" ? urls[index] : name;

    return {
      name: finalName,
      user_id: userId,
      id,
      url,
    };
  });

  const { error } = await supabase.from("links").upsert(data, {
    defaultToNull: false,
  });
  if (error) console.log("Error saving links", error);

  const result = await supabase.from("links").select("*").eq("user_id", userId);
  cookies().set("links", JSON.stringify(result.data));

  return result.data;
}

export async function deleteLink(id: number | string) {
  const supabase = createClient();
  const userObj = await supabase.auth.getSession();
  const userId = userObj.data.session?.user.id;

  if (!userId) {
    console.error("User not found");
    return;
  }

  if (typeof id === "string") {
    const existingLinksStr = cookies().get("links")?.value;
    const existingLinks = JSON.parse(existingLinksStr ?? "");
    const updatedLinks = existingLinks.filter((link: any) => link.id !== id);
    cookies().set("links", JSON.stringify(updatedLinks));
  }

  const { error } = await supabase.from("links").delete().eq("id", id);
  if (error) console.error("Error deleting link", error);

  const result = await supabase.from("links").select("*").eq("user_id", userId);
  cookies().set("links", JSON.stringify(result.data));
}

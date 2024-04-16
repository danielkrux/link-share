"use server";

import { cookies } from "next/headers";
import { nanoid } from "nanoid";
import { createClient } from "../lib/supabase/createServerClient";

export async function createNewLink() {
  const supabase = createClient();
  const userObj = await supabase.auth.getSession();
  const userId = userObj.data.session?.user.id;

  const newLink = {
    id: nanoid(),
    name: "",
    url: "",
    userId,
  };

  const existingLinks = cookies().get("links")?.value;
  if (existingLinks) {
    const links = JSON.parse(existingLinks) ?? [];
    links.push(newLink);
    cookies().set("links", JSON.stringify(links));
    return;
  }

  cookies().set("links", JSON.stringify([newLink]));
}

export async function saveLinks(formData: FormData) {
  const supabase = createClient();
  const userObj = await supabase.auth.getSession();
  const userId = userObj.data.session?.user.id;

  const ids = formData.getAll("id");
  const names = formData.getAll("name");
  const urls = formData.getAll("url");

  const data = names.map((name, index) => ({
    name,
    user_id: userId,
    id: ids[index] ? parseInt(ids[index] as string) : undefined,
    url: urls[index],
  }));

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

  if (typeof id === "string") {
    const existingLinksStr = cookies().get("links")?.value;
    const existingLinks = JSON.parse(existingLinksStr ?? "");
    const updatedLinks = existingLinks.filter((link: any) => link.id !== id);
    cookies().set("links", JSON.stringify(updatedLinks));
  }

  const { error } = await supabase.from("links").delete().eq("id", id);
  if (error) console.log("Error deleting link", error);

  const result = await supabase.from("links").select("*").eq("user_id", userId);
  cookies().set("links", JSON.stringify(result.data));
}

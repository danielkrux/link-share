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

  await supabase.from("links").upsert(data, {
    defaultToNull: false,
  });
  const result = await supabase.from("links").select("*");

  cookies().set("links", JSON.stringify(result.data));

  return result.data;
}

export async function deleteLink(id: number | string) {
  const supabase = createClient();

  if (typeof id === "string") {
    const existingLinksStr = cookies().get("links")?.value;
    const existingLinks = JSON.parse(existingLinksStr ?? "");
    const updatedLinks = existingLinks.filter((link: any) => link.id !== id);
    cookies().set("links", JSON.stringify(updatedLinks));
  }

  await supabase.from("links").delete().eq("id", id);
  const result = await supabase.from("links").select("*");
  cookies().set("links", JSON.stringify(result.data));
}

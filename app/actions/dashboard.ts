import { createClient } from "../lib/supabase/createBrowserClient";

export async function saveLinks(_: any, formData: FormData) {
  const supabase = createClient();
  const userObj = await supabase.auth.getUser();
  const userId = userObj.data.user?.id;

  const ids = formData.getAll("id");
  const names = formData.getAll("name");
  const urls = formData.getAll("url");

  const data = names.map((name, index) => ({
    name,
    user_id: userId,
    id: ids[index] ? parseInt(ids[index] as string) : undefined,
    url: urls[index],
  }));

  const result = await supabase
    .from("links")
    .upsert(data, {
      defaultToNull: false,
    })
    .select("*");

  return result.data;
}

export async function deleteLink(id: number) {
  const supabase = createClient();

  await supabase.from("links").delete().eq("id", id);
}

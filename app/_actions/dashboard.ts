import { createClient } from "../_lib/supabase/createBrowserClient";

export async function saveLinks(formData: FormData) {
  const supabase = createClient();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  // Save the data to the database
}

export async function deleteLink(id: number) {
  const supabase = createClient();
  // Delete the link from the database
  await supabase.from("links").delete().eq("id", id);
}

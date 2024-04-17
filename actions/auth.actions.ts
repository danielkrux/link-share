import { createClient as createServerClient } from "../lib/supabase/createServerClient";

export async function getUser() {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

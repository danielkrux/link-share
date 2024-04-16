import { createClient as createServerClient } from "../lib/supabase/createServerClient";
import { createClient as createBrowserClient } from "../lib/supabase/createBrowserClient";

export async function getUserServer() {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function getUserClient() {
  const supabase = createBrowserClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

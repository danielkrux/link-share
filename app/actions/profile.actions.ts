"use server";

import { createClient } from "../lib/supabase/createServerClient";
import { getUserServer } from "./auth.actions";

export async function getProfileData(id?: string) {
  const supabase = createClient();
  const currentUser = await getUserServer();

  const userId = id ?? currentUser?.id;
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  return { ...data, user_id: userId, email: currentUser?.email };
}

export async function saveProfileData(formData: FormData) {
  const supabase = createClient();
  const user = await getUserServer();
  const profile = await supabase
    .from("profiles")
    .select()
    .eq("user_id", user?.id)
    .single();

  const firstName = formData.get("first_name") as string;
  const lastName = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const avatar = formData.get("avatar") as File;

  console.log({ firstName, lastName, email, avatar });

  try {
    let avatarUrl = profile?.avatar_url;
    if (avatar) {
      const fileExt = avatar.name.split(".").pop();
      const filePath = `${user?.id}.${fileExt}`;
      await supabase.storage.from("avatars").upload(filePath, avatar);
      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
      avatarUrl = data.publicUrl;
    }

    const { error } = await supabase.from("profiles").upsert({
      id: profile?.id,
      first_name: firstName,
      last_name: lastName,
      avatar_url: avatarUrl,
      user_id: user?.id,
    });

    console.log(error);
  } catch (error) {
    console.error("Error saving profile", error);
  }
}

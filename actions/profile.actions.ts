"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "../types/supabase";
import { getUserServer } from "./auth.actions";
import { revalidatePath } from "next/cache";

export async function getProfileData(id?: string) {
  const supabase = createServerActionClient<Database>({ cookies });
  const currentUser = await getUserServer();

  const userId = id ?? currentUser?.id;

  if (!userId) throw new Error("No user ID provided");

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  return { ...data, user_id: userId };
}

export async function saveProfileData(formData: FormData) {
  const supabase = createServerActionClient<Database>({ cookies });
  const user = await getUserServer();

  if (!user) throw new Error("No user found");

  try {
    const { data: profile, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_id", user?.id)
      .single();

    if (error) {
      console.log("No profile found...");
    }

    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const avatar = formData.get("avatar") as File;

    let avatarUrl = profile?.avatar_url;

    if (avatar.size) {
      const fileExt = avatar.name.split(".").pop();
      const filePath = `${user?.id}.${fileExt}`;
      await supabase.storage.from("avatars").upload(filePath, avatar);
      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
      avatarUrl = data.publicUrl;
    }

    if (email !== user?.email) {
      await supabase.auth.updateUser({ email });
    }

    const { error: saveError } = await supabase.from("profiles").upsert({
      id: profile?.id,
      first_name: firstName,
      last_name: lastName,
      email,
      avatar_url: avatarUrl,
      user_id: user?.id,
    });

    if (saveError) {
      console.error(saveError);
      throw new Error("Error saving profile");
    }

    revalidatePath("/profile", "layout");
  } catch (error) {
    console.error(error);
  }
}

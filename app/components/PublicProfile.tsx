import React from "react";
import { getUserServer } from "../actions/auth.actions";
import { createClient } from "../lib/supabase/createServerClient";
import ArrowRight from "@/public/icons/icon-arrow-right.svg";
import Image from "next/image";

export default async function PublicProfile() {
  const supabase = createClient();
  const user = await getUserServer();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();
  const { data: userLinks } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", user?.id);

  return (
    <div>
      <section className="mb-14 flex flex-col items-center">
        <div className="relative aspect-square w-24 rounded-full overflow-hidden mb-6">
          <Image
            alt="avatar"
            src={profile?.avatar_url}
            fill
            objectFit="cover"
          />
        </div>
        <h1 className="text-heading-m mb-2">
          {profile?.first_name} {profile?.last_name}
        </h1>
        <a href={`mailto:${user?.email}`}>{user?.email}</a>
      </section>
      <section>
        <ul>
          {userLinks?.map((link: any) => (
            <a key={link.id} href={link.url} target="_blank">
              <li className="p-3 bg-lightgray rounded-lg flex justify-between max-w-60">
                <span>{link.name}</span>
                <ArrowRight className="w-5" />
              </li>
            </a>
          ))}
        </ul>
      </section>
    </div>
  );
}

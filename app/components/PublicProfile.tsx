import React from "react";
import Image from "next/image";

import ArrowRight from "@/public/icons/icon-arrow-right.svg";

import { createClient } from "../lib/supabase/createServerClient";
import { getProfileData } from "../actions/profile.actions";
import { cookies } from "next/headers";

export default async function PublicProfile({ id }: { id?: string }) {
  const supabase = createClient();
  const currentLinksStr = cookies().get("links")?.value;
  const authenticatedUserLinks = JSON.parse(currentLinksStr ?? "[]");

  const profile = await getProfileData();
  const session = await supabase.auth.getSession();

  const user = session.data.session?.user;

  const { data: userLinks } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", id);

  const links = id ? userLinks : authenticatedUserLinks;

  return (
    <div className="z-10">
      <section className="mb-14 flex flex-col items-center">
        <div className="relative aspect-square w-24 rounded-full overflow-hidden mb-6">
          <Image
            alt="avatar"
            src={profile?.avatar_url ?? ""}
            fill
            className="object-cover bg-gray"
          />
        </div>
        <h1 className="text-heading-m mb-2">
          {profile?.first_name} {profile?.last_name}
        </h1>
        <a href={`mailto:${user?.email}`}>{user?.email}</a>
      </section>
      <section>
        <ul>
          {links?.map((link: any) => (
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

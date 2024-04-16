import React from "react";
import Image from "next/image";

import ArrowRight from "@/public/icons/icon-arrow-right.svg";

import { getProfileData } from "../actions/profile.actions";
import { cn } from "../lib/utils";
import { getLinks } from "../actions/dashboard.actions";

export default async function PublicProfile({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  const profile = await getProfileData(id);
  const userLinks = await getLinks(profile.user_id);

  return (
    <div className={cn(className, "z-10")}>
      <section className="mb-14 flex flex-col items-center ">
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
        <a className="text-gray" href={`mailto:${profile?.email}`}>
          {profile?.email}
        </a>
      </section>
      <section className="">
        <ul className="flex flex-col items-center gap-4 ">
          {userLinks?.map((link: any) => (
            <li key={link.id} className="group min-w-[240px]">
              <a
                href={link.url}
                className="p-4 bg-lightgray rounded-lg flex justify-between max-w-60"
                target="_blank"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 pr-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

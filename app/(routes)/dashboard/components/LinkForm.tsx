import React from "react";
import { cookies } from "next/headers";

import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import { getLinks, saveLinks } from "@/app/actions/dashboard.actions";
import { Tables } from "@/app/types/supabase";
import { createClient } from "@/app/lib/supabase/createServerClient";

import NoLinks from "./NoLinks";
import PlatformSelect from "./PlatformSelect";
import AddLinkButton from "./AddLinkButton";
import DeleteLinkButton from "./DeleteLinkButton";

const isNumber = (id: string | number) => typeof id === "number";

export default async function LinkForm() {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data.session?.user;

  const linksRaw = cookies().get("links")?.value;
  let links: Tables<"links">[] = JSON.parse(linksRaw ?? "[]");

  if (!links.length && user?.id) {
    links = (await getLinks(user.id)) ?? [];
  }

  return (
    <>
      {!links?.length && <NoLinks />}
      <form
        className="flex flex-col flex-grow overflow-scroll"
        action={saveLinks}
      >
        <ul className="mx-6 lg:mx-10 pb-[100px] lg:mb-1">
          <AddLinkButton />
          {links?.map((link, index) => (
            <li
              key={link.id}
              className="text-gray rounded-lg mt-6 px-4 py-8 bg-lightgray flex flex-col gap-3"
            >
              <div className="flex row items-center justify-between">
                <h2 className="text-heading-s">Link #{index + 1}</h2>
                <DeleteLinkButton link={link} />
              </div>
              <PlatformSelect defaultValue={link.name ?? ""} />
              <input
                type="hidden"
                name="id"
                value={isNumber(link.id) ? link.id : ""}
              />
              <Input label="Link" name="url" defaultValue={link.url ?? ""} />
            </li>
          ))}
        </ul>
        <div className="flex absolute bottom-0 left-0 right-0 lg:justify-end bg-white p-6 border-t border-borders">
          <SubmitButton className="w-full lg:w-auto" />
        </div>
      </form>
    </>
  );
}

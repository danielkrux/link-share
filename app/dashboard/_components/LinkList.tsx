import { createClient } from "@/app/_lib/supabase/createServerClient";
import React from "react";

export default async function LinkList() {
  const supabase = createClient();
  const { data } = await supabase.from("links").select("*");

  return (
    <>
      {data?.map((link) => (
        <div
          key={link.id}
          className="text-gray rounded-lg mt-6 px-4 py-8 text-center bg-lightgray "
        >
          <p>{link.name}</p>
          <a href={link.url} target="_blank">
            {link.url}
          </a>
        </div>
      ))}
    </>
  );
}

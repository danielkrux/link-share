import React from "react";

import { createClient } from "@/app/lib/supabase/createServerClient";
import LinkForm from "./components/LinkForm";

export default async function DashboardHome() {
  const supabase = createClient();
  const { data } = await supabase.from("links").select("*");

  return (
    <div className="flex flex-col flex-grow relative bg-white overflow-hidden rounded-lg">
      <section className="p-6 lg:px-10">
        <h1 className="text-heading-m md:text-heading-l mb-2">
          Customize your links
        </h1>
        <p className="text-gray">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </section>

      <LinkForm data={data as any[]} />
    </div>
  );
}

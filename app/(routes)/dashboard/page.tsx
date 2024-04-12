import React from "react";

import { createClient } from "@/app/lib/supabase/createServerClient";
import LinkForm from "./components/LinkForm";

export default async function DashboardHome() {
  const supabase = createClient();
  const { data } = await supabase.from("links").select("*");

  return (
    <section className="flex-grow bg-white p-6 lg:p10 rounded-lg">
      <h1 className="text-heading-m md:text-heading-l mb-2">
        Customize your links
      </h1>
      <p className="text-gray mb-10">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <LinkForm data={data as any[]} />
    </section>
  );
}

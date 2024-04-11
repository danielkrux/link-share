import React from "react";

import Button from "../_components/Button";
import { createClient } from "../_utils/supabase/createServerClient";
import NoLinks from "./_components/NoLinks";
import LinkList from "./_components/LinkList";

export default async function DashboardHome() {
  const supabase = createClient();
  const { data } = await supabase.from("links").select("*");

  return (
    <section className="bg-white p-6 rounded-lg">
      <h1 className="text-heading-m mb-2">Customize your links</h1>
      <p className="text-gray mb-10">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Button className="w-full" variant="secondary">
        Add new link
      </Button>
      {!data?.length && <NoLinks />}
      <LinkList />
    </section>
  );
}

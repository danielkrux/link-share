import React from "react";

import Button from "@/app/components/Button";
import PublicProfile from "@/app/components/PublicProfile";
import { createClient } from "@/app/lib/supabase/createServerClient";

export default async function UserLinks({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="flex flex-col max-h-screen m-6 before:bg-purple before:-z-10 before:absolute before:left-0 before:top-0 before:right-0 before:h-1/3 before:rounded-b-[32px] before:hidden md:before:block">
      {session && session?.user?.id === params.id && (
        <header className="flex justify-between lg:bg-white lg:px-6 lg:py-4 rounded-xl">
          <Button href="/dashboard" variant="secondary">
            Back to Editor
          </Button>
          <Button>Share link</Button>
        </header>
      )}
      <PublicProfile
        className="bg-white py-16 lg:px-14 lg:py-12 lg:rounded-[32px] lg:mt-44 max-w-fit lg:shadow-lg self-center"
        id={params.id}
      />
    </main>
  );
}

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
  const { data: userData } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col min-h-screen m-6">
      {userData && userData?.user?.id === params.id && (
        <div className="flex justify-between">
          <Button href="/dashboard" variant="secondary">
            Back to Editor
          </Button>
          <Button>Share link</Button>
        </div>
      )}
      <PublicProfile id={params.id} />
    </main>
  );
}

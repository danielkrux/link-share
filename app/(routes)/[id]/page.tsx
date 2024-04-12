import Button from "@/app/components/Button";
import { createClient } from "@/app/lib/supabase/createServerClient";
import React from "react";

export default async function UserLinks({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", params.id);

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
      <section className="mt-14">
        <a href={`mailto:${userData.user?.email}`}>{userData.user?.email}</a>
        <ul>
          {data?.map((link: any) => (
            <li key={link.id}>
              <a href={link.url} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

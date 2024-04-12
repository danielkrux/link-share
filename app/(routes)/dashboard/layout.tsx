import React from "react";

import Navigation from "./components/Navigation";
import PublicProfile from "@/app/components/PublicProfile";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-lightgray md:p-8">
      <Navigation />
      <div className="flex gap-6">
        <aside className="hidden lg:flex flex-col flex-1 items-center justify-center mt-4 p-6 bg-white rounded-lg">
          <PublicProfile />
        </aside>
        <main className="flex-1 m-4 md:m-0 md:mt-4">{children}</main>
      </div>
    </div>
  );
}

import React from "react";

import Navigation from "./components/Navigation";
import PublicProfile from "@/app/components/PublicProfile";
import PhoneFrame from "@/public/phone.svg";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col min-h-screen bg-lightgray md:p-8">
      <Navigation />
      <div className="flex flex-grow gap-6 mt-4 md:mt-6">
        <aside className="hidden lg:flex flex-col flex-grow flex-1 items-center justify-center p-6 bg-white rounded-lg">
          <PhoneFrame className="absolute max-w-[300px]" />
          <PublicProfile />
        </aside>
        <main className="flex-1 m-4 md:m-0 flex flex-col flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}

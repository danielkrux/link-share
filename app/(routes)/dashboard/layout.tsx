import Image from "next/image";
import React from "react";

import Nav from "../../components/Nav";
import Buttton from "../../components/Button";
import PreviewIcon from "@/public/icons/icon-preview-header.svg";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-lightgray md:p-8">
      <header className="relative bg-white py-4 px-6 flex justify-between items-center rounded-b-lg md:rounded-lg">
        <Image
          alt="logo small"
          src="/logo-small.svg"
          className="md:hidden"
          width={32}
          height={32}
        />
        <Image
          alt="logo small"
          src="/logo-large.svg"
          className="hidden md:block"
          width="146"
          height="32"
        />
        <Nav />
        <Buttton variant="secondary">
          <PreviewIcon className="size-[20px] md:hidden" />
          <span className="hidden mx-4 md:block">Preview</span>
        </Buttton>
      </header>
      <main className="flex-1 m-4 md:m-0 md:mt-4">{children}</main>
    </div>
  );
}

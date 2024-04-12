import React from "react";
import Image from "next/image";

import { getUserServer } from "@/app/actions/auth.actions";
import Button from "@/app/components/Button";
import Nav from "@/app/components/Nav";
import PreviewIcon from "@/public/icons/icon-preview-header.svg";

export default async function Navigation() {
  const user = await getUserServer();

  return (
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
      <Button href={`/${user?.id}`} variant="secondary">
        <PreviewIcon className="size-[20px] md:hidden" />
        <span className="hidden mx-4 md:block">Preview</span>
      </Button>
    </header>
  );
}

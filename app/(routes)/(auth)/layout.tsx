import Image from "next/image";
import React from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:justify-center md:items-center min-h-screen m-8 md:m-0 bg-white md:bg-lightgray">
      <Image
        className="md:mb-12"
        alt="large logo"
        src="/logo-large.svg"
        width="183"
        height="40"
      />
      <div className="bg-white md:rounded-lg">{children}</div>
    </div>
  );
}

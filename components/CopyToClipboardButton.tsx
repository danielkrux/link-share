"use client";

import React from "react";
import Button from "./ui/Button";

export default function CopyToClipboardButton({
  children,
}: {
  children: string;
}) {
  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
  }

  return <Button onClick={handleClick}>{children}</Button>;
}

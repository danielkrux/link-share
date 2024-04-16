"use client";

import React from "react";
import Button from "./ui/Button";
import { useToast } from "./ui/use-toast";

export default function CopyToClipboardButton({
  children,
}: {
  children: string;
}) {
  const { toast } = useToast();

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);

    toast({ description: "The link has been copied to your clipboard!" });
  }

  return <Button onClick={handleClick}>{children}</Button>;
}

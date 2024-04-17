"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import Button from "@/components/ui/Button";
import { cn } from "../lib/utils";

export default function SubmitButton({
  label,
  loadingLabel,
  className,
}: {
  label?: string;
  loadingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className={cn(className)}>
      {pending ? loadingLabel ?? "Saving..." : label ?? "Save"}
    </Button>
  );
}

"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import Button from "@/app/components/Button";
import { cn } from "../utils/utils";

export default function SubmitButton({ className }: { className?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className={cn(className)}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

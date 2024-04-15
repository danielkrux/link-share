"use client";

import { deleteLink } from "@/app/actions/dashboard";
import Button from "@/app/components/Button";
import { Tables } from "@/app/types/supabase";
import React from "react";

export default function DeleteLinkButton({ link }: { link: Tables<"links"> }) {
  return (
    <Button
      onClick={() => deleteLink(link.id)}
      className="mt-2"
      variant="ghost"
      type="button"
    >
      Delete
    </Button>
  );
}

"use client";

import { deleteLink } from "@/actions/dashboard.actions";
import Button from "@/components/ui/Button";
import { Tables } from "@/types/supabase";
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

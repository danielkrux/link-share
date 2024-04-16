"use client";

import React from "react";

import { createNewLink } from "@/actions/dashboard.actions";
import Button from "@/components/ui/Button";

export default function AddLinkButton() {
  return (
    <Button
      onClick={() => createNewLink()}
      className="w-full"
      type="button"
      variant="secondary"
    >
      Add new link
    </Button>
  );
}

"use client";

import React from "react";

import { createNewLink } from "@/app/actions/dashboard";
import Button from "@/app/components/Button";

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

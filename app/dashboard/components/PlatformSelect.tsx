"use client";

import Select from "@/components/ui/Select";
import React from "react";

const platforms = [
  "Twitter",
  "GitHub",
  "LinkedIn",
  "YouTube",
  "DEV Community",
  "Other",
];

export default function PlatformSelect({
  defaultValue,
}: {
  defaultValue: string;
}) {
  const exists = platforms.find((platform) => platform === defaultValue);
  return (
    <Select
      label="Platform"
      options={platforms}
      name="name"
      defaultValue={exists ? defaultValue : "Other"}
    />
  );
}

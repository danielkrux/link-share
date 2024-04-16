"use client";

import Select from "@/app/components/Select";
import React from "react";

const platforms = [
  {
    name: "Twitter",
    value: "Twitter",
  },
  {
    name: "GitHub",
    value: "GitHub",
  },
  {
    name: "LinkedIn",
    value: "LinkedIn",
  },
  {
    name: "YouTube",
    value: "YouTube",
  },
  {
    name: "DEV Community",
    value: "DevCommunity",
  },
  {
    name: "Other",
    value: "Other",
  },
];

export default function PlatformSelect({
  defaultValue,
}: {
  defaultValue: string;
}) {
  return (
    <Select
      label="Platform"
      options={platforms}
      name="name"
      defaultValue={defaultValue}
    />
  );
}

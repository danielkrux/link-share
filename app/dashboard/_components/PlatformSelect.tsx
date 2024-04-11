import Select from "@/app/_components/Select";
import React from "react";

const platforms = [
  {
    name: "Twitter",
    value: "twitter",
  },
  {
    name: "GitHub",
    value: "GitHub",
  },
  {
    name: "LinkedIn",
    value: "linkedin",
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

import React from "react";
import { useFormStatus } from "react-dom";

import Button from "@/app/components/Button";

export default function LinkFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full mt-6">
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

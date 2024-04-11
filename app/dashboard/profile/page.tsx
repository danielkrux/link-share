"use client";

import { logout } from "@/app/(auth)/actions";
import Button from "@/app/_components/Button";
import React from "react";

export default function Profile() {
  return (
    <div>
      <span className="block mb-5">Profile</span>
      <Button onClick={() => logout()} className="w-full" variant="secondary">
        Sign out
      </Button>
    </div>
  );
}

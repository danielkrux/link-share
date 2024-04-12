import Button from "@/app/components/Button";
import React from "react";

export default function LogoutButton({ className }: { className?: string }) {
  return (
    <form className={className} action="/signout" method="post">
      <Button variant="secondary" type="submit">
        Sign out
      </Button>
    </form>
  );
}

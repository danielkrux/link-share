import Link from "next/link";
import React from "react";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";

export default function LoginPage() {
  return (
    <div className="mt-16 md:m-10 md:min-w-[480px]">
      <h1 className="text-darkgray text-heading-m mb-2">Login</h1>
      <p className="text-gray mb-10">
        Add your details below to get back into the app
      </p>
      <form action="" className="flex flex-col gap-6 mb-6">
        <Input
          name="email"
          label="Email address"
          type="email"
          autoComplete="email"
        />
        <Input
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit">Login</Button>
      </form>
      <div className="flex flex-col items-center">
        <p className="text-gray text-center">Don&apos;t have an account?</p>
        <Link className="text-purple text-center" href="signup">
          Create account
        </Link>
      </div>
    </div>
  );
}

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="mt-16 md:m-10 md:min-w-[480px]">
      <h1 className="text-darkgray text-heading-m mb-2">Create account</h1>
      <p className="text-gray mb-10">
        Let&apos;s get you started sharing your links!
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
          label="Create password"
          type="password"
          autoComplete="new-password"
        />
        <Input
          name="password"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
        />
        <Button type="submit">Create new account</Button>
      </form>
      <div className="flex flex-col items-center">
        <p className="text-gray text-center">Already have an account?</p>
        <Link className="text-purple text-center" href="login">
          Login
        </Link>
      </div>
    </div>
  );
}

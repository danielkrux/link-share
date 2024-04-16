"use client";

import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { createAccount } from "../actions";

const initialState = {
  error: {
    email: [],
    password: [],
    confirmPassword: [],
  },
};

export default function SignUp() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createAccount, initialState);

  return (
    <div className="mt-16 md:m-10 md:min-w-[480px]">
      <h1 className="text-darkgray text-heading-m mb-2">Create account</h1>
      <p className="text-gray mb-10">
        Let&apos;s get you started sharing your links!
      </p>
      <form action={formAction} className="flex flex-col gap-6 mb-6">
        <Input
          name="email"
          label="Email address"
          type="email"
          autoComplete="email"
          error={state?.error?.email?.[0]}
        />
        <Input
          name="password"
          label="Create password"
          type="password"
          autoComplete="new-password"
          error={state?.error?.password?.[0]}
        />
        <Input
          name="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          error={state?.error?.confirmPassword?.[0]}
        />
        <Button disabled={pending} type="submit">
          Create new account
        </Button>
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

"use client";

import Link from "next/link";
import React from "react";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../actions";

const initialState = {
  error: {
    email: [],
    password: [],
    confirmPassword: [],
  },
};

export default function LoginPage() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className="mt-16 md:m-10 md:min-w-[480px]">
      <h1 className="text-darkgray text-heading-m mb-2">Login</h1>
      <p className="text-gray mb-10">
        Add your details below to get back into the app
      </p>
      <form action={formAction} className="flex flex-col gap-6 mb-6">
        <Input
          name="email"
          label="Email address"
          type="email"
          autoComplete="email"
          value="danielmartijn@gmail.com"
          readOnly
          error={state?.error?.email?.[0]}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          value="test-123"
          autoComplete="current-password"
          readOnly
          error={state?.error?.password?.[0]}
        />
        <Button disabled={pending} type="submit">
          Login
        </Button>
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

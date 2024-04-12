"use server";

import { z } from "zod";
import { createClient } from "../../lib/supabase/createServerClient";
import { redirect } from "next/navigation";

const supabase = createClient();

const schema = z
  .object({
    email: z
      .string()
      .email("This is not a valid email")
      .min(1, "Email is required"),

    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const validatedFields = schema.safeParse({
    email,
    password,
    confirmPassword,
  });

  if (!validatedFields.success) {
    console.log("here");
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });
}

const loginSchema = z.object({
  email: z
    .string()
    .email("This is not a valid email")
    .min(1, "Email is required"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const validatedFields = loginSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });

  if (error) {
    return {
      error: {
        email: ["Invalid email or password"],
        password: ["Invalid email or password"],
      },
    };
  }

  redirect("/dashboard");
}

export async function logout() {
  await supabase.auth.signOut();
  // redirect("/login");
}

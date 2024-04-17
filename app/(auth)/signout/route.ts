import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient(
    { cookies },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_SERVICE_KEY,
    }
  );

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      cookies().delete("links");
      await supabase.auth.signOut();
    }
  } catch (error) {
    console.error(error);
  }

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}

import { NextResponse, NextRequest } from "next/server";
import { updateSession } from "./app/lib/supabase/updateSession";

export default async function middleware(request: NextRequest) {
  const { supabase } = await updateSession(request);
  const user = await supabase.auth.getUser();
  const isAuthenticated = Boolean(user.data.user);

  const headers = new Headers(request.headers);
  headers.set("x-url", request.url);

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next({
      request: {
        headers,
      },
    });
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard"],
};

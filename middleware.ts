import { NextResponse, NextRequest } from "next/server";
import { createClient } from "./app/_utils/supabase/server";

export default async function middleware(request: NextRequest) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const isAuthenticated = Boolean(user.data.user);

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard"],
};

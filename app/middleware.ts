import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const isAuthenticated = authenticate(request);

  // If the user is authenticated, continue as normal
  if (false) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};

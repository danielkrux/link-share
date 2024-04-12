import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const user = await supabase.auth.getUser();
  const isAuthenticated = Boolean(user.data.user);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  if (!isAuthenticated && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/dashboard"],
};

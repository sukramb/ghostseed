import { auth } from "@/src/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const isSignedIn = !!req.auth;

  if (isDashboard && !isSignedIn) {
    const url = new URL("/signin", nextUrl);
    url.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};

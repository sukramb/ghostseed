import { auth } from "@/src/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/src/db";

export default auth(async (req) => {
  const { nextUrl } = req;
  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const isOnboarding = nextUrl.pathname.startsWith("/onboarding");
  const isSignedIn = !!req.auth;

  if (!isSignedIn && (isDashboard || isOnboarding)) {
    const url = new URL("/signin", nextUrl);
    url.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (isSignedIn && isDashboard) {
    const userId = (req.auth as any).user?.id as string | undefined;
    if (userId) {
      const member = await prisma.teamMember.findFirst({ where: { userId } });
      if (!member) {
        const url = new URL("/onboarding", nextUrl);
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding"],
};

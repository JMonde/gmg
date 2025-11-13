// TODO: Next.js 15.5+ deprecation warning - middleware will be replaced by proxy in Next.js 16
// For now, keeping as middleware to maintain auth functionality
// Future migration should move auth logic to data layer and use proxy for routing only
import { NextResponse, type NextRequest } from "next/server";
import { chain } from "./middlewares/compose";
import { withAuth } from "./middlewares/withAuth";
import { REFRESH_COOKIE_NAME } from "@/infra/auth/cookies-constants";

export default async function middleware(req: NextRequest) {
  const handler = chain(
    withAuth({
      publicRoutes: ["/login", "/api/health"],
      loginPath: "/login",
      cookieName: REFRESH_COOKIE_NAME,
    }),
  );

  return await handler(req);
}

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|robots.txt|sitemap.xml|images|assets).*)",
  ],
};

import { NextResponse, type NextRequest } from "next/server";
import { chain } from "./middlewares/compose";
import { withAuth } from "./middlewares/withAuth";
import { REFRESH_COOKIE_NAME } from "@/infra/auth/cookies-constants";

// Bypass authentication when ENVIRONMENT=DEV
const shouldBypassAuth = process.env.ENVIRONMENT === "DEV";

export default async function middleware(req: NextRequest) {
  // If bypassing auth, allow all requests to pass through
  if (shouldBypassAuth) {
    return 
  }
  
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

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // ✅ Allow login page ALWAYS
  if (pathname === "/dashboard") {
    return NextResponse.next();
  }

  // ❌ If not logged in → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// 👇 Protect only dashboard
export const config = {
  matcher: ["/dashboard/:path*"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//Custom Matcher config
export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // export const config = {
  //   matcher: "/profiles",
  // };
  if (request.nextUrl.pathname === "/profiles") {
    return NextResponse.redirect(new URL("/hello", request.nextUrl));
  }
}

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware running:", request.nextUrl.pathname);

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  //response.cookies.set("theme", "dark");
  //response.headers.set("custom-header", "custom-value");

  return response;
}

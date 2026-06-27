//How to read headers
import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  //return new Response("Profile API Data");
  // return new Response("<h1>Profile API Data</h1>"); //not work
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

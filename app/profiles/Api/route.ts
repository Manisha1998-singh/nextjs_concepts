//How to read headers
import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  //return new Response("Profile API Data");
  // return new Response("<h1>Profile API Data</h1>"); //not work

  const theme = request.cookies.get("theme");
  console.log(theme);
  const cookiesStore = await cookies();
  cookiesStore.set("resultPerPage", "20");
  console.log(cookiesStore.get("resultPerPage"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

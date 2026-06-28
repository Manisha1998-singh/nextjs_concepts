export const dynamic = "force-static";
//used for dynamic time change not only page load like other
export const revalidate = 10;
export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}

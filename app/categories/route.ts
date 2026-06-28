export const dynamic = "force-static";
export async function GET() {
  const categories = [
    {
      id: 1,
      name: "Manisha",
    },
    {
      id: 2,
      name: "Books",
    },
    {
      id: 3,
      name: "Tops",
    },
    {
      id: 4,
      name: "Suits",
    },
  ];
  return Response.json(categories);
}

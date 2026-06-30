import React from "react";
export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default async function ProPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>
        Products {id} details rendered at {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
}

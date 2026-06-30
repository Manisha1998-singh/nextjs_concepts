import React from "react";
import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  console.log("About server Component");
  return <div>About Page {new Date().toLocaleTimeString()}</div>;
}

"use client";
import { serverSideFunction } from "../utils/server-utils";
export default function ClientRoutePage() {
  const result = serverSideFunction();
  return <div>Client Route Page {result}</div>;
}

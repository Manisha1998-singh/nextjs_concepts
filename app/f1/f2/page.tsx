import React from "react";
import Link from "next/link";
export default function InterceptedF2() {
  return (
    <>
      <div>F2 page</div>
      <div>
        <Link href={"/f4"}>F4</Link>
      </div>
      <div>
        <Link href={"/f5"}>F5</Link>
      </div>
    </>
  );
}

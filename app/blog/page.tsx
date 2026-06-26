import React from "react";

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 200);
  });
  return <div>list dataaa</div>;
}

import React from "react";
import Product from "@/components/product";
import Reviews from "@/components/reviews";

export default function page() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Product />
      <Reviews />
    </div>
  );
}

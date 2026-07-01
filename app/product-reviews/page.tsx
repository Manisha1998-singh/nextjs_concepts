import { Product } from "@/app/components/product";
import { Reviews } from "@/app/components/reviews";
import { Suspense } from "react";

export default function page() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading product details....</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews details....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

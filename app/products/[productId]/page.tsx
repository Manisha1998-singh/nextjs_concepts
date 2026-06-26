//import { Metadata } from "next";
//import { Redirect } from "next/navigation";
import Link from "next/link";

// type Props = {
//   params: Promise<{ productId: string }>;
// };
// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const id = (await params).productId;
//   const title = await new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve(`iphone ${id}`);
//     }, 100);
//   });
//   return {
//     title,
//   };
// };

//export default async function ProductDetails({ params }: Props) {
//const productId = (await params).productId;
export default async function ProductDetails() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      {/* <h1>Details about dynamic Product {productId}</h1> */}
      <h1>This is the section for creating dynamic title</h1>
      <h1>Product list</h1>
      <h1>
        <Link href="/products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/products/2" replace>
          Product 3
        </Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h1>
    </>
  );
}

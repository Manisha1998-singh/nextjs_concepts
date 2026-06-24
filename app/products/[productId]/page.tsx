import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Details about dynamic Product {productId}</h1>
      <h1>This is the section for creating dynamic title</h1>
    </>
  );
}

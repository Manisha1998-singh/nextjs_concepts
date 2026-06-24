import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productid;
  return {
    title: `Product ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productid = (await params).productid;
  return;
  <h1>Details about Product {productid}</h1>;
}

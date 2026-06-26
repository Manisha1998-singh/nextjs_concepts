export const metadata = {
  title: "Next.js",
  description: "Generate by Next.js",
};
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

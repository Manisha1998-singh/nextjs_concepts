export const metadata = {
  title: "Next.js",
  description: "Generate by Next.js",
};
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>
        <div>{children}</div>
        <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

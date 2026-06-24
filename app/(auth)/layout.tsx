export const metadata = {
  title: "Next.js",
  description: "Generate by Next.js",
};
export default function AuthLayout({
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
      </body>
    </html>
  );
}

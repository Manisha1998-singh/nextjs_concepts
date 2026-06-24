import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js - by Manisha",
    template: "",
    absolute: "",
  },
  description: "Generate by Next.js",
};

export default function RootLayout({
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

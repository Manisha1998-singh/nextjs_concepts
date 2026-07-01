import { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { ErrorWrapper } from "./error-wrapper";
export const metadata: Metadata = {
  title: {
    default: "Next.js - by Manisha",
    template: "%s | by Manisha",
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
      <ThemeProvider>
        <body>
          <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
            <p>Header</p>
          </header>
          <div>
            {children}
            <ErrorWrapper>{children}</ErrorWrapper>
          </div>
          <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>
            <p>Footer</p>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}

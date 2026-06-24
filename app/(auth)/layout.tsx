"use client";
import Link from "next/link";
import "./styles.css";
//current active link
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];
// export const metadata = {
//   title: "Next.js",
//   description: "Generate by Next.js",
// };
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive
                  ? "font-bold mr-4 bg-amber-500"
                  : "text-blue-500 mr-4 bg-amber-800"
              }>
              {link.name}
            </Link>
          );
        })}
        {children}
      </div>
    </>
  );
}

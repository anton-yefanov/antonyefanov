import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anton Yefanov",
  description: "Internet visit-card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="mb-10">
          <ul className="flex gap-5">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/ideas" className="hover:underline">
              SaaS Ideas
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

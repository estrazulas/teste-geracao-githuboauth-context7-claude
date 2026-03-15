import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Better Auth Demo",
  description: "Simple GitHub OAuth demo with Better Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}

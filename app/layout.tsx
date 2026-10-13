import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julker Nayeen Karim | Software Developer",
  description:
    "Portfolio of Julker Nayeen Karim, a full-stack software developer building modern web applications and AI-powered tools. Browse projects, awards, and CV.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

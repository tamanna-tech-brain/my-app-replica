import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Config — Global Digital AI Summit 2026",
  description:
    "AI relevant events. In person and online tickets now available for Global Digital AI Summit 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-[#151515] text-white">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

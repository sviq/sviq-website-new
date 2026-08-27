import type { Metadata } from "next";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = generateSEO({
  title: "SVIQ Solutions LLP",
  description:
    "SVIQ Solutions LLP builds web applications, SaaS, mobile apps, business websites, and hosting — and ships Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white" suppressHydrationWarning>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

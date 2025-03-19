import type { Metadata } from "next";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = generateSEO({
  title: "SVIQ Solutions LLP",
  description:
    "SVIQ is a leading IT & Engineering startup  providing innovative solutions to businesses. Our services include web design, eCommerce, digital marketing and more.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SpeedInsights />
        <Analytics />
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

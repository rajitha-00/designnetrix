import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import WhatsAppBot from "@/components/WhatsAppBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignNetrix | AI-Powered Web Development & Creative Agency",
  description:
    "DesignNetrix is a global creative agency specializing in AI agent development, bespoke web applications, and cinematic digital marketing. Serving businesses in the UK, Australia, and Sri Lanka with future-proof digital solutions.",
  keywords:
    "creative agency UK, digital marketing Australia, web development Sri Lanka, AI agent development, custom AI solutions, corporate branding, professional photography, cinematic videography, SEO services",
  openGraph: {
    title: "DesignNetrix | Global AI & Creative Agency",
    description:
      "Transforming businesses with AI-powered web development, cinematic marketing, and expert branding across the UK, Australia, and Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppBot />
      </body>
    </html>
  );
}

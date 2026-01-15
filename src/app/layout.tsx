import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignNetrix | Websites & Branding That Drive Company Growth",
  description:
    "Looking to build a website for your company? DesignNetrix creates fast, SEO-friendly Next.js websites and memorable branding that establishes authority, drives growth, and converts visitors. Launch with impact.",
  keywords:
    "build a website for company, build company website, company website development, corporate branding agency, website for company growth, lead generation website, Next.js development, corporate web design",
  openGraph: {
    title: "DesignNetrix | Build Your Company Website & Brand",
    description:
      "We build high-performance websites and powerful branding for companies that drive growth and establish authority.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}

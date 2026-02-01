import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "DesignNetrix | AI Automation, Web Engineering & Premium Branding",
  description:
    "DesignNetrix is a premium AI & Digital Agency building the future of business. We specialize in Custom AI Agents, High-Performance Web Apps, and Strategic Branding.",
  keywords: [
    "DesignNetrix",
    "AI Agency",
    "AI Automation",
    "Custom AI Agents",
    "Web Engineering",
    "Premium Web Design",
    "Next.js Developers",
    "Digital Transformation",
    "Software Development Company",
  ],
  openGraph: {
    title: "DesignNetrix | Future Engineering",
    description:
      "We build intelligent digital ecosystems. From autonomous AI agents to immersive web experiences.",
    url: "https://designnetrix.com",
    siteName: "DesignNetrix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://designnetrix.com/og-image.png", // Assuming you have a general OG image or will add one
        width: 1200,
        height: 630,
        alt: "DesignNetrix - Future Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignNetrix - AI & Digital Engineering",
    description: "Building the future with AI and premium web technologies.",
  },
  alternates: {
    canonical: "https://designnetrix.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://designnetrix.com/#website",
        url: "https://designnetrix.com",
        name: "DesignNetrix",
        description: "Premium AI & Digital Engineering Agency",
        publisher: { "@id": "https://designnetrix.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://designnetrix.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService", // or Organization / Corporation
        "@id": "https://designnetrix.com/#organization",
        name: "DesignNetrix",
        url: "https://designnetrix.com",
        logo: {
          "@type": "ImageObject",
          url: "https://designnetrix.com/logo_white.png",
          width: 250,
          height: 40,
        },
        image: "https://designnetrix.com/og-image.png",
        description:
          "DesignNetrix is a cutting-edge digital agency specializing in AI automation, custom software engineering, and premium brand identity.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK", // Assuming Sri Lanka based on previous context (EatFit.lk), update if needed
          addressLocality: "Colombo", // Placeholder, update if known
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          areaServed: "World",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.linkedin.com/company/designnetrix",
          "https://twitter.com/designnetrix",
          "https://www.instagram.com/designnetrix",
          // Add other social links here
        ],
        priceRange: "$$$",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}

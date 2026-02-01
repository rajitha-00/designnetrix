import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact DesignNetrix | Start Your AI & Web Project",
  description:
    "Ready to build the future? Contact DesignNetrix for premium AI development, custom web engineering, and digital branding. Let's discuss your project today.",
  keywords: [
    "Contact DesignNetrix",
    "Hire AI Developers",
    "Web Design Agency Contact",
    "Sri Lanka Web Developers",
    "Australian Digital Agency",
    "Software Engineering Quote",
    "Start a Project",
  ],
  openGraph: {
    title: "Get in Touch with DesignNetrix",
    description:
      "We are ready to bring your vision to life. Connect with our global team for a consultation.",
    url: "https://designnetrix.com/contact",
    siteName: "DesignNetrix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DesignNetrix - Let's Build the Future",
    description: "Reach out to our team of experts in AI, Web, and Design.",
  },
  alternates: {
    canonical: "https://designnetrix.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://designnetrix.com/contact/#webpage",
        url: "https://designnetrix.com/contact",
        name: "Contact DesignNetrix",
        description:
          "Contact information and project inquiry form for DesignNetrix.",
        isPartOf: { "@id": "https://designnetrix.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://designnetrix.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://designnetrix.com/contact",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://designnetrix.com/#organization",
        name: "DesignNetrix",
        url: "https://designnetrix.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+94-70-714-0146",
            contactType: "customer service",
            email: "designnetix@outlook.com",
            areaServed: "World",
            availableLanguage: ["English"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/designnetrix",
          "https://twitter.com/designnetrix",
          "https://www.instagram.com/designnetrix",
          "https://www.facebook.com/designnetrix",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}

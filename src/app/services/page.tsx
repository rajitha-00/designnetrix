import { Metadata } from "next";
import LightRays from "@/components/Rays";
import { Approch, HeroServies } from "@/components/servicesSection";
import { ProvenWorks } from "@/components/servicesSection/ProvenWorks";
import { Services } from "@/components/servicesSection/Services";
import { CTAService } from "@/components/servicesSection/CTAService";
import { SERVISES } from "@/constanats/servises";

export const metadata: Metadata = {
  title: "Premium Digital Services | Branding, AI & Web Dev | DesignNetrix",
  description:
    "DesignNetrix delivers cutting-edge digital solutions including Custom AI Agents, Premium Branding, UI/UX Design, and Scalable Web Development. Transform your business with future-ready tech.",
  keywords: [
    "DesignNetrix",
    "Web Development",
    "AI Agents",
    "Custom AI",
    "Branding Service",
    "UI/UX Design",
    "Mobile App Development",
    "SEO Services",
    "Video Production",
    "Real Estate Photography",
  ],
  openGraph: {
    title: "Premium Digital Services | DesignNetrix",
    description:
      "From Custom AI Agents to stunning Web Apps. DesignNetrix builds the future of your business with high-end philosophy and engineering.",
    url: "https://designnetrix.com/services",
    siteName: "DesignNetrix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignNetrix Services - Future Engineering",
    description: "Explore our premium services: AI, Branding, Web, and Mobile.",
  },
  alternates: {
    canonical: "https://designnetrix.com/services",
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

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://designnetrix.com/#organization",
        name: "DesignNetrix",
        url: "https://designnetrix.com",
        logo: {
          "@type": "ImageObject",
          url: "https://designnetrix.com/logo_white.png",
          width: 250,
          height: 40,
        },
        description:
          "A premium digital agency specializing in AI, Web, and Brand Engineering.",
      },
      {
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
            name: "Services",
            item: "https://designnetrix.com/services",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://designnetrix.com/services/#webpage",
        url: "https://designnetrix.com/services",
        name: "Premium Digital Services",
        isPartOf: { "@id": "https://designnetrix.com/#website" },
        about: { "@id": "https://designnetrix.com/#organization" },
        description:
          "Comprehensive list of digital services offered by DesignNetrix.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: SERVISES.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.shortDesc,
            provider: { "@id": "https://designnetrix.com/#organization" },
            serviceType: service.subtitle,
            offers: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.fullContent.headline,
              },
            },
          })),
        },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-screen ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 -z-20 mix-blend-screen pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <HeroServies />
      <Services />
      <Approch />
      <ProvenWorks />
      <CTAService />
    </div>
  );
}

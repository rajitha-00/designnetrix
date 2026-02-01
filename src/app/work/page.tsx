import { Metadata } from "next";
import { WorkHero } from "@/components/workSection/WorkHero";
import { WebShowcase } from "@/components/workSection/WebShowcase";
// import { SocialGrid } from "@/components/workSection/SocialGrid";
import { VideoVault } from "@/components/workSection/VideoVault";
import { CTAService } from "@/components/servicesSection/CTAService";
import { PROJECTS_SHOWCASE } from "@/constanats/clients";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Web, App & AI Projects | DesignNetrix",
  description:
    "Explore DesignNetrix's portfolio of high-performance websites, custom AI agents, and stunning branding projects. See how we build the future.",
  keywords: [
    "DesignNetrix Portfolio",
    "Web Design Case Studies",
    "AI Project Examples",
    "App Development Portfolio",
    "Branding Gallery",
    "RH Cleaning",
    "EatFit.lk",
    "Realm Interiors",
    "XiangYun",
  ],
  openGraph: {
    title: "Our Masterpieces | DesignNetrix Portfolio",
    description:
      "A showcase of our best work. From modern corporate sites to complex POS systems and custom AI solutions.",
    url: "https://designnetrix.com/work",
    siteName: "DesignNetrix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://designnetrix.com/projects/Eatfit.png", // Featured image
        width: 1200,
        height: 630,
        alt: "DesignNetrix Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignNetrix Portfolio - Digital Excellence",
    description: "Check out our latest projects in Web, AI, and Branding.",
  },
  alternates: {
    canonical: "https://designnetrix.com/work",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Work",
            item: "https://designnetrix.com/work",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://designnetrix.com/work/#webpage",
        url: "https://designnetrix.com/work",
        name: "Our Work & Portfolio",
        description:
          "Showcase of DesignNetrix's digital projects and case studies.",
        isPartOf: { "@id": "https://designnetrix.com/#website" },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: PROJECTS_SHOWCASE.map((project, index) => ({
            "@type": "CreativeWork",
            position: index + 1,
            name: project.title,
            headline: project.brand,
            description: project.description,
            image: `https://designnetrix.com${project.imageUrl}`,
            url:
              project.link !== "#"
                ? project.link
                : "https://designnetrix.com/work",
            keywords: project.tags.join(", "),
            creator: {
              "@type": "Organization",
              name: "DesignNetrix",
            },
          })),
        },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero: "Our Masterpieces" */}
      <WorkHero />

      {/* 2. Web & POS Carousel: "Digital Ecosystems" */}
      <WebShowcase />

      {/* 3. Video Showcase: "Cinema Vault" */}
      <VideoVault />

      {/* 4. Social Media Grid: "Social Pulse" */}
      {/* <SocialGrid /> */}

      {/* 5. Final CTA */}
      <CTAService />
    </div>
  );
}

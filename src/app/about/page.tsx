import { Metadata } from "next";
import { AboutHero } from "@/components/aboutSection/AboutHero";
import { OurStory } from "@/components/aboutSection/OurStory";
import { GlobalPulse } from "@/components/aboutSection/GlobalPulse";
import { CTAService } from "@/components/servicesSection/CTAService";
import ThreeDHoverGallery from "@/components/lightswind/3d-hover-gallery";
import { SectionTitle } from "@/components/SectionTitle";

// Team/Culture Images
const CULTURE_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // Team working
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", // Collaboration
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Meeting
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // Office vibes
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", // Strategy
];

export const metadata: Metadata = {
  title: "About DesignNetrix | Architects of Digital Reality",
  description:
    "DesignNetrix is a global team of visionaries redefining the digital landscape. We combine AI intelligence with premium aesthetics to build the future of business.",
  keywords: [
    "About DesignNetrix",
    "Digital Agency Culture",
    "AI Development Team",
    "Global Web Agency",
    "DesignNetrix Story",
    "Sri Lanka Tech Agency",
    "Australian Digital Partner",
    "UK Web Consultants",
  ],
  openGraph: {
    title: "About DesignNetrix | The Future of Digital",
    description:
      "Meet the team behind the pixel-perfect revolutions. We are architects of digital reality, serving clients globally.",
    url: "https://designnetrix.com/about",
    siteName: "DesignNetrix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "DesignNetrix Team Collaboration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DesignNetrix - Innovation & Culture",
    description:
      "Discover the DNA of DesignNetrix. Where innovation meets impeccable design.",
  },
  alternates: {
    canonical: "https://designnetrix.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://designnetrix.com/about/#webpage",
        url: "https://designnetrix.com/about",
        name: "About DesignNetrix",
        description:
          "The story, mission, and culture of the DesignNetrix global team.",
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
              name: "About",
              item: "https://designnetrix.com/about",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://designnetrix.com/#organization",
        name: "DesignNetrix",
        legalName: "DesignNetrix Private Limited",
        url: "https://designnetrix.com",
        logo: {
          "@type": "ImageObject",
          url: "https://designnetrix.com/logo_white.png",
          width: 250,
          height: 40,
        },
        slogan: "Architects of Digital Reality",
        description:
          "DesignNetrix is a next-generation digital agency fusing Artificial Intelligence with premium web engineering.",
        knowsAbout: [
          "Artificial Intelligence",
          "Web Development",
          "User Experience Design",
          "Brand Strategy",
          "Digital Transformation",
        ],
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "Sri Lanka" },
          { "@type": "Place", name: "Global" },
        ],
      },
    ],
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section - "Architects of Digital Reality" */}
      <AboutHero />

      {/* 2. Trust Stats - Immediate credibility */}

      {/* 3. Our Story - The "Why" and "DNA" */}
      <OurStory />

      {/* 4. Culture/Team Gallery - "Life at DesignNetrix" */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center relative z-10">
          <SectionTitle subtitle="Fueled by Passion" align="center" />

          <p className="text-gray-400 max-w-2xl mx-auto">
            Behind every pixel is a team of dreamers, thinkers, and creators
            obsessed with perfection.
          </p>
        </div>

        {/* Reusing the 3D Gallery for a cool team showcase */}
        <div className="h-[500px] flex items-center justify-center">
          <ThreeDHoverGallery
            images={CULTURE_IMAGES}
            itemWidth={18}
            itemHeight={28}
            activeWidth={45}
            autoPlay={true}
            autoPlayDelay={2500}
          />
        </div>
      </section>

      {/* 5. Global Operations - "Always On" */}
      <GlobalPulse />

      {/* 6. Final CTA - Partnership */}
      <div className="relative z-10">
        <CTAService />
      </div>
    </div>
  );
}

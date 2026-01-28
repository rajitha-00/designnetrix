import { AboutHero } from "@/components/aboutSection/AboutHero";
import { OurStory } from "@/components/aboutSection/OurStory";
import { GlobalPulse } from "@/components/aboutSection/GlobalPulse";
import { TrustStats } from "@/components/aboutSection/TrustStats";
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

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* 1. Hero Section - "Architects of Digital Reality" */}
      <AboutHero />

      {/* 2. Trust Stats - Immediate credibility */}
      <TrustStats />

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

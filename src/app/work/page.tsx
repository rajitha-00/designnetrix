import { WorkHero } from "@/components/workSection/WorkHero";
import { WebShowcase } from "@/components/workSection/WebShowcase";
import { SocialGrid } from "@/components/workSection/SocialGrid";
import { VideoVault } from "@/components/workSection/VideoVault";
import { CTAService } from "@/components/servicesSection/CTAService";

export default function WorkPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      
      {/* 1. Hero: "Our Masterpieces" */}
      <WorkHero />

      {/* 2. Web & POS Carousel: "Digital Ecosystems" */}
      <WebShowcase />

      {/* 3. Video Showcase: "Cinema Vault" */}
      <VideoVault />

      {/* 4. Social Media Grid: "Social Pulse" */}
      <SocialGrid />

      {/* 5. Final CTA */}
      <CTAService />
      
    </div>
  );
}

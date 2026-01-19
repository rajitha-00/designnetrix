import LightRays from "@/components/Rays";
import { Approch, HeroServies } from "@/components/servicesSection";
import { ProvenWorks } from "@/components/servicesSection/ProvenWorks";
import { Services } from "@/components/servicesSection/Services";
import { CTAService } from "@/components/servicesSection/CTAService";

// 3. Grid Data (Detailed List)

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen ">
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
      <ProvenWorks />
      <Approch />
      <Services />
      <CTAService />
    </div>
  );
}

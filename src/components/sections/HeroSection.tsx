"use client";

import { Button } from "@/components/Button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
      <p
        style={{ fontFamily: "var(--font-sansbld)" }}
        className="mb-4 text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase"
      >
        Think. Create. Launch.
      </p>
      {/* Main Headline - Enhanced for mobile */}
      <h1
        style={{ fontFamily: "var(--font-optft)" }}
        className="max-w-4xl mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight"
      >
        Drive Growth with{" "}
        <span
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-[#1E96C9]"
        >
          Performance
        </span>{" "}
        & Precision
      </h1>

      {/* Sub-headline - Enhanced for mobile */}
      <p
        style={{ fontFamily: "var(--font-sansbld)" }}
        className="max-w-4xl mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-gray-200 font-medium px-2 sm:px-0 leading-relaxed"
      >
        Your website is your{" "}
        <span className="text-white">digital headquarters</span>. We build it
        with the same excellence you expect in your physical properties:{" "}
        <span className="text-white">
          secure, scalable Next.js architecture
        </span>{" "}
        and{" "}
        <span className="text-white">award-winning visual storytelling</span>{" "}
        that commands authority and attracts ideal clients.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto w-full max-w-sm sm:max-w-none">
        <Button
          onClick={onOpenModal}
          variant="primary"
          loading={false}
          className="mx-auto"
        >
          Request a Strategic Consultation
        </Button>
      </div>
    </div>
  );
}

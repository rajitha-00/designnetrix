"use client";

import { useState, useEffect } from "react";
import LiquidEther from "@/components/LiquidEther";
import LightRays from "@/components/Rays";
import ContactModal from "@/components/ContactModal";
import HeroSection from "@/components/sections/HeroSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RecentWorksSection from "@/components/sections/RecentWorksSection";
import { AboutDNX } from "@/components/sections/AboutDNX";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full min-h-screen ">
      {/* Continuous Background Layer - Fixed */}
      <div className="fixed inset-0 -z-30">
        {!isMobile ? (
          <LiquidEther
            colors={["#1D4486", "#1E96C9", "#ffffff"]}
            mouseForce={10}
            cursorSize={50}
            isViscous={false}
            viscous={20}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.3}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.5}
            takeoverDuration={0.25}
            autoResumeDelay={4000}
            autoRampDuration={0.8}
          />
        ) : (
          <div className="liquid-ether-fallback w-full h-full" />
        )}
      </div>
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
      {/* Global Background Ambiance - Scrolling Highlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Highlight for Results Section */}
        <div className="absolute top-[800px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1E96C9]/15 rounded-full blur-[100px] mix-blend-screen" />

        {/* Highlight for Recent Works */}
        <div className="absolute top-[1600px] right-0 translate-x-1/3 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />

        {/* Highlight for Capabilities/Advantages */}
        <div className="absolute top-[2800px] left-0 -translate-x-1/3 w-[1000px] h-[1000px] bg-[#1E96C9]/10 rounded-full blur-[120px] mix-blend-screen" />

        {/* Highlight for Footer Area */}
        <div className="absolute bottom-0 w-full h-[600px] bg-indigo-900/20 blur-[100px]" />
      </div>
      {/* Hero Content */}
      <HeroSection onOpenModal={openModal} />
      <ResultsSection />
      <AboutDNX />
      <CapabilitiesSection />
      <AdvantagesSection />
      <RecentWorksSection />
      <TestimonialsSection />
      <FinalCta />
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

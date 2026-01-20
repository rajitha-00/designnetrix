"use client";

import { Button } from "@/components/Button";
import ChainCarousel, { ChainItem } from "@/components/lightswind/chain-carosoule";
import {
  Palette,
  Rocket,
  Brain,
  Cpu,
  Smartphone,
  Video,
  BarChart3,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilitiesData: ChainItem[] = [
  {
    id: "ai-agent-engineering",
    name: "AI AGENT ENGINEERING",
    details:
      "Automate operations and enhance customer engagement with custom-built AI agents and expert consultation.",
    icon: Brain,
  },
  {
    id: "bespoke-web-ecosystems",
    name: "BESPOKE WEB ECOSYSTEMS",
    details:
      "High-performance web platforms built with Next.js and React, optimized for ultimate scalability and SEO.",
    icon: Cpu,
  },
  {
    id: "modern-app-suites",
    name: "MODERN APPLICATION SUITES",
    details:
      "Seamless mobile and web applications designed with a focus on intuitive user experiences and reliability.",
    icon: Smartphone,
  },
  {
    id: "strategic-branding",
    name: "STRATEGIC BRANDING",
    details:
      "Establish a powerful visual identity and emotional connection that builds trust and defines your authority.",
    icon: Palette,
  },
  {
    id: "cinematic-media",
    name: "CINEMATIC MEDIA PRODUCTION",
    details:
      "Professional property photography and videography that captures your assets with cinematic impact.",
    icon: Video,
  },
  {
    id: "performance-marketing",
    name: "PERFORMANCE MARKETING",
    details:
      "Data-driven digital marketing strategies focused on ROI and scaling your presence across global markets.",
    icon: BarChart3,
  },
  {
    id: "digital-strategy",
    name: "DIGITAL STRATEGY",
    details:
      "Expert consultation to navigate digital transformation and scale your business from local to global.",
    icon: Rocket,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase mb-4"
          >
            CAPABILITIES
          </p>
          <h2
            style={{ fontFamily: "var(--font-optft)" }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
          >
            EVERYTHING YOU NEED{" "}
            <span className="block">
              TO <span className="text-[#1E96C9] text-glow-blue">COMPETE</span>
            </span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-8"
          >
            We don&apos;t just build websites; we engineer digital ecosystems.
            From AI-driven automation to cinematic storytelling, our
            capabilities are designed to give you a definitive edge in the
            global market.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="group glass hover:bg-white/10 transition-colors duration-300"
              icon={
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
              iconPosition="right"
            >
              View solutions
            </Button>
          </div>
        </motion.div>

        {/* ChainCarousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12"
        >
          <ChainCarousel
            items={capabilitiesData}
            scrollSpeedMs={2000}
            visibleItemCount={7}
          />
        </motion.div>
      </div>
    </section>
  );
}

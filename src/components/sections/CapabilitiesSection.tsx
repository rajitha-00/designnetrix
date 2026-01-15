"use client";

import { Button } from "@/components/Button";
import ChainCarousel, { ChainItem } from "@/components/lightswind/chain-carosoule";
import { Palette, Rocket, Award, Gauge, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const capabilitiesData: ChainItem[] = [
  {
    id: "white-label-solutions",
    name: "WHITE-LABEL SOLUTIONS",
    details: "Launch branded web and app experiences without the overhead of an internal development team.",
    icon: Award,
  },
  {
    id: "ux-driven-design",
    name: "UX-DRIVEN DESIGN",
    details: "Every interface is built by experts who understand how people interact with technology.",
    icon: Palette,
  },
  {
    id: "fast-deployment",
    name: "FAST DEPLOYMENT",
    details: "Get to market quickly with streamlined processes and proven methodologies.",
    icon: Rocket,
  },
  {
    id: "branded-solutions",
    name: "BRANDED SOLUTIONS",
    details: "Deploy web and app experiences that carry your name without maintaining a development department.",
    icon: Award,
  },
  {
    id: "performance-optimization",
    name: "PERFORMANCE OPTIMIZATION",
    details: "Lightning-fast load times and seamless user experiences built on cutting-edge technology stacks.",
    icon: Gauge,
  },
  {
    id: "scalable-architecture",
    name: "SCALABLE ARCHITECTURE",
    details: "Future-proof solutions that grow with your business, handling increased traffic and complexity.",
    icon: TrendingUp,
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
            We build digital products that work. From concept to deployment,
            every detail is crafted for performance and results.
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

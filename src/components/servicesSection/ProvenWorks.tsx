"use client";
import { motion } from "framer-motion";
import ThreeDCarousel from "../lightswind/3d-carousel";
import { PROJECTS_SHOWCASE } from "@/constanats/clients";
import { SectionTitle } from "../SectionTitle";
export const ProvenWorks = () => {
  return (
    <section className="relative z-10 mb-32 w-full overflow-visible">
      <div className="text-center mb-16 relative">
        {/* Ambient glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1E96C9]/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1E96C9] text-xs font-bold tracking-[0.3em] uppercase mb-4 relative z-10"
        >
          Portfolio Showcase
        </motion.p>
        <SectionTitle subtitle="PROVEN WORKS" align="center" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-[#1E96C9] via-[#5227FF] to-[#1E96C9] mx-auto rounded-full relative z-10"
        />
      </div>

      <ThreeDCarousel
        items={PROJECTS_SHOWCASE}
        autoRotate={true}
        rotateInterval={4000}
        cardHeight={500}
      />
    </section>
  );
};

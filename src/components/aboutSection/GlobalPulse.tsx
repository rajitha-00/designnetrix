"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const LOCATIONS = [
  { city: "New York", time: "EST (UTC-5)", active: true },
  { city: "London", time: "GMT (UTC+0)", active: true },
  { city: "Dubai", time: "GST (UTC+4)", active: true },
  { city: "Singapore", time: "SGT (UTC+8)", active: true },
];

export const GlobalPulse = () => {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      {/* Moving Background Grid (Optional subtle mesh) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <SectionTitle subtitle="Global Pulse" align="center" />
          <p className="text-gray-400">
            Always On. Creating across time zones.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1E96C9]/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-[#1E96C9] shadow-[0_0_10px_#1E96C9]" />
              </div>

              <div className="mb-4 text-white/30 group-hover:text-white transition-colors duration-300">
                <Globe className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#1E96C9] transition-colors">
                {loc.city}
              </h3>
              <p className="text-sm text-gray-400 font-mono tracking-wide">
                {loc.time}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#1E96C9]/10 to-purple-500/10 border border-white/10 overflow-hidden text-center">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Remote First, Quality Obsessed.
            </h3>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              We hire the top 1% of talent from around the globe, ensuring your
              project gets the best minds, regardless of geography.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E96C9]/20 text-[#1E96C9] text-sm font-bold border border-[#1E96C9]/30">
              <div className="w-2 h-2 bg-[#1E96C9] rounded-full animate-ping" />
              Available for New Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

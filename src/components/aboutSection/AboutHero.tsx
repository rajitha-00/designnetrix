"use client";
import React from "react";
import { motion } from "framer-motion";
import LightRays from "../Rays"; // Adjust path if needed
import { HeroTitel } from "../HeroTitel";

export const AboutHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#02040a]">
      {/* Background Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1E96C9"
          raysSpeed={2}
          lightSpread={1}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-[#1E96C9] text-sm font-medium tracking-[0.2em] uppercase">
              Est. 2025 • Global Digital Agency
            </span>
          </div>
        </motion.div>
        <HeroTitel title="Architects of" subtitle="Digital Reality" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We are the bridge between imagination and execution. Designing the
          future, one pixel at a time.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
};

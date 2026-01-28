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
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-[#1E96C9] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

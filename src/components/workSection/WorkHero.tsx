"use client";
import React from "react";
import { motion } from "framer-motion";

export const WorkHero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-20">
      
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-[#1E96C9] blur-[100px] opacity-20" />
          <h1 
            className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tighter"
            style={{ fontFamily: 'var(--font-optft)' }}
          >
            OUR WORK
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto items-center flex flex-col gap-4"
        >
          <span className="w-12 h-1 bg-[#1E96C9] rounded-full" />
          Crafted for Impact. Designed for Growth. <br/>
          <span className="text-base text-gray-500 font-normal">
             From immersive web experiences to complex POS systems, we build digital ecosystems that perform.
          </span>
        </motion.p>
      </div>
      
      {/* Scroll Hint */}
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

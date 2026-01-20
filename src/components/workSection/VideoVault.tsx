"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export const VideoVault = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-[#020202] overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-optft)" }}
        >
          Cinema Vault
        </h2>
        <p className="text-gray-400">Motion that moves people.</p>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative w-full aspect-video max-h-[80vh] bg-black group cursor-pointer"
      >
        {/* 
                   Ideally this would be a real video element or iframe. 
                   Using a placeholder image with a play overlay for now.
                */}
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop"
          alt="Video Thumbnail"
          fill
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-[#1E96C9] flex items-center justify-center shadow-[0_0_30px_#1E96C9]">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12">
          <h3 className="text-4xl font-bold text-white mb-2">Neon City</h3>
          <p className="text-xl text-gray-300">Brand Campaign 2024</p>
        </div>
      </motion.div>
    </section>
  );
};

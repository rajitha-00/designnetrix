"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="mb-4 text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase tracking-widest"
        >
          Beyond Conventional Design.
        </p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter"
        style={{ fontFamily: "var(--font-optft)" }}
      >
        Human Creativity Meets
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E96C9] via-white to-[#1E96C9]/20 relative z-20">
          Artificial Intelligence
        </span>
      </motion.h1>
      {/* Sub-headline - Enhanced for mobile */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-sansbld)" }}
        className="max-w-4xl mb-10 sm:mb-12 text-sm sm:text-base lg:text-xl text-gray-300 font-medium px-2 sm:px-0 leading-relaxed mt-10"
      >
        DesignNetrix transforms businesses with cutting-edge web development,
        custom AI consultation, and cinematic digital marketing. We build the
        systems that define tomorrow.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto w-full max-w-sm sm:max-w-none justify-center"
      >
        <Button
          size={"xl"}
          onClick={onOpenModal}
          variant="primary"
          loading={false}
        >
          Let&apos;s Build Your Future
        </Button>
      </motion.div>
    </div>
  );
}

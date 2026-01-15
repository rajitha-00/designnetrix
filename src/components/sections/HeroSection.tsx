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
          Think. Create. Launch.
        </p>
      </motion.div>

      {/* Main Headline - Enhanced for mobile */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-optft)" }}
        className="max-w-5xl mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight "
      >
        Drive Growth with{" "}
        <span
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-transparent bg-clip-text bg-linear-to-r from-[#1E96C9] to-[#5227FF] text-glow-blue"
        >
          Performance
        </span>{" "}
        & Precision
      </motion.h1>

      {/* Sub-headline - Enhanced for mobile */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-sansbld)" }}
        className="max-w-4xl mb-10 sm:mb-12 text-sm sm:text-base lg:text-xl text-gray-300 font-medium px-2 sm:px-0 leading-relaxed"
      >
        Your website is your{" "}
        <span className="text-white font-bold">digital headquarters</span>. We build it
        with the same excellence you expect in your physical properties:{" "}
        <span className="text-white font-bold">
          secure, scalable Next.js architecture
        </span>{" "}
        and{" "}
        <span className="text-white font-bold">award-winning visual storytelling</span>{" "}
        that commands authority and attracts ideal clients.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto w-full max-w-sm sm:max-w-none justify-center"
      >
        <Button
          onClick={onOpenModal}
          variant="primary"
          loading={false}
          className="mx-auto shadow-[0_0_20px_rgba(30,150,201,0.5)] hover:shadow-[0_0_30px_rgba(30,150,201,0.8)] transition-shadow duration-300"
        >
          Request a Strategic Consultation
        </Button>
      </motion.div>
    </div>
  );
}

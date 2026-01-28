"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { HeroTitel } from "../HeroTitel";

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

      <HeroTitel title="Built for What Comes" subtitle="After Digital" />
      {/* Sub-headline - Enhanced for mobile */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ fontFamily: "var(--font-sansbld)" }}
        className="max-w-4xl mb-10 sm:mb-12 text-sm sm:text-base lg:text-xl text-gray-300 font-medium px-2 sm:px-0 leading-relaxed mt-10"
      >
        Websites and campaigns are only the surface. Real value comes from
        systems that think, adapt, and support how a business actually runs.
        DesignNetrix builds intelligent platforms, custom software, and creative
        systems that move businesses forward.
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

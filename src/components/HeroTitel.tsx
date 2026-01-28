"use client";
import { motion } from "framer-motion";

interface IHeroTitle {
  title: string;
  subtitle: string;
}

export const HeroTitel = (props: IHeroTitle) => {
  const { title, subtitle} = props;
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, type: "spring" }}
      className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter"
      style={{ fontFamily: "var(--font-optft)" }}
    >
      {title}
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1E96C9] via-white to-[#1E96C9]/20 relative z-20">
        {subtitle}
      </span>
    </motion.h1>
  );
};

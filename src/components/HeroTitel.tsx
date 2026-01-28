"use client";
import { motion } from "framer-motion";

interface IHeroTitle {
  title: string;
  subtitle: string;
}

export const HeroTitel = (props: IHeroTitle) => {
  const { title, subtitle} = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="relative inline-block"
    >
      {" "}
      <div className="absolute inset-0 bg-[#1E96C9] blur-[100px] opacity-20" />
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
        className="text-5xl  md:text-8xl leading-[1.3] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-normal"
        style={{ fontFamily: "var(--font-optft)" }}
      >
        {title}
        <br />
        {subtitle}
      </motion.h1>
    </motion.div>
  );
};

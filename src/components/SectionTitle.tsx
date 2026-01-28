"use client"
import { motion } from "framer-motion"

interface ISectionTitle {
    title?: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export const SectionTitle = (props: ISectionTitle) => {
    const { title, subtitle, align = "left" } = props;
    return (
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-${align}`}
        style={{ fontFamily: "var(--font-optft)" }}
      >
        {title && <>
          {title}
          <br />
        </>}
        <span className="block text-glow-blue">
          {subtitle}
        </span>
      </motion.h2>
    );
}
"use client";
import { motion } from "framer-motion";
interface ISectionBadge {
  title: string;
}
export const SectionBadge = (props: ISectionBadge) => {
  const { title } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
    >
      <span className="w-2 h-2 rounded-full bg-[#1E96C9] animate-pulse" />
      <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
        {title}
      </span>
    </motion.div>
  );
};

"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Target,
  Palette,
  Layout,
  Code,
  Monitor,
  TrendingUp,
} from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Strategy",
    subtitle: "Foundation & Blueprint",
    description:
      "We analyze your market, deep-dive into your goals, and map out a comprehensive strategic path that aligns with your business vision.",
    icon: Target,
  },
  {
    id: "02",
    title: "Brand",
    subtitle: "Identity & Storytelling",
    description:
      "Crafting a unique visual identity and voice. We build brands that resonate emotionally and stand out in a crowded marketplace.",
    icon: Palette,
  },
  {
    id: "03",
    title: "Design",
    subtitle: "UI/UX & Aesthetics",
    description:
      "Creating immersive, intuitive, and visually stunning interfaces. We blend aesthetics with usability to keep your users engaged.",
    icon: Layout,
  },
  {
    id: "04",
    title: "Website",
    subtitle: "Engineering & Performance",
    description:
      "Building robust, high-performance websites. pixel-perfect implementation with modern technologies for speed and reliability.",
    icon: Monitor,
  },
  {
    id: "05",
    title: "Product",
    subtitle: "Scalable Solutions",
    description:
      "Developing scalable digital products that solve real problems. We focus on long-term value and adaptable architecture.",
    icon: Code,
  },
  {
    id: "06",
    title: "Growth",
    subtitle: "Launch & Success",
    description:
      "Data-driven strategies to launch your product effectively and achieve sustainable business growth and market domination.",
    icon: TrendingUp,
  },
];

export const Approch = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  // Smooth out the progress bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-[#1E96C9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#1E96C9] animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
              Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-optft, sans-serif)" }}
          >
            From Concept to <span className="text-[#1E96C9]">Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed"
          >
            A systematic approach designed for growth. We combine creativity
            with technical excellence to build products that scale.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line - Desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block -translate-x-1/2" />

          {/* Active Progress Line - Desktop */}
          <motion.div
            className="absolute left-[50%] top-0 w-[2px] bg-gradient-to-b from-[#1E96C9] via-[#60A5FA] to-[#1E96C9] hidden md:block -translate-x-1/2 origin-top shadow-[0_0_20px_2px_rgba(30,150,201,0.5)]"
            style={{ scaleY, height: "100%" }}
          />

          {/* Central Line - Mobile (Left aligned) */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 md:hidden" />
          <motion.div
            className="absolute left-6 top-0 w-[2px] bg-[#1E96C9] md:hidden origin-top"
            style={{ scaleY, height: "100%" }}
          />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineItem
                  key={step.id}
                  step={step}
                  index={index}
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  step,
  index,
  isEven,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isEven: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center md:justify-between px-6 md:px-0",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Content Side */}
      <div
        className={cn(
          "w-full md:w-[45%]",
          isEven ? "md:text-right" : "md:text-left",
          "pl-12 md:pl-0",
        )}
      >
        <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-[#1E96C9]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

          {/* Number Watermark */}
          <div
            className={cn(
              "absolute -top-6 text-6xl font-bold bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent select-none font-sans",
              isEven ? "right-8" : "left-8",
            )}
          >
            {step.id}
          </div>

          <div className="relative z-10">
            <div
              className={cn(
                "flex items-center gap-4 mb-4",
                isEven ? "md:justify-end" : "md:justify-start",
              )}
            >
              <div className="p-3 rounded-xl bg-[#1E96C9]/10 border border-[#1E96C9]/20 text-[#1E96C9]">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            </div>

            <h4 className="text-[#1E96C9] font-medium mb-3 tracking-wide">
              {step.subtitle}
            </h4>
            <p className="text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B1221] border-2 border-[#1E96C9] shadow-[0_0_10px_rgba(30,150,201,0.5)] z-20">
        <div className="absolute inset-0 rounded-full bg-[#1E96C9] animate-ping opacity-20" />
      </div>

      {/* Empty Side for Layout Balance */}
      <div className="hidden md:block w-full md:w-[45%]" />
    </motion.div>
  );
};

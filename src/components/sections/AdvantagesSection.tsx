"use client";

import { Button } from "@/components/Button";
import { motion, Variants } from "framer-motion";

export default function AdvantagesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" as const }}
           className="mb-12 lg:mb-16"
        >
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase mb-4"
          >
            ADVANTAGES
          </p>
          <h2
            style={{ fontFamily: "var(--font-optft)" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            WHAT YOU GAIN WHEN YOU{" "}
            <span className="block text-glow-blue">PARTNER WITH US</span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl"
          >
            Building digital products in-house demands resources, expertise, and
            time you may not have. Designetrix removes that friction, letting you
            compete at full strength while we handle the engineering.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Advantage 1 - Save Time */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E96C9]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-[#1E96C9]/50 transition-all duration-300 h-full">
              <div className="flex flex-col space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1E96C9]/10 border border-[#1E96C9]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(30,150,201,0.3)]">
                  <svg
                    className="w-6 h-6 text-[#1E96C9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-2xl lg:text-3xl font-bold text-white group-hover:text-glow-blue transition-all duration-300"
                  >
                    SAVE TIME
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-sansbld)" }}
                    className="text-gray-300 text-sm lg:text-base leading-relaxed"
                  >
                    Eliminate months of hiring and training. We deliver
                    ready-to-launch digital products on your timeline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 2 - Modernize Fast */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-purple-500/50 transition-all duration-300 h-full">
              <div className="flex flex-col space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-2xl lg:text-3xl font-bold text-white group-hover:text-glow transition-all duration-300"
                  >
                    MODERNIZE FAST
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-sansbld)" }}
                    className="text-gray-300 text-sm lg:text-base leading-relaxed"
                  >
                    Transform your digital presence with contemporary design and
                    technology that positions you as an industry leader.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 3 - Drive Growth */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-emerald-500/50 transition-all duration-300 h-full">
              <div className="flex flex-col space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-2xl lg:text-3xl font-bold text-white group-hover:text-glow transition-all duration-300"
                  >
                    DRIVE GROWTH
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-sansbld)" }}
                    className="text-gray-300 text-sm lg:text-base leading-relaxed"
                  >
                    Increase revenue and engagement with digital products
                    engineered for conversion and user retention.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            className="group glass hover:bg-white/10"
            icon={
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
            iconPosition="right"
          >
            Arrow
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/Button";
import { CountUp } from "@/components/lightswind/count-up";
import { Separator } from "@/components/lightswind/separator";
import { motion } from "framer-motion";

export default function ResultsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
            RESULTS
          </p>
          <h2
            style={{ fontFamily: "var(--font-optft)" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            THE NUMBERS SPEAK FOR <span className="block text-glow">THEMSELVES</span>
          </h2>
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl"
          >
            We&apos;ve shipped over 200 digital products for clients across
            industries. Our work drives measurable results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Stat 1 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E96C9]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-[#1E96C9]/50 transition-all duration-300 h-full flex flex-col justify-center">
              <div className="flex flex-col space-y-4">
                <CountUp
                  value={200}
                  duration={2.5}
                  suffix="+"
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold"
                  numberClassName="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#1E96C9] text-glow-blue"
                  colorScheme="gradient"
                  animationStyle="spring"
                  triggerOnView={true}
                />
                <Separator className="bg-[#1E96C9]/20" thickness="thin" />
                <p
                  style={{ fontFamily: "var(--font-sansbld)" }}
                  className="text-sm lg:text-base font-semibold tracking-wider text-white/90 uppercase"
                >
                  Projects Launched
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-center">
              <div className="flex flex-col space-y-4">
                <CountUp
                  value={98}
                  duration={2.5}
                  suffix="%"
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold"
                  numberClassName="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500 text-glow"
                  colorScheme="gradient"
                  animationStyle="spring"
                  triggerOnView={true}
                />
                <Separator className="bg-purple-500/20" thickness="thin" />
                <p
                  style={{ fontFamily: "var(--font-sansbld)" }}
                  className="text-sm lg:text-base font-semibold tracking-wider text-white/90 uppercase"
                >
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
            <div className="relative glass rounded-2xl p-8 lg:p-10 hover:border-emerald-500/50 transition-all duration-300 h-full flex flex-col justify-center">
              <div className="flex flex-col space-y-4">
                <div className="flex items-baseline">
                  <CountUp
                    value={6}
                    duration={2.5}
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold"
                    numberClassName="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-500 text-glow"
                    colorScheme="gradient"
                    animationStyle="spring"
                    triggerOnView={true}
                  />
                  <span
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-3xl lg:text-4xl font-bold text-white/80 ml-3"
                  >
                    weeks
                  </span>
                </div>
                <Separator className="bg-emerald-500/20" thickness="thin" />
                <p
                  style={{ fontFamily: "var(--font-sansbld)" }}
                  className="text-sm lg:text-base font-semibold tracking-wider text-white/90 uppercase"
                >
                  Average Time-to-Launch
                </p>
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
            View portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

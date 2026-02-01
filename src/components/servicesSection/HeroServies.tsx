"use client";
import { motion } from "framer-motion";
import Globe from "../lightswind/globe";
import { Eye, Zap } from "lucide-react";
import { Button } from "../Button";
import { HeroTitel } from "../HeroTitel";

export const HeroServies = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-visible py-20 px-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E96C9]/10 rounded-full blur-[150px]" />
      </div>

      {/* Globe Background - Behind everything */}
      <div className="absolute inset-0 flex w-full items-center left-20 justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative"
        >
          {/* Globe component */}
          <Globe
            className="opacity-40"
            baseColor="#1E96C9"
            glowColor="#0c76daff"
            markerColor="#857b7bff"
            dark={0.6}
            scale={1.1}
            diffuse={0.4}
            mapBrightness={4}
          />
        </motion.div>
      </div>

      {/* Centered Text Content - On top of globe */}
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "var(--font-sansbld)" }}
              className="text-[#1E96C9] font-medium tracking-[0.3em] text-xs sm:text-sm uppercase"
            >
              Our Capabilities
            </motion.p>
            <HeroTitel title="Future" subtitle="Engineering" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Delivering cutting-edge digital solutions to clients{" "}
              <span className="text-[#1E96C9] font-semibold">
                around the world
              </span>
              . From concept to deployment, we build the future.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            {[
              { label: "Countries", value: "3+" },
              { label: "Clients", value: "7+" },
              { label: "Projects", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1E96C9]/20 to-[#5227FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div
                      className="text-3xl sm:text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-optft)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant={"primary"} size={"xl"}>
              <span className="relative z-10 font-semibold text-white flex items-center gap-2">
                Start a Project
                <Zap className="w-4 h-4" />
              </span>
            </Button>

            {/* Secondary Button */}
            <Button variant={"secondary"} size={"xl"}>
              <span className="relative z-10 font-semibold text-white flex items-center gap-2">
                View Our Work
                <Eye className="w-4 h-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

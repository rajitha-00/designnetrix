"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

export const OurStory = () => {
  return (
    <section className="relative py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Narrative */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="The DNA of"
                subtitle="DesignNetrix"
                align="left"
              />
              <div className="w-20 h-1 bg-[#1E96C9] rounded-full mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                It started with a simple observation: most digital agencies were
                building typical websites, but forgetting the *soul* of the
                brand. We saw a gap between &ldquo;functional&rdquo; and
                &ldquo;phenomenal.&rdquo;
              </p>
              <p>
                DesignNetrix was born to close that gap. We aren&apos;t just
                developers; we are digital architects. We believe that a website
                isn&apos;t just code&mdash;it&apos;s your global headquarters,
                your 24/7 salesperson, and your brand&apos;s most powerful
                asset.
              </p>
              <p>
                Our philosophy is simple: **Strategy First, Pixel Perfect
                Second.** We dig deep into your business goals before we write a
                single line of code.
              </p>
            </motion.div>
          </div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glass Card */}
            <div className="relative z-10 p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] transition-colors duration-500">
              <Quote className="w-12 h-12 text-[#1E96C9] mb-6 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-normal italic">
                &ldquo;We don&apos;t build for the moment. We build for the
                momentum. Every pixel serves a purpose: Growth.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E96C9] to-purple-600" />
                <div>
                  <div className="text-[#1E96C9] text-sm tracking-widest uppercase">
                    Founder
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1E96C9]/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

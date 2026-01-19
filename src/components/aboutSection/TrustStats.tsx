"use client";
import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Years of Experience", value: "7+" },
  { label: "Projects Delivered", value: "150+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Awards Won", value: "12" },
];

export const TrustStats = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 
                className="text-5xl md:text-7xl font-bold text-white mb-2 group-hover:text-[#1E96C9] transition-colors duration-300"
                style={{ fontFamily: "var(--font-optft)" }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

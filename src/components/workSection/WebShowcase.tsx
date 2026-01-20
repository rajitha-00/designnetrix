"use client";
import React from "react";
import Carousel from "../lightswind/3d-carousel";
import { PROJECTS_SHOWCASE } from "@/constanats/clients";

export const WebShowcase = () => {
  return (
    <section className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-optft)" }}
            >
              Digital Ecosystems
            </h2>
            <p className="text-[#1E96C9] tracking-widest uppercase text-sm font-medium">
              Websites • Dashboards • SaaS • POS
            </p>
          </div>
          <div className="hidden md:block text-right text-gray-500 text-sm">
            Drag to explore <br /> Click to view details
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
        <Carousel items={PROJECTS_SHOWCASE} />
      </div>
    </section>
  );
};

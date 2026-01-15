"use client";

import { BentoGrid } from "@/components/lightswind/bento-grid";
import { Globe, Smartphone, ShoppingCart, Briefcase, Laptop, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const recentWorks = [
  {
    icon: Globe,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    background: (
      <img
        src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
        alt="E-Commerce Platform"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    description: "Secure financial transactions with intuitive user interface",
    background: (
      <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
        alt="Mobile Banking App"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-1",
  },
  {
    icon: ShoppingCart,
    title: "Retail Dashboard",
    description: "Real-time analytics and inventory tracking for retail businesses",
    background: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        alt="Retail Dashboard"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-1",
  },
  {
    icon: Briefcase,
    title: "Corporate Website",
    description: "Professional business presence with modern design and SEO optimization",
    background: (
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        alt="Corporate Website"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Laptop,
    title: "SaaS Platform",
    description: "Cloud-based solution with subscription management and team collaboration",
    background: (
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        alt="SaaS Platform"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Trophy,
    title: "Booking System",
    description: "Complete reservation management with calendar integration and payments",
    background: (
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
        alt="Booking System"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-1",
  },
];

export default function RecentWorksSection() {
  return (
    <section className="relative max-w-7xl mx-auto z-10 py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className=" text-center mb-16 "
      >
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase mb-4"
        >
          PORTFOLIO
        </p>
        <h2
          style={{ fontFamily: "var(--font-optft)" }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
        >
          RECENT <span className="text-[#1E96C9] text-glow-blue">WORKS</span>
        </h2>
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Explore our latest projects that showcase innovation, design
          excellence, and measurable results.
        </p>
      </motion.div>

      <BentoGrid cards={recentWorks} className="lg:grid-cols-3" />
    </section>
  );
}

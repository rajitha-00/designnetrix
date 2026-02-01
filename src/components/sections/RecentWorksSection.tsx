"use client";

import { BentoGrid } from "@/components/lightswind/bento-grid";
import { Globe, Smartphone, ShoppingCart, Briefcase, Laptop, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

const recentWorks = [
  {
    icon: Globe,
    title: "E-Commerce Platform",
    description:
      "Modern shopping experience with seamless checkout and inventory management",
    background: (
      <Image
        src="/projects/EatFit.png"
        alt="E-Commerce Platform"
        fill
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    description: "Secure financial transactions with intuitive user interface",
    background: (
      <Image
        src="/projects/SkyGardenPos.png"
        alt="Mobile Banking App"
        fill
        className="absolute inset-0 h-full w-full object-cover  transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-1",
  },
  {
    icon: ShoppingCart,
    title: "Retail Dashboard",
    description:
      "Real-time analytics and inventory tracking for retail businesses",
    background: (
      <Image
        src="/projects/EatFitPos.png"
        alt="Retail Dashboard"
        fill
        className="absolute inset-0 h-full w-full object-cover  transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-1",
  },
  {
    icon: Briefcase,
    title: "Corporate Website",
    description:
      "Professional business presence with modern design and SEO optimization",
    background: (
      <Image
        src="/projects/XiangYun.png"
        alt="Corporate Website"
        fill
        className="absolute inset-0 h-full w-full object-cover  transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Laptop,
    title: "SaaS Platform",
    description:
      "Cloud-based solution with subscription management and team collaboration",
    background: (
      <Image
        src="/projects/RhCleaning.png"
        alt="SaaS Platform"
        fill
        className="absolute inset-0 h-full w-full object-cover  transition-opacity duration-300 group-hover:opacity-40"
      />
    ),
    className: "md:col-span-2",
  },
  {
    icon: Trophy,
    title: "Booking System",
    description:
      "Complete reservation management with calendar integration and payments",
    background: (
      <Image
        src="/projects/RealmInteriors.png"
        alt="Booking System"
        fill
        className="absolute inset-0 h-full w-full object-cover  transition-opacity duration-300 group-hover:opacity-40"
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
        <SectionTitle title="RECENT WORKS" align="center" />
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          A selection of websites, applications, and systems built for
          businesses across different industries. A selection of websites,
          applications, and systems built for businesses across different
          industries.
        </p>
      </motion.div>

      <BentoGrid cards={recentWorks} className="lg:grid-cols-3" />
    </section>
  );
}

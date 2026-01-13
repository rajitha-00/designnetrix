"use client";

import { ScrollCarousel, FeatureItem } from "@/components/lightswind/scroll-carosol";
import { Globe, Smartphone, ShoppingCart, Briefcase, Laptop, Trophy } from "lucide-react";

const recentWorks: FeatureItem[] = [
  {
    icon: Globe,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    description: "Secure financial transactions with intuitive user interface",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    icon: ShoppingCart,
    title: "Retail Dashboard",
    description: "Real-time analytics and inventory tracking for retail businesses",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Corporate Website",
    description: "Professional business presence with modern design and SEO optimization",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    icon: Laptop,
    title: "SaaS Platform",
    description: "Cloud-based solution with subscription management and team collaboration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Trophy,
    title: "Booking System",
    description: "Complete reservation management with calendar integration and payments",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
];

export default function RecentWorksSection() {
  return (
    <section className="relative max-w-7xl mx-auto z-10 py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className=" text-center mb-16 ">
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
          RECENT <span className="text-[#1E96C9]">WORKS</span>
        </h2>
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Explore our latest projects that showcase innovation, design
          excellence, and measurable results.
        </p>
      </div>

      <ScrollCarousel features={recentWorks} maxScrollHeight={2500}  />
    </section>
  );
}

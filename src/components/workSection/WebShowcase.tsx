"use client";
import React from "react";
import Carousel from "../lightswind/3d-carousel";

export const WebShowcase = () => {
  return (
    <section className="py-24 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-optft)' }}>
                    Digital Ecosystems
                </h2>
                <p className="text-[#1E96C9] tracking-widest uppercase text-sm font-medium">
                    Websites • Dashboards • SaaS • POS
                </p>
            </div>
            <div className="hidden md:block text-right text-gray-500 text-sm">
                Drag to explore <br/> Click to view details
            </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
        <Carousel 
            items={[
                { 
                    id: 1,
                    title: "E-Commerce Platform", 
                    brand: "Shopify Plus",
                    description: "A high-performance headless commerce solution built for scale and conversion optimization.", 
                    tags: ["Next.js", "Shopify", "Tailwind"],
                    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
                    link: "#"
                },
                { 
                    id: 2,
                    title: "SaaS Dashboard", 
                    brand: "Analytics Pro",
                    description: "Real-time data visualization dashboard for enterprise analytics.", 
                    tags: ["React", "D3.js", "TypeScript"],
                    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                    link: "#"
                },
                { 
                    id: 3,
                    title: "POS System", 
                    brand: "RetailOS",
                    description: "Modern point of sale system unifying in-store and online inventory.", 
                    tags: ["Electron", "Node.js", "Redis"],
                    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
                    link: "#"
                },
                { 
                    id: 4,
                    title: "Healthcare App", 
                    brand: "MediCare",
                    description: "Patient management and telemedicine platform complying with HIPAA.", 
                    tags: ["React Native", "Firebase", "WebRTC"],
                    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
                    link: "#"
                },
                { 
                    id: 5,
                    title: "Fintech Portal", 
                    brand: "SecureBank",
                    description: "Next-gen banking interface formatted for security and user experience.", 
                    tags: ["Angular", "RxJS", "Security"],
                    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
                    link: "#"
                },
            ]}
        />
      </div>
    </section>
  );
};

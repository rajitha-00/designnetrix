"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Share2, 
  Camera, 
  Layout, 
  Code, 
  Cpu, 
  X,
  ArrowRight,
  Monitor,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";
import LiquidEther from "@/components/LiquidEther";
import LightRays from "@/components/Rays";
import { Button } from "@/components/Button";
import InteractiveGradient from "@/components/lightswind/interactive-gradient-card";
import ThreeDCarousel from "@/components/lightswind/3d-carousel";
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import { cn } from "@/lib/utils";

// --- Data Configuration ---

// 1. Carousel Data (Projects)
// Using consistent placeholder images for demo purposes since we don't have project screenshots yet.
const carouselItems = [
  {
    id: 1,
    title: "EatFit.lk",
    brand: "Health & Wellness",
    description: "A comprehensive diet planning and food delivery platform.",
    tags: ["Next.js", "E-commerce", "Health"],
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    link: "https://www.eatfit.lk/"
  },
  {
    id: 2,
    title: "RH Cleaning",
    brand: "Service Industry",
    description: "Modern corporate website for a premier cleaning service in Australia.",
    tags: ["Branding", "Web Design", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1581578731117-104f8a3d3dfa?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.rhcleaning.com.au/"
  },
  {
    id: 3,
    title: "Sky Garden POS",
    brand: "Enterprise SaaS",
    description: "Robust Point of Sale system for high-volume restaurant management.",
    tags: ["SaaS", "Dashboard", "Real-time"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    link: "https://sky-garden-pos.vercel.app/"
  },
  {
    id: 4,
    title: "Realm Interiors",
    brand: "Architecture",
    description: "Minimalist portfolio for an interior design firm.",
    tags: ["Portfolio", "Animation", "Minimalism"],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    link: "https://www.realminteriors.lk/"
  },
  {
    id: 5,
    title: "Chamod Photography",
    brand: "Creative Arts",
    description: "High-performance gallery and portfolio showcase.",
    tags: ["Photography", "Gallery", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2035&auto=format&fit=crop",
    link: "https://www.chamodjayasundaraphotography.com/"
  }
];

// 2. Timeline Data (Services Journey)
const timelineEvents = [
  {
    year: "01",
    title: "Strategic Branding",
    subtitle: "The Foundation",
    description: "We start by defining your core identity. Logo, voice, and visual strategy that sets you apart.",
    icon: <Palette className="w-5 h-5" />,
    color: "purple-400"
  },
  {
    year: "02",
    title: "UI/UX Design",
    subtitle: "The Blueprint",
    description: "Crafting intuitive, high-fidelity interfaces. prototypes that visualize the perfect user journey.",
    icon: <Layout className="w-5 h-5" />,
    color: "blue-400"
  },
  {
    year: "03",
    title: "Development",
    subtitle: "The Build",
    description: "Turning designs into pixel-perfect, high-performance code using Next.js and modern tech stacks.",
    icon: <Code className="w-5 h-5" />,
    color: "emerald-400"
  },
  {
    year: "04",
    title: "Web Apps & AI",
    subtitle: "The Intelligence",
    description: "Integrating complex logic and AI agents to automate workflows and add superpowers to your tools.",
    icon: <Cpu className="w-5 h-5" />,
    color: "rose-400"
  },
  {
    year: "05",
    title: "Launch & Content",
    subtitle: "The Growth",
    description: "Professional photography and social media strategy to launch with maximum impact.",
    icon: <Share2 className="w-5 h-5" />,
    color: "amber-400"
  }
];

// 3. Grid Data (Detailed List)
const services = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "More Than a Logo",
    icon: Palette,
    shortDesc: "Your story is your strongest asset. Let’s tell it powerfully.",
    fullContent: {
      headline: "Your story is your strongest asset. Let’s tell it powerfully.",
      subheadline: "A logo is a signature. A brand is a handshake, a feeling, a memory.",
      body: ["We help you uncover the unique pulse of your business and translate it into a visual and verbal identity."]
    }
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Digital Architecture",
    icon: Layout,
    shortDesc: "Where Beauty Shakes Hands with Brainpower.",
    fullContent: {
      headline: "Design that works as good as it looks.",
      subheadline: "A beautiful website that’s confusing to use is a dead end.",
      body: ["We design digital experiences that are not only gorgeous to look at but incredibly easy to use."]
    }
  },
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Next Gen Engineering",
    icon: Code,
    shortDesc: "First Impressions are Digital. Make Yours Unforgettable.",
    fullContent: {
      headline: "Fast. Secure. Scalable.",
      subheadline: "Your website is your 24/7 storefront.",
      body: ["We build fast, stunning, and strategic websites that do more than just exist—they perform."]
    }
  },
  {
    id: "web-apps",
    title: "Custom Web Apps",
    subtitle: "SaaS & Internal Tools",
    icon: Cpu,
    shortDesc: "Your competitive edge, Your software should match.",
    fullContent: {
      headline: "Software built for your specific needs.",
      subheadline: "Generic tools have limits. Custom software has none.",
      body: ["We build secure, scalable, and sophisticated web apps that act as your business’s central nervous system."]
    }
  },
  {
    id: "social-media",
    title: "Social Media",
    subtitle: "Community Growth",
    icon: Share2,
    shortDesc: "Your Feed Shouldn’t Feel Like Work.",
    fullContent: {
      headline: "Turn followers into fans.",
      subheadline: "Social media isn’t a bulletin board; it’s a living room.",
      body: ["We transform your social channels into vibrant communities."]
    }
  },
  {
    id: "photography",
    title: "Photography",
    subtitle: "Visual Authenticity",
    icon: Camera,
    shortDesc: "Authenticity connects. Stock photos don't.",
    fullContent: {
      headline: "Your Brand, in Perfect Focus.",
      subheadline: "In a world of filters, authenticity is your superpower.",
      body: ["People connect with genuine moments. We capture the essence of what you do."]
    }
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-0 bg-black selection:bg-[#1E96C9] selection:text-white overflow-x-hidden">
      
      {/* Background - Deep & Techy */}
      <div className="fixed inset-0 -z-30 opacity-70 pointer-events-none">
        {!isMobile ? (
          <LiquidEther
            colors={["#0a192f", "#112240", "#020c1b"]}
            mouseForce={15}
            cursorSize={40}
            isViscous={true}
            resolution={0.3}
            autoDemo={true}
            autoSpeed={0.2}
            autoIntensity={1.0}
          />
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>

      <div className="fixed inset-0 -z-20 mix-blend-screen pointer-events-none opacity-40">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1E96C9"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={5}
        />
      </div>

      {/* --- Section 1: HERO --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="text-[#1E96C9] font-medium tracking-[0.2em] text-sm uppercase mb-6"
        >
          Our Capabilities
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "var(--font-optft)" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.9]"
        >
          Future <br/><span className="text-gray-600">Engineering.</span>
        </motion.h1>
      </div>

      {/* --- Section 2: 3D CAROUSEL (Proven Works) --- */}
      <section className="relative z-10 mb-32 w-full overflow-hidden">
        <div className="text-center mb-12">
            <h2 className="text-2xl text-white font-bold tracking-wide uppercase text-opacity-50">Proven Works</h2>
        </div>
        <ThreeDCarousel 
          items={carouselItems} 
          autoRotate={true}
          rotateInterval={4000}
          cardHeight={500} 
        />
      </section>

      {/* --- Section 3: TIMELINE (Services Journey) --- */}
      <section className="relative z-10 mb-32 bg-black/20 backdrop-blur-sm py-20 border-y border-white/5">
         <ScrollTimeline 
            events={timelineEvents}
            title="The Process"
            subtitle="From concept to global deployment."
            lineColor="bg-[#1E96C9]/30"
            activeColor="bg-[#1E96C9]"
            cardEffect="glow"
            cardVariant="outlined"
         />
      </section>

      {/* --- Section 4: GRID LAYOUT (Detailed Services) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
            <h2 style={{ fontFamily: "var(--font-optft)" }} className="text-4xl text-white font-bold mb-4">Core Services</h2>
            <div className="w-20 h-1 bg-[#1E96C9] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 relative overflow-hidden rounded-xl">
            {/* Background Mesh Overlay */}
            <div className="absolute inset-0 grayscale contrast-125 opacity-[0.03] pointer-events-none z-0" style={{backgroundImage: 'url("/noise.png")'}} ></div>

            {services.map((service, index) => (
            <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a] p-8 sm:p-12 hover:bg-[#0f0f0f] transition-colors duration-500 cursor-pointer overflow-hidden"
                onClick={() => setSelectedService(service)}
            >
                {/* Top Border Highlight on Hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E96C9] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                        <service.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-gray-600 group-hover:text-[#1E96C9] transition-colors">
                    0{index + 1}
                    </span>
                </div>

                <h3 
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-2xl font-bold text-white mb-3 group-hover:text-[#1E96C9] transition-colors duration-300"
                >
                    {service.title}
                </h3>
                
                <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
                    {service.subtitle}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-400 transition-colors">
                    {service.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors">
                    <span className="border-b border-transparent group-hover:border-white pb-0.5 transition-all">Explore</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                </div>
            </motion.div>
            ))}
        </div>
      </section>

      {/* --- Section 5: CTA (Futuristic) --- */}
      <section className="relative z-10 py-24 text-center px-4 max-w-5xl mx-auto mb-20">
         <InteractiveGradient 
            color="#1E96C9" 
            glowColor="#5227FF" 
            intensity={40} 
            className="rounded-3xl p-1"
         >
            <div className="bg-[#050505] rounded-[28px] p-12 sm:p-20 relative overflow-hidden w-full h-full">
               <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                     Ready to Scale?
                  </h2>
                  <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
                     Join the future of digital engineering. Let's build something extraordinary.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Button onClick={() => window.location.href = '#contact'} variant="primary" className="px-10 py-4 text-lg rounded-full">
                        Start a Project
                     </Button>
                  </div>
               </div>
            </div>
         </InteractiveGradient>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              layoutId={selectedService.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <p className="text-[#1E96C9] text-xs font-bold tracking-widest uppercase mb-4">
                     Service Details
                  </p>
                  <h2 
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                  >
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-gray-400 font-light">
                    {selectedService.subtitle}
                  </p>
                </div>

                <div className="space-y-6 border-t border-white/5 pt-8">
                   <h3 className="text-lg text-white font-medium">
                      {selectedService.fullContent.headline}
                   </h3>
                   <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                      {selectedService.fullContent.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                   </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                   <Button onClick={() => setSelectedService(null)} variant="primary" className="rounded-full px-8">
                      Start Project
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// components/ThreeDCarousel.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

export interface ThreeDCarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string; // Added video support
  logoUrl?: string; // Added logo support
  link: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number; // Kept for backward compatibility but might override
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

const ThreeDCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 5000, // Slower rotation for larger cards
  cardHeight = 600, // Default larger height
  isMobileSwipe = true,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  // Fix hydration error - only render particles on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardStyle = (index: number) => {
    const diff = (index - active + items.length) % items.length;
    const totalItems = items.length;

    if (diff === 0) {
      // Center card - Massive and immersive
      return {
        transform: "translateX(0%) scale(1) translateZ(0px)",
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px) brightness(1)",
        width: isMobile ? "90vw" : "70vw", // Massive width
        maxWidth: "1400px",
      };
    } else if (diff === 1 || diff === totalItems - 1) {
      // Adjacent cards - Pushed further to sides
      const isRight = diff === 1;
      return {
        transform: `translateX(${isRight ? "60%" : "-60%"}) scale(0.85) translateZ(-100px) rotateY(${isRight ? "-5deg" : "5deg"})`, // Subtle rotation
        opacity: 0.5,
        zIndex: 20,
        filter: "blur(2px) brightness(0.6)",
        width: isMobile ? "90vw" : "70vw",
        maxWidth: "1400px",
      };
    } else {
      // Hidden/Back cards
      return {
        transform: "translateX(0%) scale(0.5) translateZ(-200px)",
        opacity: 0,
        zIndex: 0,
        filter: "blur(10px)",
        width: isMobile ? "90vw" : "70vw",
        maxWidth: "1400px",
      };
    }
  };

  return (
    <section
      id="ThreeDCarousel"
      className="bg-transparent w-full mx-auto flex items-center justify-center relative py-10 overflow-hidden"
      ref={carouselRef}
    >
      {/* Ambient glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full bg-[#1E96C9]/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full relative z-10 h-[700px] md:h-[800px] flex items-center justify-center perspective-[2000px]">
        {/* Cards container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = index === active;

              return (
                <motion.div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                  style={cardStyle as any}
                  initial={false}
                  animate={cardStyle}
                >
                  {/* Modern Immersive Card */}
                  <div
                    className={`relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden border border-white/10 group
                      ${isActive ? "shadow-2xl shadow-black/60 ring-1 ring-white/20" : ""}
                    `}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {/* Background Media (Image/Video) */}
                    <div className="absolute inset-0 bg-black">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      >
                        {/* Video Placeholder (if supported in future) */}
                        {item.videoUrl && isActive && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                              <Play
                                className="w-6 h-6 text-white"
                                fill="white"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Gradient Overlays for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-60" />

                      {/* Noise texture overlay */}
                      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.png')] bg-repeat" />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      {/* Top Bar: Brand/Logo */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                          {item.logoUrl ? (
                            <img
                              src={item.logoUrl}
                              alt={item.brand}
                              className="h-10 w-auto object-contain brightness-0 invert"
                            />
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-bold text-lg">
                                {item.brand.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white font-semibold tracking-wide text-sm md:text-base">
                                  {item.brand}
                                </span>
                                <span className="text-white/40 text-xs uppercase tracking-wider">
                                  {item.tags[0]}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Status/Tag */}
                        <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${isActive ? "bg-[#1E96C9] animate-pulse" : "bg-gray-500"}`}
                          />
                          <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Bottom Bar: Title, Desc, CTA */}
                      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-end">
                        <div className="space-y-6">
                          {/* Title */}
                          <h2
                            className="text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-tight"
                            style={{
                              fontFamily: "var(--font-optft, sans-serif)",
                            }}
                          >
                            {item.title}
                            <span className="text-[#1E96C9]">.</span>
                          </h2>

                          {/* Description */}
                          <p className="text-lg text-gray-300 leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none">
                            {item.description}
                          </p>

                          {/* Web URL / Tech Stack */}
                          <div className="flex items-center gap-4 pt-2">
                            {item.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-sm font-mono text-[#1E96C9] bg-[#1E96C9]/10 px-3 py-1 rounded-md border border-[#1E96C9]/20"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Area */}
                        <div className="flex flex-col items-start md:items-end gap-6">
                          {/* View Project Button */}
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-xl bg-white text-black px-8 py-4 font-semibold text-lg hover:bg-[#1E96C9] hover:text-white transition-all duration-300 flex items-center gap-2"
                          >
                            <span className="relative z-10">
                              View Case Study
                            </span>
                            <ExternalLink className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </a>

                          {/* URL Display */}
                          <div className="text-sm font-mono text-white/40 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full border border-white/40" />
                            {item.link
                              .replace(/^https?:\/\//, "")
                              .replace(/\/$/, "")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Floating Navigation Controls */}
        {!isMobile && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40 bg-black/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
            <button
              onClick={() =>
                setActive((prev) => (prev - 1 + items.length) % items.length)
              }
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white" />
            </button>

            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${active === idx ? "w-8 bg-[#1E96C9]" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((prev) => (prev + 1) % items.length)}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThreeDCarousel;

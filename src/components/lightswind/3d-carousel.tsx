// components/ThreeDCarousel.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
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
  rotateInterval = 5000,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

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
      return {
        transform: "translateX(0%) scale(1) translateZ(0px)",
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px) brightness(1)",
        width: isMobile ? "94vw" : "80vw",
        maxWidth: "1400px",
      };
    } else if (diff === 1 || diff === totalItems - 1) {
      const isRight = diff === 1;
      return {
        transform: `translateX(${isRight ? "55%" : "-55%"}) scale(0.85) translateZ(-150px) rotateY(${isRight ? "-8deg" : "8deg"})`,
        opacity: 0.4,
        zIndex: 20,
        filter: "blur(4px) brightness(0.5)",
        width: isMobile ? "94vw" : "80vw",
        maxWidth: "1400px",
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.5) translateZ(-300px)",
        opacity: 0,
        zIndex: 0,
        filter: "blur(15px)",
        width: isMobile ? "94vw" : "80vw",
        maxWidth: "1400px",
      };
    }
  };

  return (
    <section
      id="ThreeDCarousel"
      className="bg-transparent w-full mx-auto flex items-center justify-center relative py-6 md:py-12 overflow-hidden"
      ref={carouselRef}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full bg-[#1E96C9]/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full relative z-10 min-h-[600px] h-[90vh] max-h-[1200px] flex items-center justify-center perspective-[2500px]">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = index === active;

              return (
                <motion.div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  style={cardStyle as MotionStyle}
                  initial={false}
                  animate={cardStyle}
                >
                  <div
                    className={`relative w-full h-[550px]  md:h-[80vh] max-h-[750px] rounded-[2rem] overflow-hidden border border-white/10 group
                      ${isActive ? "shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20" : ""}
                    `}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <div className="absolute inset-0 bg-black">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-70" />
                      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.png')] bg-repeat" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-14">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                          {item.logoUrl ? (
                            <Image
                              src={item.logoUrl}
                              alt={item.brand}
                              width={40}
                              height={40}
                              className="h-8 md:h-12 w-auto object-contain brightness-0 invert shadow-white/10 drop-shadow-lg"
                            />
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                {item.brand.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white font-semibold tracking-wide text-xs md:text-lg">
                                  {item.brand}
                                </span>
                                <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                                  {item.tags[0]}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="px-3 md:px-5 py-1 md:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isActive ? "bg-[#1E96C9] animate-pulse shadow-[0_0_8px_#1E96C9]" : "bg-gray-500"}`}
                          />
                          <span className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-widest">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 md:gap-12 items-end">
                        <div className="space-y-4 md:space-y-8">
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 pt-1">
                            {item.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] md:text-sm font-mono text-[#1E96C9] bg-[#1E96C9]/10 px-2 md:px-4 py-0.5 md:py-1.5 rounded-lg border border-[#1E96C9]/20"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-4 md:gap-8">
                          <Link
                            href={item.link}
                            className="group relative overflow-hidden rounded-2xl bg-white text-black px-6 py-3  font-semibold text-sm hover:bg-[#1E96C9] hover:text-white transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center"
                          >
                            <span className="relative z-10 transition-transform duration-500">
                              View Project
                            </span>
                            <ExternalLink className="w-4 h-4 md:w-6 md:h-6 relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </Link>

                          <div className="text-[10px] md:text-sm font-mono text-white/40 flex items-center gap-3 bg-white/5 py-1.5 px-3 rounded-full border border-white/5">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1E96C9]/40" />
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

        <div className="absolute md:bottom-6  bottom-10  left-1/2 -translate-x-1/2 flex items-center gap-8 z-40 bg-black/40 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/10 shadow-2xl">
          <button
            onClick={() =>
              setActive((prev) => (prev - 1 + items.length) % items.length)
            }
            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 md:w-8 md:h-8 text-white/70 group-hover:text-white group-hover:-translate-x-0.5" />
          </button>

          <div className="flex gap-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${active === idx ? "w-8 md:w-12 bg-[#1E96C9]" : "w-1.5 md:w-2 bg-white/20 hover:bg-white/50"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((prev) => (prev + 1) % items.length)}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group active:scale-95"
          >
            <ChevronRight className="w-4 h-4 md:w-8 md:h-8 text-white/70 group-hover:text-white group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;

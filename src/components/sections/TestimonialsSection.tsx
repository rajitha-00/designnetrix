"use client";

import type { ThreeDCarouselItem } from "@/components/lightswind/3d-carousel";
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "../lightswind/3d-scroll-trigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

const testimonialsData: ThreeDCarouselItem[] = [
  {
    id: 1,
    title: "Transformed Our Digital Presence",
    brand: "RH Cleaning - Melbourne",
    description:
      "DesignNetrix delivered a stunning Next.js platform that increased our conversion rate by 47%. Their attention to performance and user experience is unmatched. The team understood our vision and brought it to life ahead of schedule.",
    tags: ["Next.js", "Performance", "UX Design"],
    imageUrl: "/clients/rhc.png",

    link: "#",
  },
  {
    id: 2,
    title: "Best Development Partner We've Had",
    brand: "RealmInteriors - Kandy",
    description:
      "Working with DesignNetrix was seamless from start to finish. They took our complex requirements and created a scalable, beautiful solution. Our time-to-market was cut in half, and the results speak for themselves.",
    tags: ["Web Development", "Scalability", "Fast Delivery"],
    imageUrl: "/clients/realm.png",

    link: "#",
  },
  {
    id: 3,
    title: "Exceeded Every Expectation",
    brand: "Xiang Yun Chinese Restaurant - Kandy",
    description:
      "The team at DesignNetrix brought expertise we couldn't build in-house. They modernized our entire platform with cutting-edge technology and design that positions us as industry leaders. Absolutely worth every penny.",
    tags: ["Modernization", "Innovation", "Design Excellence"],
    imageUrl: "/clients/xiangyun.png",
    link: "#",
  },
  {
    id: 4,
    title: "Game-Changing Results",
    brand: "Sky Garden Hotel- Kandy",
    description:
      "Our engagement metrics tripled after launch. DesignNetrix didn't just build a website—they engineered a growth engine. Their strategic approach to UX and conversion optimization has been transformative for our business.",
    tags: ["Growth", "Conversion", "Strategy"],
    imageUrl: "/clients/skygarden.png",
    link: "#",
  },
  {
    id: 5,
    title: "Professional Excellence at Every Stage",
    brand: "Eat Fit - Colombo",
    description:
      "From discovery to deployment, DesignNetrix demonstrated professionalism and technical mastery. They solved problems we didn't even know we had. Our clients constantly compliment the new platform.",
    tags: ["Professional", "Technical Mastery", "Client Satisfaction"],
    imageUrl: "/clients/eatfit.png",
    link: "#",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="mb-12 lg:mb-16 text-center"
        >
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-xs sm:text-sm font-medium tracking-widest text-[#1E96C9] uppercase mb-4"
          >
            TESTIMONIALS
          </p>
          <SectionTitle
            title="TRUSTED BY LEADING"
            subtitle="Growing Businesses"
            align="center"
          />
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. See what our clients have to
            say about working with DesignNetrix and the results we&apos;ve
            delivered.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative overflow-hidden py-12">
          <ThreeDScrollTriggerContainer className="space-y-8">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="inline-block mx-6 w-[450px] flex-shrink-0"
                >
                  <div className="relative group h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E96C9]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative glass rounded-2xl p-6 hover:border-[#1E96C9]/50 transition-all duration-300 flex flex-col">
                      {/* Avatar and Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E96C9]/30 flex-shrink-0">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.brand}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            style={{ fontFamily: "var(--font-optft)" }}
                            className="text-base font-bold text-white truncate"
                          >
                            {testimonial.brand}
                          </h3>
                          <p
                            style={{ fontFamily: "var(--font-sansbld)" }}
                            className="text-xs text-gray-400 line-clamp-1"
                          >
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <p
                        style={{ fontFamily: "var(--font-sansbld)" }}
                        className="text-gray-200 text-sm leading-relaxed mb-4 whitespace-normal break-words"
                      >
                        &ldquo;{testimonial.description}&rdquo;
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {testimonial.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#1E96C9]/10 border border-[#1E96C9]/20 text-[#1E96C9] rounded-full text-xs font-medium whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ThreeDScrollTriggerRow>
            <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
              {testimonialsData.map((testimonial) => (
                <div
                  key={`reverse-${testimonial.id}`}
                  className="inline-block mx-6 w-[450px] flex-shrink-0"
                >
                  <div className="relative group h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative glass rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                      {/* Avatar and Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.brand}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            style={{ fontFamily: "var(--font-optft)" }}
                            className="text-base font-bold text-white truncate"
                          >
                            {testimonial.brand}
                          </h3>
                          <p
                            style={{ fontFamily: "var(--font-sansbld)" }}
                            className="text-xs text-gray-400 line-clamp-1"
                          >
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <p
                        style={{ fontFamily: "var(--font-sansbld)" }}
                        className="text-gray-200 text-sm leading-relaxed mb-4 whitespace-normal break-words"
                      >
                        &ldquo;{testimonial.description}&rdquo;
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {testimonial.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-medium whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
        </div>
      </div>
    </section>
  );
}

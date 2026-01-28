"use client";
import { useRef } from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";
import ThreeDHoverGallery from "../lightswind/3d-hover-gallery";
import { SectionBadge } from "../SectionBadge";
import { SectionTitle } from "../SectionTitle";

// Example placeholder images (should be replaced with actual project/office shots)
const GALLERY_IMAGES = [
  "/projects/RealmMobile.png",
  "/projects/EatfitMobile.png",
  "/projects/RhCleaningMobile.png",
  "/projects/SkyGardenPos.png",
  "/projects/XiangYunMobilepng.png",
];

export const CTAService = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 " />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: 3D Gallery */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center -mx-8 lg:mx-0">
            <ThreeDHoverGallery
              images={GALLERY_IMAGES}
              itemWidth={15}
              itemHeight={25}
              activeWidth={40}
              autoPlay={true}
              autoPlayDelay={3000}
              className="bg-transparent min-h-0"
            />
          </div>

          {/* Right Side: Content */}
          <div className="relative text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge title="Let's Work Together" />
              <SectionTitle subtitle="Ready to Scale?" align="left" />
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Turn your vision into a digital masterpiece. We build brands and
                products that define industries.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Button
                  onClick={() => (window.location.href = "#contact")}
                  variant="primary"
                  size="xl"
                >
                  Start a Project
                </Button>

                <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                  <span className="w-12 h-[1px] bg-white/10" />
                  <span>OR BOOK A CALL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
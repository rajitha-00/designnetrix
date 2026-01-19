"use client";
import { useRef } from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";
import ThreeDHoverGallery from "../lightswind/3d-hover-gallery";

// Example placeholder images (should be replaced with actual project/office shots)
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
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
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#1E96C9]/30 bg-[#1E96C9]/10 text-[#1E96C9] text-sm font-medium tracking-widest uppercase mb-8">
                Let's Work Together
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9]"
                  style={{ fontFamily: "var(--font-optft)" }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#1E96C9] to-[#1E96C9]">Scale?</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Turn your vision into a digital masterpiece. We build brands and products that define industries.
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
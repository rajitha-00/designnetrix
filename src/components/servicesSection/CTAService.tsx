"use client";
import { useRef } from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { ThreeDMarquee } from "../lightswind/3d-marquee";
import { SectionBadge } from "../SectionBadge";
import { SectionTitle } from "../SectionTitle";

const CLIENT_LOGOS = [
  {
    src: "/clients/eatfit.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/realm.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/rhc.png",
    alt: "DesignNetrix Client",
  },

  {
    src: "/clients/skygarden.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/xiangyun.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/rhc.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/xiangyun.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/eatfit.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/realm.png",
    alt: "DesignNetrix Client",
  },
  {
    src: "/clients/skygarden.png",
    alt: "DesignNetrix Client",
  },
];

export const CTAService = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#1E96C9]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="relative text-center  lg:text-left mt-8 lg:mt-0">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-[0_0_30px_-5px_#1E96C9]"
                >
                  Start Your Project
                </Button>
                <Button variant="secondary" size="lg" className="glass">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative "
          >
            <ThreeDMarquee images={CLIENT_LOGOS} cols={5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

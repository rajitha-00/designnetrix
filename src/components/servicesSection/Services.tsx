"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SERVISES } from "@/constanats/servises";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../Button";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof SERVISES)[0] | null
  >(null);
  
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2
              style={{ fontFamily: "var(--font-optft)" }}
              className="text-4xl md:text-5xl text-white font-bold mb-4"
            >
              Core Services
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#1E96C9] to-transparent mx-auto rounded-full" />
          </motion.div>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored for your growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative">
          
          {SERVISES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-full"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute inset-0 bg-[#1E96C9] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-[#1E96C9]/30 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col hover:-translate-y-1">
                {/* Gradient Stain */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E96C9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#1E96C9]/20 transition-colors" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-[#1E96C9] group-hover:border-[#1E96C9] transition-all duration-300">
                      <service.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-medium text-white/20 group-hover:text-[#1E96C9] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-2xl font-bold text-white mb-2 group-hover:text-[#1E96C9] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-[#1E96C9] mb-4 uppercase tracking-widest opacity-80">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors mt-auto">
                    <span className="border-b border-white/0 group-hover:border-white/100 transition-all duration-300">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              layoutId={selectedService.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] z-10"
            >
              {/* Modal Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#1E96C9]/20 blur-[100px] pointer-events-none" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 overflow-y-auto custom-scrollbar relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E96C9]/10 border border-[#1E96C9]/20 text-[#1E96C9] text-xs font-bold tracking-widest uppercase mb-6">
                    <selectedService.icon className="w-3 h-3" />
                    Service Details
                  </div>
                  
                  <h2
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-3xl sm:text-5xl font-bold text-white mb-3"
                  >
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-gray-400 font-light border-l-2 border-[#1E96C9] pl-4">
                    {selectedService.subtitle}
                  </p>
                </div>

                <div className="space-y-8 border-t border-white/5 pt-8">
                  <div>
                    <h3 className="text-lg text-white font-semibold mb-4">
                       Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedService.fullContent.headline}
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    {selectedService.fullContent.body.map((paragraph, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1E96C9] flex-shrink-0" />
                        <p className="text-gray-400 leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-500">
                    Ready to scale your business?
                  </div>
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-xl shadow-[0_0_20px_rgba(30,150,201,0.3)]"
                  >
                    Start Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
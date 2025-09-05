"use client";

import { useState } from "react";
import LiquidEther from "@/components/LiquidEther";
import Link from "next/link";

export default function NotFound() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsApp = () => {
    const phoneNumber = "+94704409960";
    const message = "Hi! I found a broken link on your website. I'd like to get in touch about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  const handleEmail = () => {
    const email = "designnetix@icloud.com";
    const subject = "Website Navigation Issue";
    const body = "Hi! I encountered a broken link on your website. I'd like to learn more about your services.";
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    closeModal();
  };

  return (
    <div className="relative h-full w-full min-h-screen">
      {/* Background fluid animation */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={["#1D4486", "#1E96C9", "#ffffff"]}
          mouseForce={14}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={4000}
          autoRampDuration={0.8}
        />
      </div>

      {/* 404 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 
            style={{ fontFamily: "var(--font-optft)" }}
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white/10 leading-none select-none"
          >
            404
          </h1>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          <span 
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#1E96C9]/20 border border-[#1E96C9]/30 text-[#1E96C9] text-sm font-medium backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-[#1E96C9] rounded-full mr-2 animate-pulse"></div>
            Currently in Development
          </span>
        </div>

        {/* Main Message */}
        <h2
          style={{ fontFamily: "var(--font-optft)" }}
          className="max-w-2xl mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        >
          This Page is Under{" "}
          <span className="text-[#1E96C9]">Construction</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{ fontFamily: "var(--font-sansbld)" }}
          className="max-w-xl mb-8 text-lg text-gray-200 font-medium"
        >
          We&apos;re crafting something extraordinary. Our team is working hard to bring you an amazing experience. 
          <span className="text-white"> Get in touch</span> and we&apos;ll keep you updated on our progress.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link 
            href="/"
            className="group relative px-6 py-2.5 text-sm font-medium text-white bg-[#1E96C9]/90 rounded-md transition-all duration-200 ease-out hover:bg-[#1E96C9] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E96C9] active:translate-y-px"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
          </Link>

          <button
            onClick={openModal}
            className="group relative px-6 py-2.5 text-sm font-medium text-white/90 rounded-md transition-all duration-200 ease-out hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.01] backdrop-blur-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:translate-y-px"
          >
            <span className="relative z-10">Get Notified</span>
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        </div>

        {/* Development Timeline */}
        <div className="max-w-md w-full">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
            <h3 
              style={{ fontFamily: "var(--font-sansbld)" }}
              className="text-white font-medium mb-4 text-center"
            >
              Development Progress
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Design & Planning</span>
                <span className="text-[#1E96C9] text-sm font-medium">✓ Complete</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Core Development</span>
                <span className="text-[#1E96C9] text-sm font-medium">🔄 In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Testing & Launch</span>
                <span className="text-white/50 text-sm">⏳ Coming Soon</span>
              </div>
            </div>

            <div className="mt-4 bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-[#1E96C9] to-[#1D4486] rounded-full h-2 transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h3 
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-optft)" }}
              >
                Stay Updated
              </h3>
              <p 
                className="text-white/80 text-sm"
                style={{ fontFamily: "var(--font-sansbld)" }}
              >
                Get notified when this page goes live
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* WhatsApp Option */}
              <button
                onClick={handleWhatsApp}
                className="group w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium" style={{ fontFamily: "var(--font-sansbld)" }}>
                      WhatsApp
                    </h4>
                    <p className="text-white/60 text-sm">Get instant updates</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Email Option */}
              <button
                onClick={handleEmail}
                className="group w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium" style={{ fontFamily: "var(--font-sansbld)" }}>
                      Email
                    </h4>
                    <p className="text-white/60 text-sm">Join our mailing list</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

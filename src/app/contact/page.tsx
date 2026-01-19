"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/Button";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfos = [
    {
      icon: <Mail className="w-6 h-6 text-[#1E96C9]" />,
      label: "Email",
      value: "designnetix@icloud.com",
      link: "mailto:designnetix@icloud.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#1E96C9]" />,
      label: "Phone",
      value: "+94 70 440 9960",
      link: "tel:+94704409960",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#1E96C9]" />,
      label: "Office",
      value: "Colombo, Sri Lanka",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, link: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, link: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#", name: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, link: "#", name: "GitHub" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E96C9]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E96C9]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1E96C9] font-mono tracking-widest uppercase text-sm mb-4"
            >
              Get In Touch
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-optft)' }}
            >
              Let's craft your <br />
              <span className="text-white/40">digital future.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. 
              Our team usually responds within 24 hours.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
            {/* Contact Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                {contactInfos.map((info, idx) => (
                  <a 
                    key={idx}
                    href={info.link}
                    className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1E96C9]/20 group-hover:border-[#1E96C9]/30 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-xl font-medium text-white group-hover:text-[#1E96C9] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-12 border-t border-white/10">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">
                  Follow Our Journey
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp Link in Info Column */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="w-7 h-7 text-white" fill="white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Quick Chat</h4>
                    <p className="text-gray-400 text-sm">Response in minutes</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20ba56] text-black font-bold h-12 rounded-xl border-none"
                  onClick={() => window.open('https://wa.me/94704409960', '_blank')}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 text-center"
                >
                  <div className="w-20 h-20 bg-[#1E96C9] rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl shadow-[#1E96C9]/40">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg mb-8">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#1E96C9] hover:bg-[#1E96C9]/10"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="What are you interested in?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-2xl bg-[#1E96C9] hover:bg-[#1e85b2] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

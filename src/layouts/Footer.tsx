"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram,
  Send,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Cloud Solutions", href: "#" },
      { name: "Consulting", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Work", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-emerald-500/5 animate-pulse" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E96C9/0.05_1px,transparent_1px),linear-gradient(to_bottom,#1E96C9/0.05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <img
                  src="/logo_white.png"
                  alt="DesignNetrix"
                  className="h-10 w-auto"
                />
              </motion.div>
              <p
                style={{ fontFamily: "var(--font-sansbld)" }}
                className="text-gray-400 leading-relaxed max-w-md"
              >
                Transforming ideas into digital reality. We build cutting-edge solutions
                that drive growth and innovation.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4
                style={{ fontFamily: "var(--font-sansbld)" }}
                className="text-white font-semibold mb-4 flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#1E96C9]" />
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 
                  group-focus-within:text-[#1E96C9] transition-colors duration-300 z-10" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-32 py-4 bg-white/5 border border-white/10 rounded-xl 
                    text-white placeholder-gray-500 focus:outline-none focus:border-[#1E96C9] 
                    focus:bg-white/10 transition-all duration-300 backdrop-blur-sm
                    hover:border-white/20"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 
                    bg-gradient-to-r from-[#1E96C9] to-[#1D4486] text-white rounded-lg
                    font-semibold text-sm flex items-center gap-2 
                    hover:shadow-lg hover:shadow-[#1E96C9]/25 transition-all duration-300
                    active:shadow-none"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                Join 5,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4
                style={{ fontFamily: "var(--font-sansbld)" }}
                className="text-white font-semibold mb-6 text-sm uppercase tracking-wider"
              >
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#1E96C9] transition-colors duration-300 
                      text-sm flex items-center gap-2 group"
                      onMouseEnter={() => setIsHovered(link.name)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <ArrowRight
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isHovered === link.name ? "translate-x-1" : ""
                        }`}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                style={{ fontFamily: "var(--font-sansbld)" }}
                className="text-white font-semibold mb-6 text-sm uppercase tracking-wider"
              >
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#1E96C9] transition-colors duration-300 
                      text-sm flex items-center gap-2 group"
                      onMouseEnter={() => setIsHovered(link.name)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <ArrowRight
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isHovered === link.name ? "translate-x-1" : ""
                        }`}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4
                style={{ fontFamily: "var(--font-sansbld)" }}
                className="text-white font-semibold mb-6 text-sm uppercase tracking-wider"
              >
                Legal
              </h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#1E96C9] transition-colors duration-300 
                      text-sm flex items-center gap-2 group"
                      onMouseEnter={() => setIsHovered(link.name)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <ArrowRight
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isHovered === link.name ? "translate-x-1" : ""
                        }`}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2">
                <a
                  href="mailto:designnetrix@outlook.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#1E96C9] 
                  transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  designnetrix@outlook.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#1E96C9] 
                  transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +94707140146
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  Colombo, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-black/40 text-[#1E96C9]">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p
            style={{ fontFamily: "var(--font-sansbld)" }}
            className="text-gray-500 text-sm text-center sm:text-left"
          >
            © {new Date().getFullYear()} DesignNetrix. All rights reserved.
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            <span className="text-gray-600">Crafted with</span>{" "}
            <span className="text-[#1E96C9]">❤</span>{" "}
            <span className="text-gray-600">in Sri Lanka</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2 rounded-lg bg-white/5 border border-white/10 
                text-gray-400 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
          bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full 
              bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

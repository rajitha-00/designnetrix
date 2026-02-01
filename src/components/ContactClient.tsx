"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/Button";
import { HeroTitel } from "@/components/HeroTitel";
import { sendEmail } from "@/actions/sendEmail";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M321.331.011h-81.882v347.887c0 45.59-32.751 74.918-72.582 74.918-39.832 0-75.238-29.327-75.238-74.918 0-52.673 41.165-80.485 96.044-74.727v-88.153c-7.966-1.333-15.932-1.77-22.576-1.77C75.249 183.248 0 255.393 0 344.794c0 94.722 74.353 167.304 165.534 167.304 80.112 0 165.097-58.868 165.097-169.96V161.109c35.406 35.406 78.341 46.476 124.369 46.476V126.14C398.35 122.151 335.494 84.975 321.331 0v.011z" />
  </svg>
);

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object
    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("subject", formState.subject);
    formData.append("message", formState.message);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfos = [
    {
      icon: <Mail className="w-6 h-6 text-[#1E96C9]" />,
      label: "Email",
      value: "designnetix@outlook.com",
      link: "mailto:designnetix@outlook.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#1E96C9]" />,
      label: "Phone",
      value: "+94 70 714 0146",
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
    { icon: <XIcon className="w-4 h-4" />, link: "#", name: "X (Twitter)" },
    { icon: <Facebook className="w-5 h-5" />, link: "#", name: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#", name: "LinkedIn" },
    { icon: <TikTokIcon className="w-5 h-5" />, link: "#", name: "TikTok" },
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
            <HeroTitel title="Let's craft your" subtitle="digital future." />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Have a project in mind? We&apos;d love to hear from you. Our team
              usually responds within 24 hours.
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

              {/* Assistance Message */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E96C9]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#1E96C9]/20 transition-all duration-500" />

                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#1E96C9]/20 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-[#1E96C9]" />
                  </div>
                  <h4 className="font-semibold text-lg text-white">
                    Here to Help
                  </h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  We are always here with you for assistance. Whether you need
                  technical support or project guidance, our team is standing
                  by.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">
                  Follow Our Journey
                </p>
                <div className="flex flex-wrap gap-4">
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
                    <MessageCircle
                      className="w-7 h-7 text-white"
                      fill="white"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Quick Chat</h4>
                    <p className="text-gray-400 text-sm">Response in minutes</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#20ba56] text-black font-bold h-12 rounded-xl border-none"
                  onClick={() =>
                    window.open("https://wa.me/94704409960", "_blank")
                  }
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
                    Thank you for reaching out. We&apos;ve received your message
                    and will get back to you shortly.
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
                      <label className="text-sm font-medium text-gray-400 ml-1">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="What are you interested in?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E96C9]/50 focus:border-[#1E96C9] transition-all resize-none"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
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
}

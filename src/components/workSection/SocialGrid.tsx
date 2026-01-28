"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

const SOCIAL_POSTS = [
  {
    id: 1,
    type: "instagram",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    title: "Brand Identity Design",
    link: "#",
  },
  {
    id: 2,
    type: "linkedin",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1770&auto=format&fit=crop",
    title: "The Future of Web Dev",
    link: "#",
  },
  {
    id: 3,
    type: "instagram",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    title: "UI/UX Trends 2025",
    link: "#",
  },
  {
    id: 4,
    type: "twitter",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1770&auto=format&fit=crop",
    title: "Design Systems 101",
    link: "#",
  },
  {
    id: 5,
    type: "instagram",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=1770&auto=format&fit=crop",
    title: "Creative Process",
    link: "#",
  },
  {
    id: 6,
    type: "linkedin",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1770&auto=format&fit=crop",
    title: "Scaling Teams",
    link: "#",
  },
];

export const SocialGrid = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <SectionTitle subtitle="THE SOCIAL PULSE" align="center" />
          <p className="text-gray-400">
            Join the conversation. We share value, not just visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_POSTS.map((post, i) => (
            <motion.a
              href={post.link}
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#111]"
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
                    {post.type === "instagram" && <Instagram size={20} />}
                    {post.type === "linkedin" && <Linkedin size={20} />}
                    {post.type === "twitter" && <Twitter size={20} />}
                  </div>
                  <div className="p-3 bg-[#1E96C9] rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {post.title}
                  </h3>
                  <span className="text-sm text-[#1E96C9] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Post
                  </span>
                </div>
              </div>

              {/* Helper Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

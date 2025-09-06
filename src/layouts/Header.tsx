"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-[#1E96C9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-optft)" }}
            >
              <Image
                src="/logo_white.png"
                alt="DesignNetrix"
                width={250}
                height={40}
                className="w-32 h-auto sm:w-40 md:w-48 lg:w-60 xl:w-64"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/services"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-sansbld)" }}
            >
              Services
            </a>
            <a
              href="/work"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-sansbld)" }}
            >
              Work
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-sansbld)" }}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-sansbld)" }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white/80 hover:text-white transition-colors duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
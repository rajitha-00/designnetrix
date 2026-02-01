"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenuOverlay from "@/components/lightswind/hamburger-menu-overlay";
import { LayoutGrid, Briefcase, User, Mail, Home } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <LayoutGrid className="w-6 h-6" />,
    },
    { label: "Work", href: "/work", icon: <Briefcase className="w-6 h-6" /> },
    { label: "About", href: "/about", icon: <User className="w-6 h-6" /> },
    { label: "Contact", href: "/contact", icon: <Mail className="w-6 h-6" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative min-h-[80px]">
        {/* Logo Container */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group relative flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="absolute -inset-2 bg-[#1E96C9]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Image
              src="/logo_white.png"
              alt="DesignNetrix"
              width={250}
              height={40}
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(30,150,201,0.5)] transition-all duration-300"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Services", "Work", "About", "Contact"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item}
                href={href}
                className={`text-base font-medium transition-all duration-300 relative group flex items-center gap-2
                  ${
                    isActive
                      ? "text-white tracking-wide"
                      : "text-white/70 hover:text-white hover:tracking-wider"
                  }`}
                style={{ fontFamily: "var(--font-sansbld)" }}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E96C9] shadow-[0_0_8px_#1E96C9] animate-pulse" />
                )}

                {item}

                {/* Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#1E96C9] to-[#60a5fa] transition-all duration-300
                    ${isActive ? "w-full shadow-[0_0_8px_rgba(30,150,201,0.5)]" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu - HamburgerMenuOverlay */}
        <HamburgerMenuOverlay
          items={menuItems}
          buttonTop="40px"
          buttonLeft="calc(100% - 40px)"
          buttonSize="sm"
          buttonColor="rgba(30, 150, 201, 0.15)"
          overlayBackground="rgba(10, 15, 20, 0.96)"
          textColor="#ffffff"
          fontSize="lg"
          fontFamily="var(--font-sansbld)"
          fontWeight="bold"
          enableBlur={true}
          zIndex={100}
          className="md:hidden"
          menuItemClassName="hover:text-[#1E96C9] transition-all duration-300"
          staggerDelay={0.08}
          animationDuration={0.8}
          menuAlignment="center"
        />
      </nav>
    </header>
  );
}
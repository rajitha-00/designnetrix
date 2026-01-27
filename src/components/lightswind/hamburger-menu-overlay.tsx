"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

export interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface HamburgerMenuOverlayProps {
  /** Array of menu items */
  items: MenuItem[];
  /** Button position from top */
  buttonTop?: string;
  /** Button position from left */
  buttonLeft?: string;
  /** Button size */
  buttonSize?: "sm" | "md" | "lg";
  /** Button background color */
  buttonColor?: string;
  /** Overlay background color/gradient */
  overlayBackground?: string;
  /** Menu text color */
  textColor?: string;
  /** Menu font size */
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Font family */
  fontFamily?: string;
  /** Font weight */
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  /** Animation duration in seconds */
  animationDuration?: number;
  /** Stagger delay between menu items */
  staggerDelay?: number;
  /** Menu items alignment */
  menuAlignment?: "left" | "center" | "right";
  /** Custom class for container */
  className?: string;
  /** Custom class for button */
  buttonClassName?: string;
  /** Custom class for menu items */
  menuItemClassName?: string;
  /** Disable overlay close on item click */
  keepOpenOnItemClick?: boolean;
  /** Custom button content */
  customButton?: React.ReactNode;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Callback when menu opens */
  onOpen?: () => void;
  /** Callback when menu closes */
  onClose?: () => void;
  /** Menu items layout direction */
  menuDirection?: "vertical" | "horizontal";
  /** Enable blur backdrop */
  enableBlur?: boolean;
  /** Z-index for overlay */
  zIndex?: number;
}

export const HamburgerMenuOverlay: React.FC<HamburgerMenuOverlayProps> = ({
  items = [],
  buttonTop = "60px",
  buttonLeft = "60px",
  buttonSize = "md",
  buttonColor = "#6c8cff",
  overlayBackground = "#6c8cff",
  textColor = "#ffffff",
  fontSize = "md",
  fontFamily = '"Krona One", monospace',
  fontWeight = "bold",
  animationDuration = 1.5,
  staggerDelay = 0.1,
  menuAlignment = "left",
  className,
  buttonClassName,
  menuItemClassName,
  keepOpenOnItemClick = false,
  customButton,
  ariaLabel = "Navigation menu",
  onOpen,
  onClose,
  menuDirection = "vertical",
  enableBlur = false,
  zIndex = 1000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const buttonSizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const fontSizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    "2xl": "text-6xl md:text-7xl",
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      onOpen?.();
    } else {
      onClose?.();
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }

    if (item.href && !item.onClick) {
      window.location.href = item.href;
    }

    if (!keepOpenOnItemClick) {
      setIsOpen(false);
      onClose?.();
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className={cn("relative z-[60]", className)}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Krona+One:wght@400&display=swap');
          
          .hamburger-overlay-${zIndex} {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${overlayBackground};
            z-index: ${zIndex};
            clip-path: circle(0px at ${buttonLeft} ${buttonTop});
            transition: clip-path ${animationDuration}s cubic-bezier(0.16, 1, 0.3, 1);
            ${enableBlur ? "backdrop-filter: blur(90px) saturate(180%);" : ""}
            -webkit-backdrop-filter: blur(90px) saturate(180%);
          }
          
          .hamburger-overlay-${zIndex}.open {
            clip-path: circle(150% at ${buttonLeft} ${buttonTop});
          }
          
          .hamburger-button-${zIndex} {
            position: relative;
            z-index: ${zIndex + 1};
            background: ${buttonColor};
            border: 1px solid rgba(255, 255, 255, 0.15);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          
          .hamburger-button-${zIndex}:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(30, 150, 201, 0.4);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 15px rgba(30, 150, 201, 0.2);
            transform: translateY(-2px);
          }
          
          .hamburger-button-${zIndex}:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(30, 150, 201, 0.4);
          }
          
          .menu-items-${zIndex} {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            max-width: 600px;
            padding: 0 2rem;
            ${menuAlignment === "center" ? "text-align: center; align-items: center;" : ""}
            ${menuAlignment === "right" ? "text-align: right; align-items: flex-end;" : "align-items: flex-start;"}
          }
          
          .menu-item-${zIndex} {
            position: relative;
            list-style: none;
            padding: 0.5rem 0;
            cursor: pointer;
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            font-family: ${fontFamily};
            font-weight: ${fontWeight};
            color: ${textColor};
            text-decoration: none;
            display: flex;
            align-items: center;
          }
          
          .menu-item-${zIndex}.visible {
            transform: translateY(0);
            opacity: 1;
          }
          
          .menu-item-${zIndex} span {
            opacity: 0.6;
            transition: all 0.4s ease;
            display: flex;
            align-items: center;
            gap: 1.25rem;
            letter-spacing: 0.05em;
          }
          
          .menu-item-${zIndex}:hover span {
            opacity: 1;
            transform: translateX(10px);
            color: #1E96C9;
          }
          
          .menu-icon {
            padding: 10px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s ease;
          }
          
          .menu-item-${zIndex}:hover .menu-icon {
            background: rgba(30, 150, 201, 0.1);
            border-color: rgba(30, 150, 201, 0.2);
            transform: scale(1.1) rotate(5deg);
          }
          
          @media (max-width: 768px) {
            .menu-items-${zIndex} {
              gap: 1rem;
            }
          }
        `}
      </style>

      {/* Hamburger Button */}
      <button
        className={cn(
          `hamburger-button-${zIndex}`,
          buttonSizes[buttonSize],
          buttonClassName,
        )}
        onClick={toggleMenu}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        {customButton || (
          <div className="relative w-full h-full flex items-center justify-center">
            <Menu
              className={cn(
                "absolute transition-all duration-500 ease-out",
                isOpen
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100",
              )}
              size={buttonSize === "sm" ? 22 : buttonSize === "md" ? 24 : 28}
              color={textColor}
            />
            <X
              className={cn(
                "absolute transition-all duration-500 ease-out",
                isOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50",
              )}
              size={buttonSize === "sm" ? 22 : buttonSize === "md" ? 24 : 28}
              color={textColor}
            />
          </div>
        )}
      </button>

      {/* Navigation Overlay */}
      <div
        ref={navRef}
        className={cn(`hamburger-overlay-${zIndex}`, isOpen && "open")}
        aria-hidden={!isOpen}
      >
        <ul className={cn(`menu-items-${zIndex}`)}>
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                `menu-item-${zIndex}`,
                fontSizes[fontSize],
                isOpen && "visible",
                menuItemClassName,
              )}
              style={{
                transitionDelay: isOpen
                  ? `${0.1 + index * staggerDelay}s`
                  : "0s",
              }}
              onClick={() => handleItemClick(item)}
              tabIndex={isOpen ? 0 : -1}
              role="button"
            >
              <span>
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenuOverlay;

"use client";

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Button variants using class-variance-authority for better type safety and maintainability
const buttonVariants = cva(
  // Base styles with futuristic design elements
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium transition-all duration-300 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E96C9]/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "group overflow-hidden",
    // Futuristic glow effect
    "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r",
    "before:from-[#1E96C9]/20 before:via-[#5227FF]/20 before:to-[#FF9FFC]/20",
    "before:opacity-0 before:transition-opacity before:duration-300",
    "hover:before:opacity-100",
    // Glass morphism effect
    "backdrop-blur-sm",
    // Cyberpunk border glow
    "after:absolute after:inset-0 after:rounded-md after:border after:border-transparent",
    "after:bg-gradient-to-r after:from-[#1E96C9] after:via-[#5227FF] after:to-[#FF9FFC]",
    "after:bg-clip-border after:mask-composite after:transition-all after:duration-300",
    "after:opacity-0 hover:after:opacity-30"
  ],
  {
    variants: {
      variant: {
        // Primary - Main CTA button with gradient background
        primary: [
          "bg-gradient-to-r from-[#1E96C9] via-[#5227FF] to-[#1E96C9]",
          "bg-size-200 bg-pos-0 hover:bg-pos-100",
          "text-white shadow-lg shadow-[#1E96C9]/25",
          "hover:shadow-xl hover:shadow-[#1E96C9]/40",
          "hover:scale-[1.02] active:scale-[0.98]",
          "border border-[#1E96C9]/30"
        ],
        // Secondary - Outlined with gradient border
        secondary: [
          "bg-black/40 border-2 border-transparent",
          "text-white/90 hover:text-white",
          "shadow-lg shadow-black/20",
          "hover:bg-black/60 hover:shadow-xl",
          "hover:scale-[1.02] active:scale-[0.98]",
          // Animated gradient border
          "bg-gradient-to-r from-[#1E96C9] via-[#5227FF] to-[#FF9FFC]",
          "bg-clip-padding",
          "[background-clip:padding-box,border-box]",
          "[background-image:linear-gradient(black,black),linear-gradient(90deg,#1E96C9,#5227FF,#FF9FFC)]"
        ],
        // Ghost - Minimal with hover effects
        ghost: [
          "bg-transparent text-white/70 hover:text-white",
          "hover:bg-white/5 backdrop-blur-sm",
          "border border-white/10 hover:border-white/20",
          "hover:shadow-lg hover:shadow-[#1E96C9]/20"
        ],
        // Destructive - For dangerous actions
        destructive: [
          "bg-gradient-to-r from-red-600 to-red-700",
          "text-white shadow-lg shadow-red-600/25",
          "hover:from-red-700 hover:to-red-800",
          "hover:shadow-xl hover:shadow-red-600/40",
          "hover:scale-[1.02] active:scale-[0.98]",
          "border border-red-600/30"
        ],
        // Link - Text button with underline effect
        link: [
          "text-[#1E96C9] underline-offset-4 hover:underline",
          "hover:text-[#5227FF] p-0 h-auto",
          "transition-colors duration-200"
        ],
        // Neon - Glowing futuristic button
        neon: [
          "bg-black/80 border border-[#1E96C9]",
          "text-[#1E96C9] hover:text-white",
          "shadow-[0_0_10px_#1E96C9,0_0_20px_#1E96C9,0_0_30px_#1E96C9]",
          "hover:shadow-[0_0_15px_#1E96C9,0_0_25px_#1E96C9,0_0_35px_#1E96C9]",
          "hover:bg-[#1E96C9]/10 hover:border-[#5227FF]",
          "transition-all duration-300"
        ]
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1",
        default: "h-10 px-4 py-2 gap-2",
        lg: "h-11 px-6 text-base gap-2",
        xl: "h-12 px-8 text-lg gap-3",
        icon: "h-9 w-9 p-0"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false
    }
  }
);

// Icon position variants
const iconVariants = cva("flex-shrink-0 transition-transform duration-200", {
  variants: {
    position: {
      left: "order-first group-hover:-translate-x-0.5",
      right: "order-last group-hover:translate-x-0.5"
    },
    size: {
      sm: "h-3 w-3",
      default: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  defaultVariants: {
    position: "left",
    size: "default"
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  loadingText?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      href,
      target,
      icon,
      iconPosition = 'left',
      loading = false,
      loadingText = 'Loading...',
      external = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'icon' ? 'default' : size;
    const shouldShowIcon = icon && !loading;
    const shouldShowLoadingSpinner = loading;

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className={cn(iconVariants({ size: iconSize, position: iconPosition }))}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          className="animate-spin origin-center"
        />
      </svg>
    );

    // Button content
    const content = (
      <>
        {shouldShowLoadingSpinner && <LoadingSpinner />}
        {shouldShowIcon && iconPosition === 'left' && (
          <span className={cn(iconVariants({ size: iconSize, position: 'left' }))}>
            {icon}
          </span>
        )}
        <span className="relative z-10 font-medium" style={{ fontFamily: 'var(--font-optft)' }}>
          {loading ? loadingText : children}
        </span>
        {shouldShowIcon && iconPosition === 'right' && (
          <span className={cn(iconVariants({ size: iconSize, position: 'right' }))}>
            {icon}
          </span>
        )}
      </>
    );

    // Render as link if href is provided
    if (href) {
      if (external || href.startsWith('http')) {
        return (
          <a
            href={href}
            target={target || '_blank'}
            rel={external ? 'noopener noreferrer' : undefined}
            className={cn(buttonVariants({ variant, size, fullWidth, className }))}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          target={target}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    // Render as button
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };

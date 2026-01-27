import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

// --- Core Data Interface ---
export interface ChainItem {
  id: string | number; // Unique ID
  name: string;
  icon: LucideIcon;
  /** A secondary string line for the item, e.g., a short description or a value. */
  details?: string;
  logo?: string; // Optional image URL
}

// --- Internal Animated Type ---
/** The specific type returned by getVisibleItems, extending the base ChainItem. */
type AnimatedChainItem = ChainItem & {
  distanceFromCenter: number;
  originalIndex: number;
};

// --- Component Props Interfaces ---

interface CarouselItemProps {
  chain: AnimatedChainItem;
  side: "left" | "right";
}

interface ChainCarouselProps {
  /** The list of items to display in the carousel. (REQUIRED) */
  items: ChainItem[];
  /** The speed of the auto-scroll rotation in milliseconds. */
  scrollSpeedMs?: number;
  /** The number of carousel items visible at once (must be an odd number). */
  visibleItemCount?: number;
  /** Custom class for the main container div. */
  className?: string;
  /** Function to call when a chain is selected from the search dropdown. */
  onChainSelect?: (chainId: ChainItem["id"], chainName: string) => void;
}

// --- Helper Components ---

/** A single item card for the carousel. */
const CarouselItemCard: React.FC<CarouselItemProps> = ({ chain, side }) => {
  const { distanceFromCenter, name, details, logo, icon: FallbackIcon } = chain;
  const distance = Math.abs(distanceFromCenter);
  // Visual effects based on distance from the center (0)
  const opacity = 1 - distance / 4;
  const scale = 1 - distance * 0.1;
  const yOffset = distanceFromCenter * 90;
  const xOffset = side === "left" ? -distance * 50 : distance * 50;

  const IconOrLogo = (
    <div
      className="rounded-full border border-muted-foreground/60 
        dark:border-muted-foreground/40 p-2 bg-foreground"
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="size-8 rounded-full object-cover"
        />
      ) : (
        <FallbackIcon className="size-8 text-background" />
      )}
    </div>
  );

  return (
    <motion.div
      className={`absolute flex items-center gap-4 text-background  px-6 py-3 
                ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
      animate={{
        opacity,
        scale,
        y: yOffset,
        x: xOffset,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {IconOrLogo}

      <div
        className={`flex flex-col mx-4 ${
          side === "left" ? "text-right" : "text-left"
        }`}
      >
        {/* FIX: Added whitespace-nowrap to prevent the name from wrapping. */}
        <span className="text-md lg:text-lg font-semibold text-foreground whitespace-nowrap">
          {name}
        </span>
        {/* Display generic details/description */}
        <span className="text-xs lg:text-sm text-gray-500">{details}</span>
      </div>
    </motion.div>
  );
};

// --- Main Component ---

const ChainCarousel: React.FC<ChainCarouselProps> = ({
  items,

  scrollSpeedMs = 1500,
  visibleItemCount = 9,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // References for Framer Motion scroll-based animation
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rightSectionRef, {
    margin: "-100px 0px -100px 0px",
  });
  const totalItems = items.length;

  // 1. Auto-scroll effect
  useEffect(() => {
    if (isPaused || totalItems === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, scrollSpeedMs);

    return () => clearInterval(interval);
  }, [isPaused, totalItems, scrollSpeedMs]);

  // 2. Scroll listener to pause carousel on page scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      setIsPaused(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsPaused(false);
      }, 500); // Resume auto-scroll after 500ms of no scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoized function for carousel items
  const getVisibleItems = useCallback((): AnimatedChainItem[] => {
    // Explicitly define return type
    const visibleItems: AnimatedChainItem[] = [];
    if (totalItems === 0) return [];

    // Ensure visibleItemCount is an odd number for a clear center item
    const itemsToShow =
      visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
    const half = Math.floor(itemsToShow / 2);

    for (let i = -half; i <= half; i++) {
      let index = currentIndex + i;
      if (index < 0) index += totalItems;
      if (index >= totalItems) index -= totalItems;

      visibleItems.push({
        ...items[index],
        originalIndex: index,
        distanceFromCenter: i,
      });
    }
    return visibleItems;
  }, [currentIndex, items, totalItems, visibleItemCount]);

  // The current item displayed in the center
  const currentItem = items[currentIndex];

  // --- JSX Render ---
  return (
    <div
      id="explore-section"
      className={` space-y-20
            ${className}`}
    >
      <div
        className="flex flex-col xl:flex-row 
            w-full mx-auto px-4 md:px-8 gap-12 justify-center items-center"
      >
        {/* Left Section - Chain Carousel (Hidden on smaller screens) */}
        <motion.div
          className="relative w-full max-w-md xl:max-w-2xl h-[450px] 
                flex items-center justify-center hidden xl:flex -left-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 0.8,
          }}
        >
          {/* Fading overlay to mask items */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 h-1/4 w-full bg-transparent"></div>
            <div className="absolute bottom-0 h-1/4 w-full bg-transparent "></div>
          </div>

          {getVisibleItems().map((chain) => (
            <CarouselItemCard
              key={`${chain.id}-${chain.distanceFromCenter}-left`}
              chain={chain} // Renamed prop to 'chain' for this component's context
              side="left"
            />
          ))}
        </motion.div>

        {/* Middle Section - Text and Search Input */}
        <div
          className="flex flex-col text-center 2xl:text-center xl:text-center
                 gap-4 max-w-md"
        >
          {/* Currently Selected Item Display */}
          {currentItem && (
            <div className="flex flex-col items-center justify-center gap-0 mt-4">
              <div className="p-2 bg-foreground rounded-full">
                {currentItem.logo ? (
                  <Image
                    src={currentItem.logo}
                    alt={`${currentItem.name} logo`}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                ) : (
                  <currentItem.icon className="size-8 text-background" />
                )}
              </div>
              <h3 className="text-xl xl:text-2xl font-bold text-foreground mt-2">
                {currentItem.name}
              </h3>
              <p className="text-sm xl:text-lg text-gray-400">
                {currentItem.details || "View Details"}
              </p>
            </div>
          )}

          {/* Search Bar */}
        </div>

        {/* Right Section - Chain Carousel (Hidden on smaller screens) */}
        <motion.div
          ref={rightSectionRef}
          className="relative w-full max-w-md xl:max-w-2xl h-[450px] 
                hidden xl:flex items-center justify-center -right-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 0.8,
          }}
        >
          {/* Fading overlay to mask items */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 h-1/4 w-full bg-transparent "></div>
            <div className="absolute bottom-0 h-1/4 w-full bg-transparent "></div>
          </div>

          {getVisibleItems().map((chain) => (
            <CarouselItemCard
              key={`${chain.id}-${chain.distanceFromCenter}-right`}
              chain={chain}
              side="right"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChainCarousel;

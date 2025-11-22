"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    subtitle: string;
    quote: string;
    date: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const manualRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [manualActiveIndex, setManualActiveIndex] = useState<number | null>(null);
  const [mode, setMode] = useState<"infinite" | "manual">("infinite");
  const [renderItems, setRenderItems] = useState<typeof items>([]);
  const [isMobile, setIsMobile] = useState(false);

  const isTouch = useRef(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      isTouch.current = true;
    }

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    setRenderItems([...items, ...items]);
  }, [items]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    setStart(true);
  }, [speed, direction]);

  useEffect(() => {
    if (mode === "infinite" && containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [mode, direction]);

  const pauseScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "paused";
  };

  const resumeScroll = () => {
    if (scrollerRef.current)
      scrollerRef.current.style.animationPlayState = "running";
  };

  const handleCardTap = (index: number) => {
    if (!isTouch.current) return;
    setActiveIndex(index);
    pauseScroll();
  };

  const handleManualTap = (index: number) => {
    if (!isTouch.current) return;
    setManualActiveIndex(index);
  };

  const scrollLeft = () => {
    manualRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    manualRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  useEffect(() => {
    const handleOutside = (e: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        if (mode === "manual") {
          setMode("infinite");
          resumeScroll();
        }
        setActiveIndex(null);
        setManualActiveIndex(null);
      }
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [mode]);

  useEffect(() => {
    let timeout: any = null;

    const handleLeave = () => {
      if (mode === "manual") {
        timeout = setTimeout(() => {
          setMode("infinite");
          resumeScroll();
          setActiveIndex(null);
          setManualActiveIndex(null);
        }, 5000);
      }
    };

    const handleEnter = () => {
      if (timeout) clearTimeout(timeout);
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mouseleave", handleLeave);
      wrapper.addEventListener("mouseenter", handleEnter);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mouseleave", handleLeave);
        wrapper.removeEventListener("mouseenter", handleEnter);
      }
      if (timeout) clearTimeout(timeout);
    };
  }, [mode]);

  const handleInsideClick = (e: any) => {
    e.stopPropagation();
    if (mode === "infinite") {
      setMode("manual");
      pauseScroll();
    }
  };

  return (
    <div
      ref={wrapperRef}
      onPointerDown={handleInsideClick}
      className="relative w-full flex flex-col items-center"
    >
      {mode === "manual" && (
        <div className="relative w-full mt-4 max-w-7xl">
          {!isMobile && (
            <button
              onClick={scrollLeft}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            ref={manualRef}
            className={cn(
              "flex gap-4 sm:gap-6 scroll-smooth",
              "overflow-x-auto touch-pan-x no-scrollbar",
              "md:overflow-x-hidden md:touch-none md:no-scrollbar"
            )}
          >
            {items.map((item, index) => (
              <HoverCard
                key={index}
                item={item}
                index={index}
                manual
                activeIndex={manualActiveIndex}
                onTouch={handleManualTap}
              />
            ))}
          </div>

          {!isMobile && (
            <button
              onClick={scrollRight}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-black/70 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {mode === "infinite" && (
        <div
          ref={containerRef}
          className={cn(
            "scroller relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mt-4",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-4 sm:gap-6 py-4 sm:py-6",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {renderItems.map((item, index) => (
              <HoverCard
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                onTouch={handleCardTap}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/**
 * HoverCard
 *
 * - Uses onPointerDown for tap
 * - Uses onTouchStart for touch devices to simulate hover in manual mode
 * - Uses onPointerEnter/Leave for mouse hover (non-touch)
 *
 * Visual hover is driven by the `isActive` boolean (passed as activeIndex prop)
 */
const HoverCard = ({ item, index, activeIndex, onTouch, manual }: any) => {
  const isActive = activeIndex === index;

  // local handlers to call parent's onTouch with index
  const handlePointerDown = (e: React.PointerEvent) => {
    // call parent's handler (tap)
    onTouch?.(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // on touchstart, set as active (simulate hover)
    onTouch?.(index);
  };

  const handlePointerEnter = (e: React.PointerEvent) => {
    // for mouse users, show hover
    // do not trigger this on touch-capable devices if you want to avoid accidental hover
    if ((e as any).pointerType === "mouse") {
      onTouch?.(index);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    // clear active on mouse leave
    // parent code clears activeIndex only on outside clicks — but for clean mouse UX we clear here
    if ((e as any).pointerType === "mouse") {
      onTouch?.(null);
    }
  };

  return (
    <li
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative w-[230px] sm:w-[260px] md:w-[300px]",
        "h-[420px] sm:h-[460px] md:h-[500px]",
        "rounded-2xl overflow-hidden bg-black dark:bg-white border border-gray-200 shadow-lg",
        // Hover ON for mobile + desktop (CSS hover remains for pointer devices that support it)
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isActive && "-translate-y-1 shadow-xl",
        manual && "shrink-0"
      )}
    >
      <div className="h-[45%] w-full relative overflow-hidden border">
        <div
          className={cn(
            "w-full h-full transition-transform duration-500 ease-out",
            // CSS hover
            "group-hover:scale-90",
            // active (touch / simulated hover)
            isActive && "scale-90"
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-out rounded-[0px]",
              // CSS hover
              "group-hover:translate-y-2.5 group-hover:rounded-[15px]",
              // active (touch / simulated hover)
              isActive && "translate-y-2.5 rounded-[15px]"
            )}
          />
        </div>
      </div>

      <div className="h-[55%] p-6 flex flex-col justify-between text-white dark:text-black">
        <div>
          <h2 className="text-sm sm:text-base font-bold mb-2 dark:text-gray-900">
            {item.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/70 dark:text-gray-600 leading-relaxed line-clamp-4">
            {item.quote}
          </p>
        </div>

        <span className="text-[10px] sm:text-xs text-white/60 dark:text-gray-500">
          {item.date}
        </span>
      </div>
    </li>
  );
};

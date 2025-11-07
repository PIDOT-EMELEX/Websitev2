"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  children,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items?: {
    quote?: string;
    name?: string;
    title?: string;
  }[];
  children?: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicate);
      });
      setScrollDirection();
      setScrollSpeed();
      setStart(true);
    }
  }

  function setScrollDirection() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }

  function setScrollSpeed() {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        // Added custom cursor here 👇
        "scroller relative z-20 max-w-7xl overflow-hidden cursor-[url('/cursor.svg'),auto] hover:cursor-[url('/cursor.svg'),auto] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* ✅ Support both `items` and `children` */}
        {children
          ? children.map((child, idx) => (
              <li
                key={idx}
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                {child}
              </li>
            ))
          : items?.map((item, idx) => (
              <li
                key={idx}
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] transition-all duration-300 hover:scale-[1.03]"
              >
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
      </ul>
    </div>
  );
};

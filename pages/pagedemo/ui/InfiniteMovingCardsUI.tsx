"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
  quote: string;
  name: string;
  title: string;
  logo: string;
  avatar: string;
  }[];

  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className,
      )}
    >
        {/* relative z-20 mt-6 flex flex-row items-center */}
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
        <li
        key={`${item.name}-${idx}`}
        className="w-[350px] max-w-full rounded-2xl border border-b-0 border-slate-600 px-8 py-6 md:w-[450px]"
        style={{
            background:
            "linear-gradient(180deg, rgba(81, 81, 81, 0.15) 0%, rgba(0, 0, 0, 0) 70%",
        }}
        >
        <blockquote>
            {/* dark mode edge fade */}
            <div
            aria-hidden="true"
            className="dark:block hidden pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            style={{
                backgroundImage: "linear-gradient(180deg,rgba(255, 0, 0, 0) 60%, #000000 100%,#000000 100%)",
            }}
            />

            {/* light mode edge fade */}
            <div
            aria-hidden="true"
            className="dark:hidden block pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            style={{
                backgroundImage: "linear-gradient(180deg,rgba(255, 255, 255, 0) 60%,#ffffff 100%, #ffffff 100%)",
            }}
            />

            {/* Quote */}
            <span className="text-sm leading-[1.6] text-white/70 font-normal relative z-20">
            “{item.quote}”
            </span>

            {/* Footer */}
            <div className="relative z-20 mt-6 flex flex-row items-center">
            <div className="mr-4 flex items-center">
                <div className="overflow-hidden rounded-full">
                <img
                    src={item.logo}
                    alt={item.name}
                    className="h-10 w-10"
                />
                </div>
                <div className="-ml-2.5 overflow-hidden rounded-full border-4 border-transparent">
                <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10"
                />
                </div>
            </div>

            <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] text-white/80 font-normal">
                {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-white/70 font-normal">
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

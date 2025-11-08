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
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="group relative w-[320px] h-[460px] flex flex-col rounded-2xl overflow-hidden bg-black dark:bg-white
                       border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* 🖼️ Top Section with Image + Text scaling together */}
            <div className="h-[45%] w-full relative overflow-hidden transition-all duration-300 border">
              {/* Wrap image + overlay + text in a scaling container */}
              <div className="w-full h-full relative transform transition-transform duration-500 ease-out group-hover:scale-90">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[0px] group-hover:translate-y-2.5 group-hover:rounded-[15px] transition-all duration-500 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[0px] group-hover:translate-y-2.5 group-hover:rounded-[15px] transition-all duration-500 ease-out"></div>

                {/* Text on Image */}
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-200">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* 📝 Bottom Section */}
            <div className="h-[55%] p-6 flex flex-col justify-between text-white dark:text-black">
              <div>
                <h2 className="text-base font-bold mb-2 text-white/90 dark:text-gray-900">
                  {item.title} Examples
                </h2>
                <p className="text-sm text-white/70 dark:text-gray-600 leading-relaxed line-clamp-4">
                  {item.quote}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-white/60 dark:text-gray-500">{item.date}</span>
                <button className="text-xs font-semibold px-4 py-2 rounded-full bg-white dark:bg-black dark:text-white text-black scale-100 hover:scale-110 transition">
                  Read More
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

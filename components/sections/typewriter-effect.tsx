"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Book" },
    { text: "your" },
    { text: "discovery" },
    { text: "session" },
    {
      text: "Today!",
      className: "text-[#f69507] dark:text-[#f69507]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-2">
        Ready to Rethink Hiring, Talent Training, and Workforce Readiness?
      </p>

      <TypewriterEffectSmooth words={words} />

      {/* ✅ Buttons now side-by-side on mobile, unchanged on desktop */}
      <div className="flex flex-row md:flex-row space-x-3 md:space-x-4 mt-4">
        <button className="w-32 sm:w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Book a Call
        </button>
        <button className="w-32 sm:w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Explore More
        </button>
      </div>
    </div>
  );
}

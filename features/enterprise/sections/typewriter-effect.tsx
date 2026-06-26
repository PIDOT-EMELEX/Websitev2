"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BookCallLink } from "@/components/ui/book-call-link";

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
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance text-center">
        Ready to Rethink Hiring, Talent Training, and Workforce Readiness?
      </p>

      <TypewriterEffectSmooth words={words} />

      {/* ✅ Buttons now side-by-side on mobile, unchanged on desktop */}
      <div className="flex flex-row md:flex-row space-x-3 md:space-x-4 mt-4">
        <BookCallLink />
        <button className="inline-flex items-center justify-center rounded-2xl bg-white text-black border border-black px-6 py-3 text-sm font-medium transition cursor-pointer text-center">
          Explore More
        </button>
      </div>
    </div>
  );
}

"use client";

import HeroUI from "../ui/HeroUI";
import HeroMedia from "../HeroMedia";

export default function HeroSection() {
  return (
    <section className="hero-v2 flex flex-col items-center gap-8 lg:gap-16">
      {/* TOP CONTENT */}
      <div className="relative w-full">
        <div className="flex h-full items-start justify-center pt-20 lg:pt-20">
          <HeroUI />
        </div>
      </div>

      {/* DESKTOP MEDIA */}
      <div className="relative hidden w-full items-start justify-center px-12 md:flex">
        <HeroMedia />
      </div>

      {/* MOBILE MEDIA */}
      <div className="relative flex w-full items-center justify-center py-2 md:hidden">
        <video
          className="aspect-[1] w-[300px] object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/pagedemo1/roy-hevc-safari.mp4" type="video/mp4" />
          <source src="/pagedemo1/roy-vp9-chrome.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}

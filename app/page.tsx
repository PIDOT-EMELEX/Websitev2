"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { GlobeDemo } from "@/components/sections/globe";
import { StickyBanner } from "@/components/ui/sticky-banner";

import { InfiniteMovingCardsDemo } from "@/components/sections/infinite-moving-cards";
import TrustedBySection from "@/components/sections/TrustedBySection";
import EverythingInYourControlSection from "@/components/sections/EverythingInYourControlSection";
import GoBeyondEditingSection from "@/components/sections/GoBeyondEditingSection";
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import PiDotGlow from "@/components/sections/pi-dot-glow";


export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  // Always load at top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-black">
      {/* Sticky Banner */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring.{" "}
          <a href="/contact-us" className="underline transition duration-200">
            Contact us
          </a>
        </p>
      </StickyBanner>

      {/* Navbar */}
      <motion.div
        className="fixed top-10 sm:top-0 z-50 w-full flex justify-center"
        animate={{ y: isBannerOpen ? 56 : 0 }}
      >
        <NavbarDemo />
      </motion.div>

      {/* PAGE CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isBannerOpen
            ? "pt-28 sm:pt-20 md:pt-28 lg:pt-4"
            : "pt-12 sm:pt-16 md:pt-12 lg:pt-0"
        }`}
      >
        {/* ================= HERO / GLOBE ================= */}
        <section className="relative max-w-full mx-auto">
          {/* Mobile scroll shield */}
          <div
            className="absolute inset-0 z-20 pointer-events-auto md:pointer-events-none"
            onTouchMove={(e) => e.stopPropagation()}
          />

          <div className="relative z-10">
            <GlobeDemo />
          </div>
        </section>

        {/* ================= CARDS ================= */}
        <section>
          <InfiniteMovingCardsDemo />
        </section>

        {/* ================= TRUST ================= */}
        <section>
          <TrustedBySection />
        </section>

        {/* ================= CONTROL ================= */}
        <section>
          <EverythingInYourControlSection />
        </section>

        {/* ================= EDITING ================= */}
        <section>
          <GoBeyondEditingSection />
        </section>

        {/* ================= TYPEWRITER ================= */}
        <section>
          <TypewriterEffectSmoothDemo />
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="mt-36">
          <TestimonialCarousel />
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <PiDotGlow />
        </div>

        <div className="relative z-10 mt-75">
          <FooterDemo />
        </div>
      </section>
    </main>
  );
}

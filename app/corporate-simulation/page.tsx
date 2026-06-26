"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import PiDotGlow from "@/components/sections/pi-dot-glow";
import  HeroSection  from "@/features/institutions/corporate-simulation/sections/HeroSection";
import   TrustedCompanies   from "@/features/institutions/corporate-simulation/sections/TrustedBySection";
import DeveloperExperienceSection from "@/features/institutions/corporate-simulation/sections/DeveloperExperienceSection";
import IntegrateMorningSection from "@/features/institutions/corporate-simulation/sections/IntegrateMorningSection";
import EditorSection from "@/features/institutions/corporate-simulation/sections/EditorSection";
import EmailWithReactSection from "@/features/institutions/corporate-simulation/sections/EmailWithReactSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";


export default function CorporateSimulation() {
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
        <HeroSection />
        <TrustedCompanies />
        <DeveloperExperienceSection />
        <IntegrateMorningSection />
        <EditorSection />
        <EmailWithReactSection />
        
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


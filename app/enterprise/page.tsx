"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import PiDotGlow from "@/components/sections/pi-dot-glow";
import HeroSection from "../../features/enterprise/sections/HeroSection";
import FeatureSection from "../../features/enterprise/sections/FeatureSection";
import TrustedCompanies from "../../features/enterprise/sections/TrustedBySection";
import DeveloperExperienceSection from "../../features/enterprise/sections/DeveloperExperienceSection";
import EverythingInYourControlSection from "../../features/enterprise/sections/EverythingInYourControlSection";
import GoBeyondEditingSection from "../../features/enterprise/sections/GoBeyondEditingSection";
import { TypewriterEffectSmoothDemo } from "../../features/enterprise/sections/typewriter-effect";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";


export default function Enterprise() {
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
         <section className="w-full min-h-screen bg-black">
              <section
                className="relative min-h-screen flex items-center justify-center text-center"
                style={{
                  backgroundImage: "url('/pagedemo1/hero-bg4.png')",
                  // backgroundSize: "cover",
                  backgroundSize: "contain",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
              >

              {/* DARKEN OVERLAY */}
              {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" /> */}

              <HeroSection />
              </section>
              <TrustedCompanies />
              <DeveloperExperienceSection />
              <EverythingInYourControlSection />
              <GoBeyondEditingSection />
              {/* ================= TYPEWRITER ================= */}
              <section>
                <TypewriterEffectSmoothDemo />
              </section>
              
              {/* ================= TESTIMONIALS ================= */}
              <section className="mt-36">
                <TestimonialCarousel />
              </section>
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


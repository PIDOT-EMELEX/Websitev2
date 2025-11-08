"use client"
import { NavbarDemo } from "@/components/sections/navbar-menu"
import { FooterDemo } from "@/components/sections/footer";
import { GlobeDemo } from "@/components/sections/globe";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlightDemo } from "@/components/sections/hero-highlight";
import { GlowingEffectDemo } from "@/components/sections/glowing-effect"
import { LayoutGridDemo } from "@/components/sections/layout-grid"
import { TabsDemo } from "@/components/sections/tabs"
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect"
import { InfiniteMovingCardsDemo } from "@/components/sections/infinite-moving-cards"



export default function Home() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-blue-500 to-blue-600"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>

      <motion.div
        className="fixed top-0 left-20 right-20 z-50"
        animate={{
          y: isBannerOpen ? 56 : 0,
        }}
      >
        <NavbarDemo />
      </motion.div>

      {/* Page Content */}
      <div className="flex-1 pt-24 pb-24"> {/* padding to avoid overlap */}
        <section className="max-w-6xl mx-auto px-6 py-10 text-center">
          <GlobeDemo />
        </section>
        <div>
          <InfiniteMovingCardsDemo />
        </div>
        <div className="mt-10">
            <HeroHighlightDemo />
        </div>
        <div className="p-30">
            <GlowingEffectDemo />
        </div>
        <div>
            <HeroHighlightDemo />
        </div>
        <div>
            <LayoutGridDemo />
        </div>
        <div>
            <TabsDemo />
        </div>
        <div className="mt-50">
            <TypewriterEffectSmoothDemo />
        </div>
      </div>

      {/* Footer at bottom */}
      <div className="mt-auto">
        <FooterDemo />
      </div>
    </main>
  );
}

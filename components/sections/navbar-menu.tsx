"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-5 left-0 right-0 z-50 flex justify-center",
        className
      )}
    >
      {/* ✅ Full-width black rounded nav (now wider) */}
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative w-[98%] mx-auto flex items-center justify-between rounded-full border border-white/20 bg-black shadow-lg px-10 py-5"
      >
        {/* 🖤 Left Section - Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={"assets/PiDot/Logomark/SVG/White.svg"}
            width={40}
            height={40}
            alt="Logo Mark"
          />
          <img
            src={"assets/PiDot/Wordmark/SVG/White.svg"}
            width={100}
            height={50}
            alt="Word Mark"
          />
        </div>

        {/* ⚡ Center Section - Menu Items */}
        <div className="flex justify-center flex-1">
          <div className="flex space-x-5">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production-ready Tailwind components for your next project."
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to RFPs 10x faster using AI."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Enterprise">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">SEO Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/mission">Mission</HoveredLink>
                <HoveredLink href="/vision">Vision</HoveredLink>
                <HoveredLink href="/careers">Careers</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Career">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/internships">Internships</HoveredLink>
                <HoveredLink href="/jobs">Job Openings</HoveredLink>
                <HoveredLink href="/apply">Apply Now</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </nav>
    </div>
  );
}

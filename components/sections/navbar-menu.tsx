"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuItem, HoveredLink, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="w-full">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        className
      )}
    >
      {/* ⭐ Full Width Navbar */}
      <nav
        onMouseLeave={() => setActive(null)}
        className="
          w-full flex items-center justify-between 
          border border-black/10 dark:border-white/10
          bg-white/75 dark:bg-black/60
          backdrop-blur-sm
          bg-gradient-to-b from-white/75 to-white/60 dark:from-black/60 dark:to-black/50
          shadow-md px-10 py-5
        "


      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={"assets/PiDot/Logomark/SVG/Regular.svg"}
            width={40}
            height={40}
            alt="Logo Mark"
            className="invert dark:invert-0"
          />
          <img
            src={"assets/PiDot/Wordmark/SVG/Pi_Dot_Mustard__3_-removebg-preview.svg"}
            width={100}
            height={50}
            alt="Word Mark"
            className="invert dark:invert-0"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex space-x-5">
            <MenuItem setActive={setActive} active={active} item="Institutions">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Corporate Simulation"
                    href="https://pidot.in"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Helps institutions to make their students corporate-ready"
                  />
                  <ProductItem
                    title="Fermion AI Labs"
                    href="https://pidot.in"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Research-first initiative to train students on AI, LLMs & global engineering standards"
                  />
                  <ProductItem
                    title="Global Education for Schools"
                    href="https://pidot.in"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Help Schools deliver globally connected curriculam through experiential learning programs"
                  />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Enterprise">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Hiring Simulation"
                    href="https://pidot.in"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Helps institutions to make their students corporate-ready"
                  />
                  <ProductItem
                    title="Training Simulation"
                    href="https://pidot.in"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Research-first initiative to train students on AI, LLMs & global engineering standards"
                  />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">About PI DOT</HoveredLink>
                <HoveredLink href="/interface-design">Our Team</HoveredLink>
                <HoveredLink href="/seo">Our Services</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Career">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Life at PI DOT</HoveredLink>
                <HoveredLink href="/interface-design">Join our Team</HoveredLink>
                <HoveredLink href="/seo">Contact</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Our Blog</HoveredLink>
                <HoveredLink href="/web-dev">Press Note</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[85px] w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 
                       rounded-none shadow-lg p-5 flex flex-col md:hidden"
          >
            <MobileDropdown
              title="Products"
              isOpen={openMenu === "Institutions"}
              toggle={() => toggleSubMenu("Institutions")}
              items={[
                      { label: "Corporate Simulation", href: "/team" },
                      { label: "Fermion AI Labs", href: "/mission" },
                      { label: "Global Education for Schools", href: "/vision" },
                    ]}
            />

            <MobileDropdown
              title="Enterprise"
              isOpen={openMenu === "Enterprise"}
              toggle={() => toggleSubMenu("Enterprise")}
              items={[
                      { label: "Hiring Simulation", href: "/team" },
                      { label: "Training Simulation", href: "/mission" },
                    ]}
            />

            <MobileDropdown
              title="About"
              isOpen={openMenu === "About"}
              toggle={() => toggleSubMenu("About")}
              items={[
                      { label: "Our Team", href: "/team" },
                      { label: "Mission", href: "/mission" },
                      { label: "Vision", href: "/vision" },
                    ]}
            />

            <MobileDropdown
              title="Career"
              isOpen={openMenu === "Career"}
              toggle={() => toggleSubMenu("Career")}
              items={[
                      { label: "Life at PI DOT", href: "/team" },
                      { label: "Careers", href: "/careers" },
                      { label: "Contact us", href: "/careers" },
                    ]}
            />

            <MobileDropdown
              title="Blog"
              isOpen={openMenu === "Blog"}
              toggle={() => toggleSubMenu("Blog")}
              items={[
                      { label: "Our Blog", href: "/team" },
                      { label: "Press Note", href: "/careers" },
                    ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  title,
  isOpen,
  toggle,
  items,
}: {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="border-b border-black/10 dark:border-white/10 py-2">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-lg text-black dark:text-white"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 mt-2 flex flex-col space-y-2"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuItem, HoveredLink, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { BookCallLink } from "../ui/book-call-link";

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
          border border-white/10
          bbg-black/60
          backdrop-blur-sm
          bg-gradient-to-b from-black/60 to-black/50
          shadow-md px-10 py-5
        "


      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src={"/assets/pi-dot-logomark.svg"}
            width={40}
            height={40}
            alt="Logo Mark"
            // className="invert-0"
          />
          <img
            src={"/assets/pi-dot-wordmark.svg"}
            width={100}
            height={50}
            alt="Word Mark"
            // className="invert-0"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:grid grid-cols-3 items-center flex-1">

          {/* LEFT SPACE */}
          <div />

          {/* CENTER MENU */}
          <div className="flex justify-center gap-5">

            <MenuItem
              setActive={setActive}
              active={active}
              item="Institutions"
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Corporate Simulation"
                  href="corporate-simulation"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Helps institutions to make their students corporate-ready"
                />

                <ProductItem
                  title="Fermion AI Labs"
                  href="https://pidot.in"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Research-first initiative to train students on AI, LLMs & global engineering standards"
                />
              </div>
            </MenuItem>

            <HoveredLink href="enterprise" className="hover:opacity-90">
              Enterprise
            </HoveredLink>

            <HoveredLink href="about" className="hover:opacity-90">
              About
            </HoveredLink>

            <HoveredLink href="career" className="hover:opacity-90">
              Career
            </HoveredLink>

            <HoveredLink href="blog" className="hover:opacity-90">
              Blog
            </HoveredLink>

          </div>

          <div className="flex justify-end">
            <BookCallLink />
          </div>

        </div>    

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
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
            className="absolute top-[85px] w-full bg-black border border-white/10 
                       rounded-none shadow-lg p-5 flex flex-col md:hidden"
          >
            <MobileDropdown
              title="institutions"
              isOpen={openMenu === "Institutions"}
              toggle={() => toggleSubMenu("Institutions")}
              items={[
                      { label: "Corporate Simulation", href: "/corporate-simulation" },
                      { label: "Fermion AI Labs", href: "/fermion-ai-labs" },
                    ]}
            />

            <MobileDropdown
              title="Enterprise"
              href="/enterprise"
              isOpen={openMenu === "Enterprise"}
              toggle={() => toggleSubMenu("Enterprise")}
              items={[]}
            />

            <MobileDropdown
              title="About"
              href="/about"
              isOpen={openMenu === "About"}
              toggle={() => toggleSubMenu("About")}
              items={[]}
            />

            <MobileDropdown
              title="Career"
              href="/career"
              isOpen={openMenu === "Career"}
              toggle={() => toggleSubMenu("Career")}
              items={[]}
            />

            <MobileDropdown
              title="Blog"
              href="/blog"
              isOpen={openMenu === "Blog"}
              toggle={() => toggleSubMenu("Blog")}
              items={[]}
            />

            <div className="border-b border-white/10 py-3">
              <BookCallLink mobileMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  title,
  href,
  isOpen,
  toggle,
  items,
}: {
  title: string;
  href?: string;
  isOpen: boolean;
  toggle: () => void;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="border-b border-white/10 py-2">
      <button
        
        onClick={toggle}
        className="w-full flex justify-between items-center text-lg text-white"
      >
        
        <Link href={href || "#"}>
          {title}
        </Link>
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
                className="text-sm text-neutral-300 hover:text-white"
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

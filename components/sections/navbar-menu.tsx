"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuItem, HoveredLink, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";

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
    <Modal>
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
            <ModalTrigger
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/10 px-6 py-3 text-sm font-medium transition cursor-pointer text-center group/modal-btn relative overflow-hidden"
            >
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Book a Call
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20 space-x-2">
                <img
                  src={"/assets/pi-dot-logomark.svg"}
                  width={20}
                  height={20}
                  alt="Pi Dot Logo Mark"
                />
                <img
                  src={"/assets/pi-dot-wordmark.svg"}
                  width={60}
                  height={30}
                  alt="Pi Dot Word Mark"
                />
              </div>
            </ModalTrigger>
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
              <ModalTrigger className="w-full flex items-center text-lg text-white bg-transparent p-0 border-0 outline-none text-left font-medium hover:text-[#f69507] transition-colors cursor-pointer group/modal-btn relative overflow-hidden">
                <span className="group-hover/modal-btn:translate-x-40 transition duration-500">
                  Book a Call
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-start absolute inset-0 transition duration-500 text-[#f69507] z-20">
                  📞 Book a Call
                </div>
              </ModalTrigger>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    <ModalBody className="dark:bg-neutral-950 dark:border-white/10 max-w-lg md:max-w-xl text-white">
      <ModalContent className="overflow-y-auto">
        <h3 className="text-2xl font-bold text-white mb-6">
          Book a Call
        </h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Booking request submitted successfully!"); }}>
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Contact (Email Preferred)</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Profession / Representing Whom</label>
            <input
              type="text"
              placeholder="College, Startup, Founder..."
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Reason For Appointment</label>
            <textarea
              rows={4}
              placeholder="Tell us about your requirements..."
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#f69507] hover:bg-[#ffad33] py-3 text-black font-semibold transition-colors duration-200 cursor-pointer"
          >
            <span>Submit Request</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </ModalContent>
    </ModalBody>
    </Modal>
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

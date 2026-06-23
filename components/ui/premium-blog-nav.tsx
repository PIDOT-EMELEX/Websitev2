"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function PremiumBlogNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-100 bg-white/80 backdrop-blur-xl"
          : "border-b border-gray-100/0 bg-white/0"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-semibold text-black">
          Pi Dot
        </Link>

        {/* Center Links */}
        <div className="hidden gap-8 md:flex">
          <Link
            href="/blog"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 transition-colors hover:text-black"
          >
            About
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-900 active:translate-y-0.5"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}

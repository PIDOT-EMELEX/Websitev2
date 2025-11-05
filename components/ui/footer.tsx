"use client";
import React from "react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
} as const;

export const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <motion.li
          key={link.label}
          whileHover={{ scale: 1.05 }}
          transition={spring}
        >
          <a
            href={link.href}
            className="hover:text-white text-gray-400 transition-colors duration-200"
          >
            {link.label}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

export const FooterIcon = ({
  Icon,
  href,
}: {
  Icon: React.ElementType;
  href: string;
}) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, y: -2 }}
    transition={spring}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0B0E14] text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:flex md:items-start md:justify-between">
        {/* Brand Section */}
        <motion.div
          className="mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400"
              whileHover={{ rotate: 20 }}
              transition={spring}
            />
            <span className="text-xl font-semibold text-white">Pi Dot</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            © 2025 Pi Dot™. All Rights Reserved.
          </p>
        </motion.div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <FooterSection
            title="RESOURCES"
            links={[
              { label: "Next.js Docs", href: "https://nextjs.org/docs" },
              { label: "Tailwind CSS", href: "https://tailwindcss.com" },
            ]}
          />
          <FooterSection
            title="FOLLOW US"
            links={[
              { label: "GitHub", href: "#" },
              { label: "Discord", href: "#" },
            ]}
          />
          <FooterSection
            title="LEGAL"
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
          <p className="text-xs text-gray-500">
            Built with <span className="text-blue-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

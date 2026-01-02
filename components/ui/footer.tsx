"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin, Github } from "lucide-react";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
} as const;

/* ---------------- Footer Section ---------------- */

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
            className="text-gray-400 transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

/* ---------------- Footer Icon ---------------- */

type FooterIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export const FooterIcon: React.FC<FooterIconProps> = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    transition={spring}
    className="text-gray-400 transition-colors duration-200 hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

/* ---------------- Footer ---------------- */

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0E14] text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12">

        {/* Logo + Links Wrapper */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* Logo */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/assets/PiDot/Logomark/SVG/White.svg"
                alt="Pi Dot Logomark"
                width={32}
                height={32}
              />
              <Image
                src="/assets/PiDot/Wordmark/SVG/White.svg"
                alt="Pi Dot Wordmark"
                width={100}
                height={32}
              />
            </div>
          </motion.div>

          {/* Links → start AFTER logo */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-4">

            <FooterSection
              title="PI DOT"
              links={[
                { label: "About Us", href: "" },
                { label: "Leadership", href: "" },
                { label: "Our Story", href: "" },
                { label: "Careers", href: "" },
                { label: "Contact", href: "" },
              ]}
            />

            <FooterSection
              title="ENTERPRISE"
              links={[
                { label: "PI DOT for Enterprise", href: "" },
                { label: "Enterprise Guides", href: "" },
                { label: "Security", href: "" },
                { label: "ROI Calculator", href: "" },
                { label: "Book a Call", href: "" },
              ]}
            />

            <FooterSection
              title="RESOURCES"
              links={[
                { label: "Manifesto", href: "" },
                { label: "Case Studies", href: "" },
                { label: "Press & Media", href: "" },
                { label: "Research Papers", href: "" },
                { label: "Community & Events", href: "" },
              ]}
            />

            <FooterSection
              title="LEGAL"
              links={[
                { label: "Privacy Policy", href: "" },
                { label: "Terms of Service", href: "" },
                { label: "Data Processing Agreement", href: "" },
                { label: "Cookies & Compliance", href: "" },
              ]}
            />

            <FooterSection
              title="SUPPORT"
              links={[
                { label: "Help Center", href: "" },
                { label: "Report an Issue", href: "" },
                { label: "Contact Support", href: "" },
              ]}
            />

            <FooterSection
              title="INSTITUTIONS"
              links={[
                { label: "Corporate Simulation", href: "" },
                { label: "Fermion AI Labs", href: "" },
                { label: "Global Education for Schools", href: "" },
              ]}
            />

            

            <FooterSection
              title="BLOG"
              links={[
                { label: "Our Blog", href: "" },
                { label: "Case Studies", href: "" },
                { label: "Press & Media", href: "" },
                { label: "Research Papers", href: "" },
                { label: "Community & Events", href: "" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © 2025 EMELEX Business Solutions LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <FooterIcon Icon={Instagram} href="https://instagram.com/" />
            <FooterIcon Icon={Linkedin} href="https://linkedin.com/" />
            <FooterIcon Icon={Github} href="https://github.com/" />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

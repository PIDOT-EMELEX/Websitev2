"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import CalEmbed from "./cal-embed";
import WorldMapIndia from "./world-map-india";

const CONTACT_ITEMS = [
  { icon: Mail, label: "info@pidot.in", href: "mailto:info@pidot.in" },
  { icon: Phone, label: "+91 9154776110", href: "tel:+919154776110" },
  { icon: MapPin, label: "Hyderabad, India", href: null },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f69507]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-3 sm:px-4 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Icon */}
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f69507]/30 bg-[#f69507]/10">
              <Mail size={24} className="text-[#f69507]" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl mb-6">
              Contact us
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10">
              We are always looking for ways to improve our products and
              services. Reach out and let us know how we can help you.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-12">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-3 text-zinc-400 hover:text-[#f69507] transition-colors duration-200 group"
                  >
                    <Icon size={16} className="shrink-0 text-zinc-600 group-hover:text-[#f69507] transition-colors" />
                    <span className="text-sm">{label}</span>
                  </a>
                ) : (
                  <div key={label} className="inline-flex items-center gap-3 text-zinc-500">
                    <Icon size={16} className="shrink-0 text-zinc-600" />
                    <span className="text-sm">{label}</span>
                  </div>
                )
              )}
            </div>

            {/* World Map with India highlighted */}
            <div className="relative w-full overflow-hidden" style={{ height: "300px" }}>
              <WorldMapIndia />
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Cal.com Embed ── */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Cal.com Embed Container without double borders */}
            <div className="w-full overflow-hidden rounded-2xl">
              <CalEmbed />
            </div>

            <p className="mt-4 text-center text-xs text-zinc-600">
              No spam. Cancel or reschedule anytime directly from Cal.com.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

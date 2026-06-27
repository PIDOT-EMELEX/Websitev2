"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import CalEmbed from "./cal-embed";

const CONTACT_ITEMS = [
  { icon: Mail, label: "info@pidot.in", href: "mailto:info@pidot.in" },
  { icon: Phone, label: "+91 9154776110", href: "tel:+919154776110" },
  { icon: MapPin, label: "Hyderabad, India", href: null },
];

/** L-shaped corner bracket */
function CornerBracket({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const size = "w-5 h-5";
  const cls = [
    position === "tl" && "top-0 left-0 border-l border-t",
    position === "tr" && "top-0 right-0 border-r border-t",
    position === "bl" && "bottom-0 left-0 border-l border-b",
    position === "br" && "bottom-0 right-0 border-r border-b",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={`absolute ${size} ${cls} border-[#f69507]/60 pointer-events-none`}
    />
  );
}

export default function ContactHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#f69507]/4 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-10 pb-10">
        <div className="flex flex-col md:flex-row gap-8 items-start" style={{ minHeight: "520px" }}>

          {/* ── LEFT COLUMN ── */}
          <motion.div
            className="flex flex-col gap-4 w-full md:w-[30%] md:shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top info card */}
            <div className="relative p-6 flex flex-col gap-3">
              <CornerBracket position="tl" />
              <CornerBracket position="tr" />
              <CornerBracket position="bl" />
              <CornerBracket position="br" />

              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#f69507]/30 bg-[#f69507]/10">
                <Mail size={16} className="text-[#f69507]" />
              </div>

              <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
                Contact us
              </h1>

              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                We&apos;re always looking for ways to improve our products and
                services. Reach out and let us know how we can help.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                {CONTACT_ITEMS.map(({ icon: Icon, label, href }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-3 text-zinc-400 hover:text-[#f69507] transition-colors duration-200 group"
                    >
                      <Icon size={14} className="shrink-0 text-zinc-600 group-hover:text-[#f69507] transition-colors" />
                      <span className="text-sm">{label}</span>
                    </a>
                  ) : (
                    <div key={label} className="inline-flex items-center gap-3 text-zinc-500">
                      <Icon size={14} className="shrink-0 text-zinc-600" />
                      <span className="text-sm">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Cal.com ── */}
          <motion.div
            className="relative w-full md:flex-1 flex flex-col overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 160px)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <CornerBracket position="tl" />
            <CornerBracket position="tr" />
            <CornerBracket position="bl" />
            <CornerBracket position="br" />

            <div className="flex-1">
              <CalEmbed />
            </div>

            <p className="mt-2 text-center text-xs text-zinc-700">
              No spam. Cancel or reschedule anytime directly from Cal.com.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

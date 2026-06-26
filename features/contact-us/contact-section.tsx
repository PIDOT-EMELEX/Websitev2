"use client";

import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { CAL_BOOKING_URL } from "@/components/ui/book-call-link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@pidot.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@pidot.in",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    iconColor: "text-[#f69507]",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Fri, 9 AM – 7 PM IST",
    href: "tel:+919876543210",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Hyderabad, India",
    sub: "T-Hub, IIIT-Hyderabad Campus",
    href: "https://maps.google.com/?q=T-Hub+Hyderabad",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "9 AM – 7 PM IST",
    sub: "Monday to Saturday",
    href: null,
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
];

const SOCIAL_LINKS = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/pidot",
    color: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/pidot.in",
    color: "hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-400",
  },
  {
    Icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/pidot_in",
    color: "hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-400",
  },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#f69507]/8 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f69507]/30 bg-[#f69507]/10 px-4 py-1.5 text-sm font-medium text-[#f69507]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f69507]" />
            Get In Touch
          </motion.span>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
          >
            Let&apos;s Build
            <br />
            <span className="bg-gradient-to-r from-[#f69507] to-[#ffcc66] bg-clip-text text-transparent">
              Something Great.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Whether you&apos;re a college, startup, founder, or enterprise
            partner — we&apos;d love to hear about your goals and explore how Pi
            Dot can help.
          </motion.p>
        </motion.div>

        {/* ── Contact Cards Grid ── */}
        <motion.div
          className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTACT_DETAILS.map(({ icon: Icon, label, value, sub, href, color, border, iconColor }, i) => {
            const card = (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                className={`group relative rounded-2xl border ${border} bg-gradient-to-br ${color} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(246,149,7,0.1)] ${href ? "cursor-pointer" : ""}`}
              >
                {/* Icon */}
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800`}>
                  <Icon size={20} className={iconColor} />
                </div>

                {/* Label */}
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {label}
                </p>

                {/* Value */}
                <p className="text-base font-semibold text-white">{value}</p>

                {/* Sub */}
                <p className="mt-1 text-sm text-zinc-500">{sub}</p>

                {/* Hover arrow */}
                {href && (
                  <div className="mt-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowRight size={14} className="text-zinc-500" />
                  </div>
                )}
              </motion.div>
            );

            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={label}>{card}</div>
            );
          })}
        </motion.div>

        {/* ── Bottom Row: Address + Social + CTA ── */}
        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Office Address */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="lg:col-span-1 rounded-2xl border border-zinc-800/60 bg-zinc-950/50 p-8 backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f69507]/10 border border-[#f69507]/20">
              <MapPin size={18} className="text-[#f69507]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-white">Our Office</h3>
            <address className="not-italic space-y-1 text-sm leading-6 text-zinc-400">
              <p className="font-medium text-zinc-300">EMELEX Business Solutions LLP</p>
              <p>T-Hub, IIIT-Hyderabad Campus</p>
              <p>Gachibowli, Hyderabad – 500032</p>
              <p>Telangana, India</p>
            </address>
            <a
              href="https://maps.google.com/?q=T-Hub+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#f69507] hover:text-[#ffcc66] transition-colors"
            >
              Open in Maps <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-950/50 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">Follow Us</h3>
            <div className="space-y-3">
              {SOCIAL_LINKS.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-400 transition-all duration-200 ${color}`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  <ArrowRight size={12} className="ml-auto opacity-50" />
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-zinc-800/60 pt-6">
              {[["50+", "Colleges"], ["10K+", "Students"], ["100+", "Workshops"]].map(([num, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-xl font-bold text-[#f69507]">{num}</p>
                  <p className="text-xs text-zinc-500">{lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Book a Call CTA */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f69507] to-[#e18a00] p-8 shadow-[0_0_80px_rgba(246,149,7,0.2)]"
          >
            {/* Noise texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-black/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/60" />
                Available Now
              </span>

              <h3 className="mt-5 text-2xl font-bold text-black">
                Book a Call with Our Team
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Pick a convenient time, share your goals, and let&apos;s explore
                how Pi Dot can accelerate your institution&apos;s outcomes.
              </p>

              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-zinc-900 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-[0.98]"
              >
                Schedule a Meeting
                <ArrowRight size={15} />
              </a>

              <p className="mt-4 text-center text-xs text-black/50">
                No spam. Cancel anytime.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

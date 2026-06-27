"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Code2, MapPin, Lock, Edit3, Monitor, Terminal, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

function FlatWorldMap() {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/world.svg")
      .then((r) => r.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        // Preserve viewBox but make it scale to fill container
        const vb = svgEl.getAttribute("viewBox") || "0 0 2000 1001";
        svgEl.setAttribute("viewBox", vb);
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
        svgEl.setAttribute("style", "width:100%;height:100%;display:block;");
        svgEl.style.background = "transparent";

        svgEl.querySelectorAll("path").forEach((p) => {
          p.setAttribute("fill", "#27272a");
          p.setAttribute("stroke", "#52525b");
          p.setAttribute("stroke-width", "0.5");
        });
        setSvgContent(new XMLSerializer().serializeToString(svgEl));
      })
      .catch(console.error);
  }, []);

  if (!svgContent) return null;

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

const FLOAT_ICONS: { Icon: LucideIcon; top: string; left: string; delay: number }[] = [
  { Icon: Briefcase, top: "18%", left: "10%", delay: 0 },
  { Icon: Code2,     top: "30%", left: "27%", delay: 1.2 },
  { Icon: Monitor,   top: "22%", left: "44%", delay: 2 },
  { Icon: Lock,      top: "38%", left: "50%", delay: 0.6 },
  { Icon: MapPin,    top: "28%", left: "57%", delay: 1.5 },
  { Icon: Edit3,     top: "18%", left: "66%", delay: 0.9 },
  { Icon: Terminal,  top: "42%", left: "74%", delay: 2.4 },
  { Icon: Monitor,   top: "50%", left: "37%", delay: 1.1 },
  { Icon: Code2,     top: "58%", left: "79%", delay: 0.3 },
  { Icon: Edit3,     top: "62%", left: "22%", delay: 1.8 },
];

function FloatingIcon({ Icon, top, left, delay }: { Icon: LucideIcon; top: string; left: string; delay: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900/80 border border-white/10 shadow-lg text-zinc-400 backdrop-blur-sm"
      style={{ top, left }}
    >
      <Icon size={16} />
    </motion.div>
  );
}

const CULTURE_POINTS = [
  { pre: "We are ", bold: "goal-driven", post: " and ", bold2: "dedicated" },
  { pre: "We ", bold: "use our own tools", post: " every day" },
  { pre: "We thrive together with ", bold: "our community" },
  { pre: "We are ", bold: "customer obsessed" },
  { pre: "We believe in ", bold: "people's ability to grow" },
];

export default function CareerHero() {
  const scrollToJobs = () => {
    const el = document.getElementById("jobs-listing-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* ── HERO ── */}
      <div className="relative min-h-[620px] flex flex-col items-center justify-center pt-32 pb-0">
      {/* Map background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ height: "620px" }}>
          {/* edge fades */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 opacity-50" style={{ height: "620px" }}>
            <FlatWorldMap />
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          {FLOAT_ICONS.map(({ Icon, top, left, delay }, i) => (
            <FloatingIcon key={i} Icon={Icon} top={top} left={left} delay={delay} />
          ))}
        </div>

        {/* Text */}
        <div className="relative z-20 text-center max-w-2xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5"
          >
            Join Us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zinc-400 mb-10"
          >
            Help us redefine hiring.{" "}
            <span className="text-[#f69507] font-semibold">For everyone.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToJobs}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f69507] hover:bg-[#d17c00] text-black font-semibold transition-colors"
            >
              Open Positions
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── CULTURE ── */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="border-t border-zinc-900 pt-20 grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#f69507] font-semibold text-xs uppercase tracking-widest mb-6">
              Our Culture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white">
              We base our philosophy on the principles of learning, collaboration, transparency, experimentation and passion.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center gap-5"
          >
            {CULTURE_POINTS.map((pt, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#f69507] shrink-0 mt-0.5" />
                <p className="text-lg text-zinc-300">
                  {pt.pre}
                  <strong className="text-white">{pt.bold}</strong>
                  {pt.post}
                  {pt.bold2 && <strong className="text-white">{pt.bold2}</strong>}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
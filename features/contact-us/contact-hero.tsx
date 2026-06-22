"use client";

import { useState, useEffect, useCallback } from "react";
import { getEnabledTestimonials, Testimonial } from "@/lib/testimonial-storage";

export default function ContactHero() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fading, setFading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTestimonials(getEnabledTestimonials());
  }, []);

  const count = testimonials.length;

  const goTo = (idx: number) => {
    if (idx === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 300);
  };

  const next = useCallback(() => {
    if (count <= 1) return;
    const nextIdx = (activeIdx + 1) % count;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(nextIdx);
      setFading(false);
    }, 300);
  }, [count, activeIdx]);

  /* Auto-advance every 5s, pause on hover */
  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, count, next]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ fullName: "", email: "", company: "", message: "" });
  };

  const t = testimonials[activeIdx];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f69507]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#f69507]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ========== LEFT: GRADIENT TESTIMONIAL CARD ========== */}
          <div
            className="relative rounded-[2rem] overflow-hidden min-h-[580px] flex flex-col justify-between p-10 cursor-pointer"
            style={{
              background:
                "linear-gradient(145deg, #e04a2f 0%, #e8832a 40%, #f5b84a 80%, #e8c84a 100%)",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />

            {/* Top label */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-sm font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Trusted by 50+ Institutions
              </span>
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 mt-auto">
              {/* Quote icon */}
              <div className="mb-5 text-white/60">
                <svg width="32" height="24" fill="currentColor" viewBox="0 0 32 24">
                  <path d="M0 24V14.4C0 6.72 4.8 1.68 14.4 0l2.4 3.6C11.28 5.04 8.64 7.92 8.16 12H14.4V24H0zm17.6 0V14.4C17.6 6.72 22.4 1.68 32 0l2.4 3.6C28.88 5.04 26.24 7.92 25.76 12H32V24H17.6z" />
                </svg>
              </div>

              {/* Quote — single active item fade */}
              <div className="relative min-h-[96px]">
                <blockquote
                  className={`transition-all duration-300 ease-in-out ${
                    fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <p className="text-xl font-semibold text-white leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Author — single active item fade */}
              <div className="mt-8">
                <div
                  className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                    fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <img
                    src={t.avatarUrl || "/blog/roy.jpg"}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/70 text-xs">
                      {t.role}
                      {t.company && `, ${t.company}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dot pagination */}
              {count > 1 && (
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIdx
                          ? "w-8 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ========== RIGHT: CONTACT FORM ========== */}
          <div className="flex flex-col justify-center px-0 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
              <p className="text-white/50 text-sm leading-relaxed">
                Please reach out to us and we will get back to you at the speed of light.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  id="contact-full-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Manu Arora"
                  required
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[#f69507]/60 focus:bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all duration-200 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@johndoe.com"
                  required
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[#f69507]/60 focus:bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all duration-200 text-sm"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Aceternity Labs, LLC"
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[#f69507]/60 focus:bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all duration-200 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter your message here"
                  required
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[#f69507]/60 focus:bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-all duration-200 resize-none text-sm"
                />
              </div>

              {/* Submit */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full rounded-full bg-white text-black font-semibold py-3.5 text-sm transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(246,149,7,0.25)] active:scale-[0.98] cursor-pointer"
              >
                {submitted ? "Message Sent ✓" : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
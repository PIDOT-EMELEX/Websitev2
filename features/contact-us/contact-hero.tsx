"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { CAL_BOOKING_URL } from "@/components/ui/book-call-link";
import { getEnabledTestimonials, Testimonial } from "@/lib/testimonial-storage";

// Default fallback testimonial for SSR
const DEFAULT_TESTIMONIAL: Testimonial = {
  id: "default",
  name: "Priya Sharma",
  role: "Dean of Commerce",
  company: "BITS Hyderabad",
  quote: "Pi Dot transformed how our students experience real-world business. The simulations are incredibly realistic and the support team is phenomenal.",
  avatarUrl: "/blog/roy.jpg",
  logoUrl: "/assets/pi-dot-logomark.svg",
  enabled: true,
  createdAt: "2026-01-15T10:00:00Z",
};

export default function ContactHero() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [mounted, setMounted] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const loaded = getEnabledTestimonials();
    if (loaded.length > 0) {
      setTestimonials(loaded);
    } else {
      setTestimonials([DEFAULT_TESTIMONIAL]);
    }
    setMounted(true);
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

  const t = testimonials[activeIdx] || DEFAULT_TESTIMONIAL;

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
            <div className="relative z-10 mt-auto w-full">
              {/* Quote icon */}
              <div className="mb-5 text-white/60">
                <svg width="32" height="24" fill="currentColor" viewBox="0 0 32 24">
                  <path d="M0 24V14.4C0 6.72 4.8 1.68 14.4 0l2.4 3.6C11.28 5.04 8.64 7.92 8.16 12H14.4V24H0zm17.6 0V14.4C17.6 6.72 22.4 1.68 32 0l2.4 3.6C28.88 5.04 26.24 7.92 25.76 12H32V24H17.6z" />
                </svg>
              </div>

              {!mounted || testimonials.length === 0 ? (
                <div className="space-y-4 animate-pulse w-full">
                  <div className="h-5 bg-white/20 rounded-md w-11/12" />
                  <div className="h-5 bg-white/20 rounded-md w-9/12" />
                  <div className="h-5 bg-white/20 rounded-md w-10/12" />
                  <div className="flex items-center gap-3 pt-6">
                    <div className="h-10 w-10 rounded-full bg-white/25" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 bg-white/25 rounded w-1/3" />
                      <div className="h-3 bg-white/20 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          {/* ========== RIGHT: BOOKING CARD ========== */}
          <div className="flex flex-col justify-center px-0 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
              <p className="text-white/50 text-sm leading-relaxed">
                Book a slot with our team and share the context directly in Cal.com.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_80px_rgba(246,149,7,0.12)]">
              <div className="rounded-3xl border border-[#f69507]/20 bg-[#f69507]/10 p-6">
                <p className="text-lg font-semibold text-white">
                  Schedule your conversation with Pi Dot.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Pick an available time, add your details, and we will meet you
                  there.
                </p>
              </div>

              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(246,149,7,0.25)] active:scale-[0.98]"
              >
                Book a Call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

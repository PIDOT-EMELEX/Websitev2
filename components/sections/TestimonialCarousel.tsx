"use client";

import { useState, useEffect, useCallback } from "react";
import { getEnabledTestimonials, Testimonial } from "@/lib/testimonial-storage";

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setTestimonials(getEnabledTestimonials());
  }, []);

  const count = testimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setFading(false);
      }, 300);
    },
    [active]
  );

  const next = useCallback(() => {
    if (count <= 1) return;
    goTo((active + 1) % count);
  }, [count, active, goTo]);

  /* Auto-advance every 5s */
  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, count, next]);

  if (count === 0) return null;

  const t = testimonials[active];

  return (
    <div
      className="relative group flex flex-col items-center justify-center gap-10 pt-24 md:pb-24 px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top glowing line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Conic + radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      {/* Logo bubble */}
      <div
        className={`flex h-[140px] w-[140px] items-center justify-center rounded-full transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        style={{ background: "radial-gradient(rgba(200,200,200,0.15) 0%, #000 90%)" }}
      >
        <img
          src={t.logoUrl || "/assets/pi-dot-logomark.svg"}
          alt={t.company || "Logo"}
          width={70}
          height={70}
          loading="lazy"
          decoding="async"
          className="select-none"
        />
      </div>

      {/* Quote */}
      <blockquote
        className={`mx-auto max-w-[520px] text-center transition-all duration-300 ${
          fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance">
          &ldquo;{t.quote}&rdquo;
        </span>
      </blockquote>

      {/* Author */}
      <div
        className={`flex items-center gap-4 transition-all duration-300 ${
          fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <img
          src={t.avatarUrl || "/blog/roy.jpg"}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white font-normal text-center">
            {t.name}
          </p>
          <p className="text-sm md:text-[1rem] md:leading-[1.5] text-white/60 font-normal text-center">
            {t.role}
            {t.company && ` at ${t.company}`}
          </p>
        </div>
      </div>

      {/* Dot navigation */}
      {count > 1 && (
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === active
                  ? "w-8 h-2 bg-white/70"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

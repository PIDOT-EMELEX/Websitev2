"use client";

import Logo from "../ui/TrustedSectionLogoUI";

const logos = [
  { src: "/logos/warnerbros.svg", alt: "Warner Bros" },
  { src: "/logos/max.svg", alt: "Max" },
  { src: "/logos/raycast.svg", alt: "Raycast" },
  { src: "/logos/mistral.svg", alt: "Mistral AI" },
  { src: "/logos/on.svg", alt: "On" },
  { src: "/logos/anghami.svg", alt: "Anghami" },
  { src: "/logos/gumroad.svg", alt: "Gumroad" },
  { src: "/logos/fal.svg", alt: "Fal" },
  { src: "/logos/decathlon.svg", alt: "Decathlon" },
  { src: "/logos/supabase.svg", alt: "Supabase" },
  { src: "/logos/leap.svg", alt: "Leap" },
  { src: "/logos/payload.svg", alt: "Payload" },
];

export default function TrustedCompanies() {
  return (
    <section className="relative mx-auto mt-20 max-w-5xl md:max-w-7xl rounded-3xl border-t border-slate-600 px-6 py-12 sm:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Top Gradient Line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      {/* Text (FORCED 2 LINES) */}
      <p className="mb-20 max-w-lg text-center text-base md:text-[1.125rem] md:leading-[1.5] text-gray-400">
        Companies of all sizes trust Resend <br />
        to deliver their most important emails.
      </p>

      {/* Logos Grid – 2 Rows */}
      <div className="
        grid
        w-5/6
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        gap-x-12
        gap-y-15
        items-center
      ">
        {logos.map((logo) => (
          <Logo key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}

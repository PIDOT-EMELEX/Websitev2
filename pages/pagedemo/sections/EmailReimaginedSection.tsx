"use client";

import Image from "next/image";
import { useRef } from "react";

export default function EmailReimaginedSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const GLOW_SIZE = 200;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - 0;
    const y = e.clientY - rect.top - 0;

    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
    };

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-12 text-center sm:py-24 sm:mb-0 sm:pb-0 md:max-w-7xl">
      {/* Heading */}
      <h2 className="effect-font-styling effect-font-gradient effect-font-hero mb-4 pb-3 text-center text-[4rem] leading-[100%] tracking-[-0.01em] md:text-[4.8rem]">
        Email reimagined.
        <br />
        Available today.
      </h2>

      {/* Buttons */}
      <div className="my-8 mb-24 flex flex-col justify-center gap-4 sm:flex-row">
        {/* Get Started */}
        <a
          href="/signup"
          className="relative inline-flex items-center justify-center select-none
                rounded-2xl h-12 px-5 text-base font-semibold text-white
                border-[2px] border-white/5
                backdrop-blur-[25px]
                bg-origin-border
                bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)]
                shadow-sm transition-all duration-200
                hover:bg-white/90 hover:text-black hover:shadow-button
                focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none
                after:absolute after:top-[-2px] after:left-[-2px]
                after:w-[calc(100%+4px)] after:h-[calc(100%+4px)]
                after:rounded-[1rem]
                after:bg-[url('/pagedemo/texture-btn.png')]
                after:bg-repeat after:pointer-events-none"
        >
          Get Started
          <span className="-mr-2 text-[#70757E] opacity-100 transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        {/* Contact Us */}
        <a
          href="/contact"
          className="relative inline-flex h-12 select-none items-center justify-center gap-0 rounded-2xl border border-transparent bg-transparent px-5 text-base font-semibold text-white/70 transition duration-200 ease-in-out hover:text-white focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-gray-a2 disabled:cursor-not-allowed disabled:opacity-70 [&_svg]:text-gray-9"
        >
          Contact Us
          <span className="-mr-2 text-[#70757E] opacity-100 transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* Logo Glow Image */}
        <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative hidden overflow-hidden bg-black sm:block"
        style={{
            ["--pointer-x" as any]: "0px",
            ["--pointer-y" as any]: "0px",
        }}
        >
        <Image
          src="/pagedemo/resend-logo-footer.png"
          alt="Resend logo on glass material"
          width={3000}
          height={750}
          className="pointer-events-none mx-auto select-none"
          priority
        />

        {/* Hover glow */}
        <div
        className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            rounded-full
            opacity-0
            transition-opacity
            duration-500
            ease-out
            will-change-transform
            group-hover:opacity-100
        "
        style={{
            top: "-100px",
            left: "-100px",
            width: `${GLOW_SIZE}px`,
            height: `${GLOW_SIZE}px`,
            transform:
            "translateX(var(--pointer-x)) translateY(var(--pointer-y))",
            mixBlendMode: "soft-light",
            backgroundImage:
            "radial-gradient(100px, rgba(255,255,255,0.8), rgba(255,255,255,0))",
        }}
        />

      </div>
    </section>
  );
}

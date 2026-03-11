"use client";

import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  variant?: "gradient" | "light";
  height?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
  variant = "light",
  height = "h-[400px]",
}: FeatureCardProps) {
  const isGradient = variant === "gradient";

  return (
    <div className="snap-start">
      <div
  className={`relative flex ${height} w-full flex-col justify-end overflow-hidden rounded-[32px] text-white`}
  style={{
    background: `
      radial-gradient(167.08% 140.48% at 79.5% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 100%),
      radial-gradient(120.74% 124.92% at 7.26% 100%, #497EE9 0%, #749CFF 100%)
    `,
    backgroundBlendMode: "overlay, normal",
    boxShadow: `
      inset 1.899px 1.77px 8.174px rgba(255,255,255,0.13),
      inset 1.007px 0.939px 4.087px rgba(255,255,255,0.13)
    `,
  }}
>
  {/* Image */}
  <Image
    src={image}
    alt={title}
    fill
    className="pointer-events-none absolute top-0 right-0 object-contain"
  />

  {/* Content */}
  <div className="relative flex flex-col gap-3 px-8 pb-8">
    <h3 className="text-2xl leading-[28.5px] font-medium tracking-[-0.4px]">
      {title}
    </h3>

    <p className="text-lg leading-[24.75px] text-white/90">
      {description}
    </p>
  </div>
</div>
    </div>
  );
}
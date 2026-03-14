"use client";

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type MovingBorderProps = {
  duration?: number;
  radius?: number;
};

export default function MovingBorder({
  duration = 4200,
  radius = 24,
}: MovingBorderProps) {
  const rectRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
  const rect = rectRef.current;
  if (!rect) return;

  const updateLength = () => {
    try {
      const l = rect.getTotalLength();
      if (l > 0) setLength(l);
    } catch {}
  };

  updateLength();

  const resizeObserver = new ResizeObserver(updateLength);
  resizeObserver.observe(rect);

  return () => resizeObserver.disconnect();
}, []);

  useAnimationFrame((time) => {
    if (!length) return;

    // base speed
    const baseSpeed = length / duration;

    const current = progress.get();

    // Normalize 0 → 1
    const t = current / length;

    // Distance from nearest corner (0 = corner, 0.5 = center)
    const cornerDistance =
      Math.min(
        Math.abs(t - 0),
        Math.abs(t - 0.25),
        Math.abs(t - 0.5),
        Math.abs(t - 0.75),
        Math.abs(t - 1),
      ) * 4;

    // Speed boost near corners
    const speedMultiplier = 1 + (1 - cornerDistance) * 5;

    progress.set(
      (current + baseSpeed * speedMultiplier) % length
    );
  });

  const x = useTransform(progress, (v) => {
  const rect = rectRef.current;
  if (!rect || length === 0) return 0;

  try {
    return rect.getPointAtLength(v).x;
  } catch {
    return 0;
  }
});

const y = useTransform(progress, (v) => {
  const rect = rectRef.current;
  if (!rect || length === 0) return 0;

  try {
    return rect.getPointAtLength(v).y;
  } catch {
    return 0;
  }
});

  // Size behavior: big at corners, small at center
  const scale = useTransform(progress, (v) => {
    if (!length) return 0.6;
    const t = v / length;

    const cornerDistance =
      Math.min(
        Math.abs(t - 0),
        Math.abs(t - 0.25),
        Math.abs(t - 0.5),
        Math.abs(t - 0.75),
        Math.abs(t - 1),
      ) * 4;

    return 0.6 + (1 - cornerDistance) * 0.9;
  });

  const opacity = useTransform(scale, [0.6, 1.5], [0.4, 1]);

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translate(-50%, -50%)
    scale(${scale})
  `;

  return (
    <>
      {/* Path */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <rect
          ref={rectRef}
          width="100%"
          height="100%"
          rx={radius}
          ry={radius}
          fill="none"
        />
      </svg>

      {/* Glow */}
      {length > 0 && (
        <motion.div
          className="absolute top-0 left-0 pointer-events-none"
          style={{ transform, opacity }}
        >
          <div
            className="
              h-24 w-24
              bg-[radial-gradient(circle,#f69507_35%,transparent_70%)]
              blur-[2px]
            "
          />
        </motion.div>
      )}
    </>
  );
}

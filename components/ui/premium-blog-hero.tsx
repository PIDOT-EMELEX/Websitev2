"use client";

import { motion, Variants } from "framer-motion";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function PremiumBlogHero() {
  return (
    <motion.section
      className="mx-auto max-w-4xl px-6 pt-32 pb-16"
      initial="hidden"
      whileInView="visible"
    >
      {/* Category Pill */}
      <motion.span
        className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-600"
        custom={0}
        variants={fadeInVariants}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
        Insights & Stories
      </motion.span>

      {/* Headline */}
      <motion.h1
        className="mt-8 text-5xl font-bold leading-tight text-black md:text-6xl"
        custom={1}
        variants={fadeInVariants}
      >
        Explore our stories & insights
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        custom={2}
        variants={fadeInVariants}
      >
        Discover how leading institutions are transforming education and student
        outcomes with innovative approaches.
      </motion.p>
    </motion.section>
  );
}

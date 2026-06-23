"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PremiumBlogFooter() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.footer
      className="border-t border-gray-200 bg-white"
      initial="hidden"
      whileInView="visible"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <motion.div
            className="space-y-6"
            custom={0}
            variants={fadeInVariants}
          >
            <h3 className="font-semibold text-black">Pi Dot</h3>
            <p className="text-sm text-gray-600">
              Transforming education through intelligent simulations.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            className="space-y-4"
            custom={1}
            variants={fadeInVariants}
          >
            <h4 className="font-semibold text-black">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Enterprise", "Security"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-black"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="space-y-4"
            custom={2}
            variants={fadeInVariants}
          >
            <h4 className="font-semibold text-black">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="space-y-4"
            custom={3}
            variants={fadeInVariants}
          >
            <h4 className="font-semibold text-black">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Support", "Community", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-black"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            className="space-y-4"
            custom={4}
            variants={fadeInVariants}
          >
            <h4 className="font-semibold text-black">Legal</h4>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Cookies", "Compliance"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500"
          custom={5}
          variants={fadeInVariants}
        >
          <p>© 2026 Pi Dot. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

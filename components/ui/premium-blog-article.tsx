"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogArticleProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  image: string;
  content: any[];
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function PremiumBlogArticle({
  title,
  category,
  date,
  readTime,
  author,
  authorImage,
  image,
  content,
}: BlogArticleProps) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Add padding for fixed nav */}
      <div className="pt-16" />

      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-3xl px-6 py-20"
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        {/* Category Pill */}
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-600"
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          {category}
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="mt-8 text-6xl font-bold leading-[1.1] text-black md:text-7xl"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
        >
          {title}
        </motion.h1>

        {/* Metadata */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500"
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
        >
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span>{readTime}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <img
              src={authorImage}
              alt={author}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span>{author}</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Image */}
      <motion.div
        className="mx-auto max-w-3xl px-6"
        custom={3}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full rounded-2xl object-cover"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Article Body */}
      <motion.article
        className="mx-auto max-w-3xl px-6 py-20"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <div className="prose prose-lg prose-gray max-w-none">
          {content.map((block: any, index: number) => (
            <motion.div
              key={index}
              custom={4 + index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
            >
              {block.type === "paragraph" && (
                <p className="my-8 text-lg leading-relaxed text-gray-700">
                  {block.text}
                </p>
              )}

              {block.type === "heading" && (
                <h2 className="my-12 mt-16 text-4xl font-bold text-black">
                  {block.text}
                </h2>
              )}

              {block.type === "subheading" && (
                <h3 className="my-8 mt-12 text-2xl font-semibold text-black">
                  {block.text}
                </h3>
              )}

              {block.type === "blockquote" && (
                <blockquote className="my-12 border-l-4 border-black py-6 pl-8 italic text-gray-800">
                  {block.text}
                </blockquote>
              )}

              {block.type === "image" && (
                <motion.img
                  src={block.src}
                  alt={block.alt || "Article image"}
                  className="my-12 w-full rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {block.type === "list" && (
                <ul className="my-8 space-y-3 pl-6">
                  {Array.isArray(block.items) &&
                    block.items.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="list-disc text-gray-700"
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              )}

              {block.type === "stats" && (
                <div className="my-12 grid grid-cols-2 gap-8 rounded-xl border border-gray-200 bg-gray-50 p-8 md:grid-cols-4">
                  {Array.isArray(block.items) &&
                    block.items.map(
                      (
                        stat: { label: string; value: string },
                        i: number
                      ) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-black">
                            {stat.value}
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      )
                    )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.article>

      {/* CTA Section */}
      <motion.section
        className="mx-auto max-w-3xl border-t border-gray-200 px-6 py-20"
        custom={5}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">
            Ready to transform your institution?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join hundreds of leading institutions already using Pi Dot.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact-us"
              className="inline-block rounded-full bg-black px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-900 active:translate-y-0.5"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Back to Blog Link */}
      <motion.div
        className="mx-auto max-w-3xl px-6 py-12 text-center"
        custom={6}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <Link
          href="/blog"
          className="text-sm text-gray-600 transition-colors hover:text-black"
        >
          ← Back to Blog
        </Link>
      </motion.div>
    </main>
  );
}

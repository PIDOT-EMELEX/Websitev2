"use client";

import { motion, Variants } from "framer-motion";
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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function sanitizeText(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toHtml(text: string) {
  if (!text) return "";
  const safe = sanitizeText(text);
  return safe
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/__(.+?)__/g, "<u>$1</u>")
    .replace(/~~(.+?)~~/g, "<del>$1</del>")
    .replace(/`(.+?)`/g, "<code class='rounded-sm bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900'>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-black underline'>$1</a>");
}

function headingId(text: string, index: number) {
  return `${text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || `heading-${index}`}`;
}

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
  const tocItems = content
    .map((block: any, index: number) => {
      if (block.type !== "heading" && block.type !== "subheading") return null;
      return {
        id: headingId(block.text || `section-${index}`, index),
        title: block.text || "Section",
        level: block.type === "heading" ? 1 : 2,
      };
    })
    .filter(Boolean) as { id: string; title: string; level: number }[];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="pt-16" />

      <motion.section
        className="mx-auto max-w-3xl px-6 py-20"
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-600"
          custom={0}
          variants={fadeInVariants}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          {category}
        </motion.span>

        <motion.h1
          className="mt-8 text-6xl font-bold leading-[1.05] text-black md:text-7xl"
          custom={1}
          variants={fadeInVariants}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500"
          custom={2}
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

      <motion.section
        className="mx-auto max-w-7xl px-6 py-20"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <article className="space-y-10 prose prose-lg prose-gray max-w-none">
              {content.map((block: any, index: number) => {
                const id = headingId(block.text || `section-${index}`, index);
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="my-8 text-lg leading-relaxed text-gray-700"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      id={id}
                      key={index}
                      className="my-12 mt-16 text-4xl font-bold text-black"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "subheading") {
                  return (
                    <h3
                      id={id}
                      key={index}
                      className="my-8 mt-12 text-2xl font-semibold text-black"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={index}
                      className="my-12 border-l-4 border-black py-6 pl-8 italic text-gray-800"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "image") {
                  return (
                    <motion.img
                      key={index}
                      src={block.src}
                      alt={block.caption || "Article image"}
                      className="my-12 w-full rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  );
                }

                if (block.type === "points") {
                  return (
                    <ul key={index} className="my-8 space-y-3 pl-6">
                      {Array.isArray(block.items) &&
                        block.items.map((item: string, i: number) => (
                          <li key={i} className="list-disc text-gray-700">
                            {item}
                          </li>
                        ))}
                    </ul>
                  );
                }

                if (block.type === "numbered-list") {
                  return (
                    <ol key={index} className="my-8 space-y-3 pl-6 list-decimal">
                      {Array.isArray(block.items) &&
                        block.items.map((item: string, i: number) => (
                          <li key={i} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                    </ol>
                  );
                }

                if (block.type === "divider") {
                  return (
                    <div key={index} className="flex items-center gap-4 py-4">
                      <div className="flex-1 border-t border-gray-200" />
                      <span className="text-gray-400 tracking-[8px] text-xs">· · ·</span>
                      <div className="flex-1 border-t border-gray-200" />
                    </div>
                  );
                }

                if (block.type === "callout") {
                  return (
                    <div
                      key={index}
                      className="my-12 rounded-3xl border border-gray-200 bg-gray-50 p-8"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                        {block.calloutType || "Note"}
                      </p>
                      <div
                        className="text-lg text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                      />
                    </div>
                  );
                }

                return null;
              })}
            </article>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* CTA Box - Premium Black */}
              <div className="rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-8 text-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-800/50">
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
                  Download & Try
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-tight">
                  Download and try Cluely for free today
                </h2>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  Get instant access to transform your workflow with intelligent simulations.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 active:scale-95"
                >
                  Get Started →
                </Link>
              </div>

              {/* Table of Contents Box */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-6 rounded-full bg-black" />
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">
                    Table of contents
                  </p>
                </div>
                
                <nav className="space-y-3">
                  {tocItems.length > 0 ? (
                    tocItems.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-start gap-3 px-3 py-2 rounded-lg transition-all hover:bg-gray-50 group ${
                          item.level === 2 ? "ml-4" : ""
                        }`}
                      >
                        <span className="text-xs text-gray-400 pt-1 font-mono min-w-max">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-gray-700 group-hover:text-black transition-colors font-medium">
                          {item.title}
                        </span>
                      </a>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 italic">No headings found in this article.</p>
                  )}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </motion.section>

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

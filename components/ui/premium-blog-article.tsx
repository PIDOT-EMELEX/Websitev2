"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { CAL_BOOKING_URL } from "./book-call-link";

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
      ease: [0.22, 1, 0.36, 1] as const,
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
    .replace(/`(.+?)`/g, "<code class='rounded-sm bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-zinc-100 border border-zinc-700/50'>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-[#f69507] hover:text-[#ffcc66] transition-colors underline'>$1</a>");
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
    <main className="min-h-screen bg-black text-zinc-300 relative overflow-hidden">
      {/* Ambient Top Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full bg-[#f69507]/10 blur-[130px] z-0" />


      {/* Header Section */}
      <motion.section
        className="mx-auto max-w-7xl px-6 pt-2 pb-2 relative z-10 text-left"
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-[#f69507]/30 bg-[#f69507]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f69507]"
          custom={0}
          variants={fadeInVariants}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#f69507]" />
          {category}
        </motion.span>

        <motion.h1
          className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl tracking-tight text-left"
          custom={1}
          variants={fadeInVariants}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-start gap-4 text-sm text-zinc-400"
          custom={2}
          variants={fadeInVariants}
        >
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>{readTime}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <div className="flex items-center gap-2">
            <img
              src={authorImage}
              alt={author}
              className="h-6 w-6 rounded-full object-cover border border-zinc-800"
            />
            <span className="text-zinc-300 font-medium">{author}</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Cover Image */}
      {image?.trim() && (
        <motion.div
          className="mx-auto max-w-7xl px-6 relative z-10"
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full rounded-3xl object-cover border border-zinc-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Body Content & Sidebar */}
      <motion.section
        className="mx-auto max-w-7xl px-6 pt-4 pb-12 relative z-10"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <article className="space-y-8 prose prose-invert prose-zinc max-w-none">
              {content.map((block: any, index: number) => {
                const id = headingId(block.text || `section-${index}`, index);
                
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="my-6 text-lg leading-relaxed text-zinc-300"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      id={id}
                      key={index}
                      className="my-10 mt-14 text-3xl md:text-4xl font-bold text-white tracking-tight border-b border-zinc-900 pb-3"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "subheading") {
                  return (
                    <h3
                      id={id}
                      key={index}
                      className="my-6 mt-10 text-xl md:text-2xl font-semibold text-white tracking-tight"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={index}
                      className="my-10 border-l-4 border-[#f69507] bg-zinc-950/40 rounded-r-2xl py-6 pl-8 italic text-zinc-200"
                      dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                    />
                  );
                }

                if (block.type === "image") {
                  return (
                    <div key={index} className="my-10">
                      <motion.img
                        src={block.src}
                        alt={block.caption || "Article image"}
                        className="w-full rounded-2xl border border-zinc-800/80"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                      />
                      {block.caption && (
                        <p className="mt-3 text-center text-sm text-zinc-500 italic">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }

                if (block.type === "points") {
                  return (
                    <ul key={index} className="my-6 space-y-3 pl-6 list-disc text-zinc-300">
                      {Array.isArray(block.items) &&
                        block.items.map((item: string, i: number) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                    </ul>
                  );
                }

                if (block.type === "numbered-list") {
                  return (
                    <ol key={index} className="my-6 space-y-3 pl-6 list-decimal text-zinc-300">
                      {Array.isArray(block.items) &&
                        block.items.map((item: string, i: number) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                    </ol>
                  );
                }

                if (block.type === "divider") {
                  return (
                    <div key={index} className="flex items-center gap-4 py-8">
                      <div className="flex-1 border-t border-zinc-800/60" />
                      <span className="text-zinc-600 tracking-[8px] text-xs">· · ·</span>
                      <div className="flex-1 border-t border-zinc-800/60" />
                    </div>
                  );
                }

                if (block.type === "callout") {
                  return (
                    <div
                      key={index}
                      className="my-10 rounded-3xl border border-[#f69507]/20 bg-[#f69507]/5 p-8 text-zinc-300"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f69507] font-semibold mb-4">
                        {block.calloutType || "Note"}
                      </p>
                      <div
                        className="text-lg text-zinc-200 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: toHtml(block.text || "") }}
                      />
                    </div>
                  );
                }

                return null;
              })}
            </article>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* CTA Box - Premium Re-styled to Get In Touch */}
              <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 text-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-zinc-800/80">
                <h2 className="text-2xl font-bold leading-tight text-white">
                  Get in Touch
                </h2>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Get instant access to transform how you hire & train global teams with AI native simulations.
                </p>
                <a
                  href={CAL_BOOKING_URL}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f69507] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#e08806] active:scale-95 shadow-md shadow-[#f69507]/20"
                >
                  Get in touch
                </a>
              </div>

              {/* Table of Contents Box */}
              <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-8 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-6 rounded-full bg-[#f69507]" />
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
                    Table of contents
                  </p>
                </div>
                
                <nav className="space-y-2">
                  {tocItems.length > 0 ? (
                    tocItems.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-start gap-3 px-3 py-2 rounded-xl transition-all hover:bg-zinc-900/60 group ${
                          item.level === 2 ? "ml-4" : ""
                        }`}
                      >
                        <span className="text-xs text-zinc-600 pt-0.5 font-mono min-w-max">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-zinc-400 group-hover:text-[#f69507] transition-colors font-medium">
                          {item.title}
                        </span>
                      </a>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-500 italic">No headings found.</p>
                  )}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        className="mx-auto max-w-3xl border-t border-zinc-900 px-6 py-20 relative z-10"
        custom={5}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <div className="text-center bg-gradient-to-b from-zinc-950 to-zinc-900 border border-zinc-800/50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Ready to transform your institution?
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-md mx-auto">
            Join hundreds of leading institutions already using Pi Dot.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={CAL_BOOKING_URL}
              className="inline-block rounded-full bg-[#f69507] px-8 py-3.5 font-bold text-black transition-all duration-200 hover:bg-[#e08806] active:translate-y-0.5"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Back to Blog */}
      <motion.div
        className="mx-auto max-w-3xl px-6 py-12 text-center relative z-10"
        custom={6}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <Link
          href="/blog"
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to Blog
        </Link>
      </motion.div>
    </main>
  );
}

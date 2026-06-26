"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { BlogPost, getBlogs } from "@/lib/blog-storage";
import { Search } from "lucide-react";
import PiDotGlow from "@/components/sections/pi-dot-glow";

/* ── Fade-up variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Single blog card — same look as the infinite-scroll HoverCard ── */
function BlogCard({ blog, index }: { blog: BlogPost; index: number }) {
  const date = (() => {
    try {
      const d = new Date(blog.createdAt);
      return isNaN(d.getTime())
        ? "Recent"
        : d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    } catch {
      return "Recent";
    }
  })();

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="group relative w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Link href={`/blog/${blog.slug}`} className="flex flex-col w-full h-full no-underline text-inherit">
        {/* Image area */}
        <div className="h-[200px] w-full relative overflow-hidden border-b border-gray-100">
          <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-90">
            {blog.image?.trim() ? (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-all duration-500 ease-out rounded-[0px] group-hover:translate-y-2.5 group-hover:rounded-[15px]"
              />
            ) : (
              /* No image — gradient placeholder */
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 group-hover:translate-y-2.5 group-hover:rounded-[15px] transition-all duration-500">
                <span className="text-4xl font-black text-zinc-300 select-none">
                  {blog.title.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Text area */}
        <div className="flex-1 p-5 flex flex-col justify-between text-black">
          <div>
            {/* Category badge */}
            {blog.category && (
              <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-black/5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                {blog.category}
              </span>
            )}
            <h2 className="text-sm font-bold mb-2 text-gray-900 line-clamp-2">
              {blog.title}
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 whitespace-nowrap">
            <span className="text-[10px] text-gray-500 truncate">{date}</span>
            <span className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white transition-transform duration-300 group-hover:scale-105 active:scale-95">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      const visibleBlogs = getBlogs()
        .filter((b) => b.showOnBlogPage)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      setBlogs(visibleBlogs);
    }
  }, []);

  /* Derived */
  const categories = useMemo(
    () => Array.from(new Set(blogs.map((b) => b.category).filter(Boolean))).sort(),
    [blogs]
  );

  const filtered = useMemo(() => {
    let result = blogs;
    if (selectedCategory) result = result.filter((b) => b.category === selectedCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          (b.excerpt || "").toLowerCase().includes(q) ||
          (b.author || "").toLowerCase().includes(q)
      );
    }
    return result;
  }, [blogs, selectedCategory, query]);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Sticky Banner */}
      <StickyBanner
        open={isBannerOpen}
        setOpen={setIsBannerOpen}
        className="bg-gradient-to-b from-[#d17c00] to-[#f69507]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Reach out to us to redefine hiring.{" "}
          <a href="/contact-us" className="underline transition duration-200">
            Contact us
          </a>
        </p>
      </StickyBanner>

      {/* Navbar */}
      <motion.div
        className="fixed top-10 sm:top-0 z-50 w-full flex justify-center"
        animate={{ y: isBannerOpen ? 56 : 0 }}
      >
        <NavbarDemo />
      </motion.div>

      {/* PAGE CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isBannerOpen ? "pt-[200px] sm:pt-[176px]" : "pt-[140px] sm:pt-[120px]"
        }`}
      >
        <main className="min-h-screen bg-black text-white">

          {/* ── Hero ── */}
          <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-12">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#f69507]/10 blur-[120px]" />

            <motion.div
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.span
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#f69507]/30 bg-[#f69507]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[#f69507]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f69507]" />
                Insights &amp; Stories
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mt-6 text-5xl font-bold leading-tight md:text-6xl"
              >
                Explore our
                <br />
                <span className="bg-gradient-to-r from-[#f69507] to-[#ffcc66] bg-clip-text text-transparent">
                  stories &amp; insights
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400"
              >
                Discover how leading institutions are transforming education and
                student outcomes with innovative approaches.
              </motion.p>
            </motion.div>
          </section>

          {/* ── Search + Filter bar ── */}
          <section className="sticky top-[72px] z-30 bg-black/80 backdrop-blur-xl border-b border-zinc-800/60">
            <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search blogs…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-full border border-zinc-700 bg-zinc-900 pl-9 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#f69507] transition-colors"
                />
              </div>

              {/* Category chips */}
              <div className="flex flex-wrap gap-2 items-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-[#f69507] text-black"
                      : "border border-zinc-700 text-zinc-400 hover:border-[#f69507] hover:text-[#f69507]"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-[#f69507] text-black"
                        : "border border-zinc-700 text-zinc-400 hover:border-[#f69507] hover:text-[#f69507]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ── Blog grid ── */}
          <section className="mx-auto max-w-5xl px-6 py-14">
            {/* Results summary */}
            {(selectedCategory || query) && (
              <p className="mb-8 text-sm text-zinc-500">
                {filtered.length === 0
                  ? "No blogs found."
                  : `${filtered.length} blog${filtered.length !== 1 ? "s" : ""} found`}
                {selectedCategory && (
                  <> in <span className="text-white font-medium">{selectedCategory}</span></>
                )}
                {query && (
                  <> for &ldquo;<span className="text-white font-medium">{query}</span>&rdquo;</>
                )}
              </p>
            )}

            {filtered.length === 0 && !selectedCategory && !query && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-4 h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <p className="text-zinc-400 text-lg font-medium">No published blogs yet.</p>
                <p className="text-zinc-600 text-sm mt-1">Check back soon for new stories.</p>
              </div>
            )}

            {filtered.length === 0 && (selectedCategory || query) && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-zinc-400 text-lg font-medium">No results found.</p>
                <button
                  onClick={() => { setSelectedCategory(null); setQuery(""); }}
                  className="mt-4 text-sm text-[#f69507] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Cards grid — same card style as infinite scroll */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} index={i} />
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <PiDotGlow />
        </div>
        <div className="relative z-10 mt-75">
          <FooterDemo />
        </div>
      </section>
    </div>
  );
}

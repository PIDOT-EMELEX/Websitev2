"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getBlogs, BlogPost } from "@/lib/blog-storage";
import { CAL_BOOKING_URL } from "@/components/ui/book-call-link";

export default function EmailWithReactSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const allBlogs = getBlogs();
    // Filter blogs where category matches "simulations" or "simulation"
    const simBlogs = allBlogs
      .filter(
        (b) =>
          b.category?.toLowerCase() === "simulations" ||
          b.category?.toLowerCase() === "simulation"
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    setBlogs(simBlogs);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        width={170}
        height={170}
        src="/pagedemo/3d-react.mp4"
        className="mx-auto mb-6"
      />

      {/* Heading */}
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-5 text-center">
        Bring Corporate Simulation to Your Campus
      </h2>

      {/* Description */}
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/70 font-normal text-balance text-center">
        Launch industry-led simulation programs for your students with complete academic support,
        <br className="hidden sm:block" />
        structured frameworks, and seamless integration into your curriculum.
      </p>

      {/* CTA Buttons */}
      <div className="mx-auto my-10 flex flex-col justify-center gap-4 px-10 sm:max-w-none sm:flex-row sm:px-0 md:mb-20">
        {/* Primary Button */}
        <a
          href={CAL_BOOKING_URL}
          className="
            relative inline-flex items-center justify-center select-none
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
            after:bg-repeat after:pointer-events-none
          "
        >
          Book a Demo
          <span className="text-[#70757E] opacity-100 -mr-2">
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
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

        {/* Secondary Button */}
        <a
          href="#simulation-cards"
          className="
            relative inline-flex items-center justify-center
            rounded-2xl h-12 px-5 text-base font-semibold
            bg-transparent border border-transparent
            text-white/70 transition duration-200
            hover:text-white
            focus-visible:ring-4 focus-visible:ring-gray-a2 focus-visible:outline-none
            [&_svg]:text-gray-9
          "
        >
          Explore More
          <span className="text-[#70757E] opacity-100 -mr-2">
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
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

      {/* Simulation Cards Grid */}
      {blogs.length > 0 && (
        <div id="simulation-cards" className="mt-16 max-w-6xl mx-auto scroll-mt-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, visibleCount).map((blog, idx) => {
              const date = (() => {
                try {
                  const d = new Date(blog.createdAt);
                  return isNaN(d.getTime())
                    ? "Recent"
                    : d.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      });
                } catch {
                  return "Recent";
                }
              })();

              return (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="group relative w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex flex-col w-full h-full no-underline text-inherit flex-1"
                  >
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
                        <span className="text-[10px] text-gray-500 truncate">
                          {date}
                        </span>
                        <span className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white transition-transform duration-300 group-hover:scale-105 active:scale-95">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {blogs.length > visibleCount && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="
                  px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm
                  transition-all duration-200 hover:border-[#f69507] hover:text-[#f69507] active:scale-95 cursor-pointer
                "
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

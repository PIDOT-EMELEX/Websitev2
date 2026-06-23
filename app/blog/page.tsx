"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { PremiumBlogHero } from "@/components/ui/premium-blog-hero";
import { PremiumBlogList } from "@/components/ui/premium-blog-list";
import { BlogPost, getBlogs } from "@/lib/blog-storage";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      const visibleBlogs = getBlogs()
        .filter((blog) => blog.showOnBlogPage)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );

      setBlogs(visibleBlogs);
    }
  }, []);

  // Get unique categories from blogs
  const categories = Array.from(
    new Set(blogs.map((blog) => blog.category).filter(Boolean))
  ).sort();

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="min-h-screen flex flex-col">
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
        <main className="min-h-screen bg-white">
          <PremiumBlogHero />
          
          {/* Category Filter */}
          {categories.length > 0 && (
            <motion.div
              className="mx-auto max-w-4xl px-6 py-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Filter by:
                </span>
                
                {/* All Categories Button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-black text-white"
                      : "border border-gray-300 text-gray-700 hover:border-black hover:text-black"
                  }`}
                >
                  All
                </button>

                {/* Category Buttons */}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-black text-white"
                        : "border border-gray-300 text-gray-700 hover:border-black hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results count */}
              {selectedCategory && (
                <p className="mt-4 text-sm text-gray-600">
                  Showing {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? "s" : ""} in{" "}
                  <span className="font-semibold text-black">{selectedCategory}</span>
                </p>
              )}
            </motion.div>
          )}

          <PremiumBlogList blogs={filteredBlogs} />
        </main>
      </div>

      {/* Footer */}
      <FooterDemo />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getBlogBySlug } from "@/lib/blog-storage";
import { useParams } from "next/navigation";
import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { PremiumBlogArticle } from "@/components/ui/premium-blog-article";

export default function BlogDetailPage() {
  const params = useParams();
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <PremiumBlogArticle
          title={blog.title}
          category={blog.category}
          date={new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          readTime={blog.readTime}
          author={blog.author}
          authorImage={blog.authorImage || "/blog/roy.jpg"}
          image={blog.image || "/blog/hero.png"}
          content={blog.content || []}
        />
      </div>

      {/* Footer */}
      <FooterDemo />
    </div>
  );
}

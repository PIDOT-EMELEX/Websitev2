"use client";

import { useEffect, useState } from "react";
import { PremiumBlogNav } from "@/components/ui/premium-blog-nav";
import { PremiumBlogHero } from "@/components/ui/premium-blog-hero";
import { PremiumBlogList } from "@/components/ui/premium-blog-list";
import { PremiumBlogFooter } from "@/components/ui/premium-blog-footer";
import { BlogPost, getBlogs } from "@/lib/blog-storage";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

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

  return (
    <>
      <PremiumBlogNav />
      <main className="min-h-screen bg-white">
        <PremiumBlogHero />
        <PremiumBlogList blogs={blogs} />
      </main>
      <PremiumBlogFooter />
    </>
  );
}

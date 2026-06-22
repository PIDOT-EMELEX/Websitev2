"use client";

import React, { useState, useEffect, useCallback } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { getVisibleBlogs } from "@/lib/blog-storage";

/* ---------- Static fallback cards shown when no admin blogs are active ---------- */
const STATIC_CARDS = [
  {
    title: "World's First Corporate Simulation Ecosystem",
    subtitle: "",
    quote: "Where leadership, decision-making, and AI converge to train the next generation of Thinkers.",
    date: "August 2025",
    image: "/assets/InfiniteCardImages/img1.png",
    link: "#",
  },
  {
    title: "LLM That Outsmarts ChatGPT in Math at INR 20,000",
    subtitle: "",
    quote: "Built by Fermion AI Labs — benchmarked to outperform ChatGPT in mathematical reasoning and logic.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/img2.png",
    link: "#",
  },
  {
    title: "The Real World. Rebuilt as a Simulation",
    subtitle: "",
    quote: "CSP mirrors the pulse of corporate life — decisions, dilemmas, and real consequence.",
    date: "September 2025",
    image: "/assets/InfiniteCardImages/img3.png",
    link: "#",
  },
  {
    title: "From Campus to Corporate under 30 days",
    subtitle: "",
    quote: "CSP's structured learning path transforms students into industry-ready professionals.",
    date: "September 2025",
    image: "/assets/InfiniteCardImages/img4.png",
    link: "#",
  },
  {
    title: "A Community Built of Next-Gen AI Builders",
    subtitle: "",
    quote: "Fermion AI Labs is where builders and engineers learn to shape intelligence.",
    date: "July 2025",
    image: "/assets/InfiniteCardImages/img5.png",
    link: "#",
  },
  {
    title: "AI That Designs Training Itself",
    subtitle: "",
    quote: "PI DOT's adaptive intelligence crafts personalised simulation paths.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/img6.png",
    link: "#",
  },
];

function mapBlogs(blogs: ReturnType<typeof getVisibleBlogs>) {
  return blogs.map((blog) => ({
    title: blog.title,
    subtitle: blog.category || "",
    quote: blog.excerpt,
    date: (() => {
      try {
        if (!blog.createdAt) return "Recent";
        const d = new Date(blog.createdAt);
        if (isNaN(d.getTime())) return "Recent";
        return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      } catch {
        return "Recent";
      }
    })(),
    image: blog.image?.trim() ? blog.image : "/blog/hero.png",
    link: `/blog/${blog.slug}`,
  }));
}

export function InfiniteMovingCardsDemo() {
  const [cards, setCards] = useState(STATIC_CARDS as any[]);

  const reload = useCallback(() => {
    const visibleBlogs = getVisibleBlogs();
    if (visibleBlogs.length > 0) {
      setCards(mapBlogs(visibleBlogs));
    } else {
      // No admin blogs marked visible — keep/show static showcase cards
      setCards(STATIC_CARDS);
    }
  }, []);

  useEffect(() => {
    reload();

    // React to changes made in other tabs (admin portal toggling visibility)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "pidot_blogs") reload();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [reload]);

  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-hidden">
      <InfiniteMovingCards items={cards} direction="right" speed="slow" />
    </div>
  );
}




"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <InfiniteMovingCards items={blogCards} direction="right" speed="slow" />
    </div>
  );
}

const blogCards = [
  {
    title: "World’s First Corporate Simulation Ecosystem",
    subtitle: "",
    quote:
      "Where leadership, decision-making, and AI converge to train the next generation of Thinkers.",
    date: "August 2025",
    image: "/assets/InfiniteCardImages/image1.png",
    link: "/blog/corporate-simulation",
  },
  {
    title: "LLM That Outsmarts ChatGPT in Math at INR 20,000",
    subtitle: "",
    quote:
      "Built by Fermion AI Labs — benchmarked to outperform ChatGPT in mathematical reasoning and logic.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/image2.png",
    link: "/blog/llm-math",
  },
  {
    title: "The Real World. Rebuilt as a Simulation",
    subtitle: "",
    quote:
      "CSP mirrors the pulse of corporate life — decisions, dilemmas, and real consequence.",
    date: "September 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
    link: "/blog/simulation",
  },
  {
    title: "From Campus to Corporate under 30 days",
    subtitle: "",
    quote:
      "CSP’s structured learning path transforms students into industry-ready professionals.",
    date: "September 2025",
    image: "/assets/InfiniteCardImages/image4.png",
    link: "/blog/campus-to-corporate",
  },
  {
    title: "A Community Built of Next-Gen AI Builders",
    subtitle: "",
    quote:
      "Fermion AI Labs is where builders and engineers learn to shape intelligence.",
    date: "July 2025",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&q=80",
    link: "/blog/ai-community",
  },
  {
    title: "AI That Designs Training Itself",
    subtitle: "",
    quote:
      "PI DOT’s adaptive intelligence crafts personalized simulation paths.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/image6.png",
    link: "/blog/pi-dot-ai",
  },
];

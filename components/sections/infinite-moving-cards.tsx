"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center antialiased bg-white dark:bg-black overflow-hidden">
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
    date: "28th March, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  },
  {
    title: "LLM That Outsmarts ChatGPT in Math at INR 20,000",
    subtitle: "",
    quote:
      "Built by Fermion AI Labs — benchmarked to outperform ChatGPT in mathematical reasoning and logic.",
    date: "5th April, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
  },
  {
    title: "The Real World. Rebuilt as a Simulation",
    subtitle: "",
    quote:
      "CSP mirrors the pulse of corporate life — decisions, dilemmas, and the pressure of real consequence.",
    date: "11th May, 2023",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500&q=80",
  },
  {
    title: "From Campus to Corporate under 30 days",
    subtitle: "",
    quote:
      "CSP’s structured learning path transforms students into industry-ready professionals.",
    date: "21st June, 2023",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&q=80",
  },
  {
    title: "A Community Built of Next-Gen AI Builders",
    subtitle: "",
    quote:
      "Fermion AI Labs is where the next generation of builders, thinkers, and engineers learn to shape intelligence.",
    date: "12th July, 2023",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&q=80",
  },
  {
    title: "AI That Designs Training Itself",
    subtitle: "",
    quote:
      "PI DOT’s adaptive intelligence crafts personalized simulation paths based on real-time learner data.",
    date: "2nd August, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  },
];

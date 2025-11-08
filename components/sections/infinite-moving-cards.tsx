"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center antialiased bg-black dark:bg-black overflow-hidden">
      <InfiniteMovingCards items={blogCards} direction="right" speed="slow" />
    </div>
  );
}

const blogCards = [
  {
    title: "Amazing Tailwind CSS",
    subtitle: "Grid Layouts",
    quote:
      "Grids are cool, but Tailwind grids are cooler. Learn how to create amazing grid layouts with Tailwind CSS and React.",
    date: "28th March, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  },
  {
    title: "Creative React UI",
    subtitle: "Animated Cards",
    quote:
      "Animated cards bring life to your website. Learn to make dynamic layouts using Framer Motion and Tailwind CSS.",
    date: "5th April, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
  },
  {
    title: "Modern Web Design",
    subtitle: "with Shadcn UI",
    quote:
      "Shadcn UI brings beautiful prebuilt components with Tailwind CSS. See how to integrate it for fast development.",
    date: "11th May, 2023",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500&q=80",
  },
  {
    title: "Next.js 15 Magic",
    subtitle: "Server Actions",
    quote:
      "Next.js 15 introduces powerful new features like server actions, improved routing, and faster rendering performance.",
    date: "21st June, 2023",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&q=80",
  },
  {
    title: "AI & Design",
    subtitle: "Creative Future",
    quote:
      "Explore how artificial intelligence is transforming design workflows — from generative art to layout automation.",
    date: "12th July, 2023",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&q=80",
  },
  {
    title: "UX Trends 2025",
    subtitle: "Minimalism Reloaded",
    quote:
      "Modern UX emphasizes clarity, contrast, and speed. Discover upcoming trends shaping the future of user experience.",
    date: "2nd August, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  },
  {
    title: "The Rise of TypeScript",
    subtitle: "Safer Code",
    quote:
      "TypeScript is revolutionizing modern web development by adding strong typing and better tooling to JavaScript.",
    date: "19th August, 2023",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
  },
  {
    title: "Building Brands",
    subtitle: "Through Design",
    quote:
      "A strong brand starts with strong visuals. Learn how colors, fonts, and layout consistency create lasting impressions.",
    date: "15th September, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
  },
  {
    title: "Freelancing Smart",
    subtitle: "Design as a Business",
    quote:
      "Learn how to build a design business that scales — from client acquisition to pricing and long-term brand value.",
    date: "10th October, 2023",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&q=80",
  },
];

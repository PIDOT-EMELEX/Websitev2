"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MovingBorder from "../moving-border";

export default function EverythingInYourControlUI() {
  const [activeTab, setActiveTab] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Design the role before you hire",
      description: "Define the exact competencies and requirements for your open positions with precision.",
      icon: "📋",
      image: "/pagedemo/screenshot-metrics.webp",
    },
    {
      id: 2,
      title: "Simulate your business environment",
      description: "Create realistic business scenarios that mirror real-world challenges candidates will face.",
      icon: "🎮",
      image: "/pagedemo/screenshot-emails.webp",
    },
    {
      id: 3,
      title: "Control evaluation criteria",
      description: "Set and customize evaluation metrics that matter most to your organization.",
      icon: "⚙️",
      image: "/pagedemo/screenshot-domain.webp",
    },
    {
      id: 4,
      title: "Watch candidates perform",
      description: "Observe how candidates approach problems and make real-time decisions.",
      icon: "👀",
      image: "/pagedemo/screenshot-domain.webp",
    },
    {
      id: 5,
      title: "Shortlist using performance signals",
      description: "Use data-driven insights to identify top performers automatically.",
      icon: "🎯",
      image: "/pagedemo/screenshot-domain.webp",
    },
    {
      id: 6,
      title: "Hire your right candidate",
      description: "Make confident hiring decisions backed by comprehensive performance data.",
      icon: "✅",
      image: "/pagedemo/screenshot-domain.webp",
    },
  ];

  return (
    <div className="w-full">
      {/* Card Grid */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            onClick={() => setActiveTab(card.id)}
            className={`group cursor-pointer rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
              activeTab === card.id
                ? "border-[#f69507] bg-gradient-to-br from-white/10 to-white/5"
                : "border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10"
            }`}
            whileHover={{ y: -4 }}
          >
            {/* Card Content */}
            <div className="p-6 md:p-8 relative z-10">
              <div className="mb-4 text-4xl">{card.icon}</div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#f69507] transition-colors duration-200">
                {card.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Step {card.id}
                </span>
              </div>

              {activeTab === card.id && (
                <div className="pointer-events-none absolute inset-0 z-[1] rounded-3xl">
                  <MovingBorder duration={3000} radius={28} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Content View */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 md:p-10 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {cards.find(c => c.id === activeTab)?.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl">
                {cards.find(c => c.id === activeTab)?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <motion.img
            key={cards.find(c => c.id === activeTab)?.image}
            src={cards.find(c => c.id === activeTab)?.image}
            alt={cards.find(c => c.id === activeTab)?.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 md:p-10 border-t border-white/10 bg-gradient-to-r from-white/5 to-transparent">
          <button
            onClick={() => setActiveTab(activeTab === 1 ? 6 : activeTab - 1)}
            className="px-6 py-2 rounded-full border border-white/30 text-white hover:border-[#f69507] hover:text-[#f69507] transition-colors"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTab === card.id
                    ? "bg-[#f69507] w-8"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveTab(activeTab === 6 ? 1 : activeTab + 1)}
            className="px-6 py-2 rounded-full border border-white/30 text-white hover:border-[#f69507] hover:text-[#f69507] transition-colors"
          >
            Next →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

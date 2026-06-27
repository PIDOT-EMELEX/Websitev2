"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Helper component for the world map background (using the existing world.svg)
function BackgroundMap() {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch("/world.svg")
      .then((r) => r.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.style.background = "transparent";
        svgEl.style.opacity = "0.15";

        svgEl.querySelectorAll("path").forEach((p) => {
          // A light orange path for constellation look
          p.setAttribute("fill", "transparent");
          p.setAttribute("stroke", "#f69507");
          p.setAttribute("stroke-width", "0.5");
        });

        setSvgContent(new XMLSerializer().serializeToString(svgEl));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-10" />
      {svgContent && (
        <div
          className="w-full h-full max-w-7xl opacity-50 scale-125 md:scale-100 mix-blend-screen"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  );
}

const timelineData = [
  {
    year: "2015",
    title: "Initial idea launched",
    image: "/about/working.jpg", // Using existing placeholder images
    description: "The core concept was developed and the first prototype was built to test with early adopters.",
  },
  {
    year: "2016",
    title: "Feature enhancements",
    image: "/about/team-office.jpg",
    description: "Expanded the platform with new tools and integrations based on extensive user feedback.",
  },
  {
    year: "2017",
    title: "Revenue milestone",
    image: "/about/member-1.jpg",
    description: "Reached our first major revenue milestone, proving the viability of our business model.",
  },
  {
    year: "2018",
    title: "International presence",
    image: "/about/member-2.jpg",
    description: "Opened our first international office and expanded our services globally.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white flex flex-col justify-end pt-32 pb-16 overflow-hidden">
      <BackgroundMap />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 flex flex-col h-full justify-between gap-16">
        
        {/* Top Header */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          >
            Learn about our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f69507] to-[#d17c00]">core values</span>,<br />
            our story and how we<br />
            balance work.
          </motion.h1>
        </div>

        {/* Timeline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 lg:mt-16 w-full"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f69507]/20 via-purple-500/10 to-cyan-500/20 opacity-40 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {timelineData.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-4 relative pt-4 md:pt-8">
                {/* Horizontal line extending rightwards (across the whole column width) */}
                <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-zinc-800/50" />
                
                {/* Dot left aligned directly above the column text */}
                <div className="hidden md:block absolute top-0 left-0 -translate-y-1/2 -translate-x-[2px] h-3 w-3 rounded-full bg-[#f69507] shadow-[0_0_12px_rgba(246,149,7,0.8)]">
                  <div className="absolute inset-0 rounded-full bg-white scale-[0.4]" />
                </div>

                {/* Mobile Dot (visible only on small screens) */}
                <div className="md:hidden flex items-center gap-4 mb-2">
                  <div className="h-3 w-3 rounded-full bg-[#f69507] shadow-[0_0_12px_rgba(246,149,7,0.8)] flex-shrink-0">
                    <div className="h-full w-full rounded-full bg-white scale-[0.4]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{item.year}</h4>
                </div>

                <div className="hidden md:block">
                  <h4 className="text-2xl font-bold text-white mb-4">{item.year}</h4>
                </div>

                <p className="text-[#f69507] font-semibold">{item.title}</p>
                
                <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2 border border-zinc-800/50">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

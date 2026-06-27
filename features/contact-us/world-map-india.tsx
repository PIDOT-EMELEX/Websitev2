"use client";

import { useEffect, useState, useRef } from "react";

export default function WorldMapIndia() {
  const [svgContent, setSvgContent] = useState<string>("");
  const [pinPos, setPinPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/world.svg")
      .then((r) => r.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        // Make SVG responsive
        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.style.background = "transparent";

        // Dim all paths
        svgEl.querySelectorAll("path").forEach((p) => {
          p.setAttribute("fill", "#1a1f2e");
          p.setAttribute("stroke", "#2a3040");
          p.setAttribute("stroke-width", "0.3");
        });

        // Highlight India
        const india = svgEl.querySelector("#IN");
        if (india) {
          india.setAttribute("fill", "#f69507"); // Yellow theme
          india.setAttribute("filter", "url(#indiaGlow)");
        }

        // Add glow filter
        const defs = doc.createElementNS("http://www.w3.org/2000/svg", "defs");
        defs.innerHTML = `
          <filter id="indiaGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        `;
        svgEl.insertBefore(defs, svgEl.firstChild);

        setSvgContent(new XMLSerializer().serializeToString(svgEl));
      })
      .catch(console.error);
  }, []);

  const measurePin = () => {
    const container = containerRef.current;
    if (!container) return;
    const indiaEl = container.querySelector("#IN") as SVGPathElement | null;
    if (!indiaEl) return;

    const rect = indiaEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Center of India's bounding box relative to map container
    const x = rect.left - containerRect.left + rect.width / 2;
    const y = rect.top - containerRect.top + rect.height / 2;

    setPinPos({ x, y });
  };

  useEffect(() => {
    if (!svgContent) return;

    // Measure initially and on window resize
    const timer = setTimeout(measurePin, 150);
    window.addEventListener("resize", measurePin);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measurePin);
    };
  }, [svgContent]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-visible">
      {svgContent ? (
        <div
          style={{ perspective: "800px", overflow: "visible" }}
          className="w-full h-full"
        >
          <div
            style={{
              transform: "rotateX(40deg) scale(1.15)",
              transformOrigin: "center 60%",
            }}
            className="w-full h-full"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-zinc-700 border-t-[#f69507] animate-spin" />
        </div>
      )}

      {/* "We are here" pin — yellow glowing beam + flat ellipse + badge */}
      {svgContent && pinPos && (
        <div
          className="absolute flex flex-col items-center pointer-events-none"
          style={{
            left: `${pinPos.x}px`,
            top: `${pinPos.y - 110}px`, // 110px accounts for badge + 60px beam + 10px spacing
            transform: "translateX(-50%)",
          }}
        >
          {/* Label */}
          <div className="relative rounded-2xl bg-[#1c1c1e] border border-zinc-800/80 px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <span className="text-[16px] font-normal text-white whitespace-nowrap tracking-wide">
              We are here
            </span>
            {/* Bottom yellow glow accent */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#f69507] to-transparent shadow-[0_1px_8px_rgba(246,149,7,0.8)]" />
          </div>

          {/* Glowing vertical beam */}
          <div
            className="w-[1.5px]"
            style={{
              height: "60px",
              background: "linear-gradient(to bottom, #f59e0b, #f69507, transparent)",
              boxShadow: "0 0 8px 1px rgba(246, 149, 7, 0.6)",
            }}
          />

          {/* Landing dot */}
          <div className="relative flex items-center justify-center">
            {/* White center dot */}
            <div className="absolute z-10 h-2.5 w-2.5 rounded-full bg-white border border-yellow-400 shadow-[0_0_8px_#ffffff]" />
          </div>
        </div>
      )}
    </div>
  );
}

"use client"

import { useEffect, useState } from "react"

export default function HeroMedia() {
  const fullText =
    `"A discounted cash flow model values a company by projecting future free cash flows and discounting them to present value using the weighted average cost of capital."`

  const [displayed, setDisplayed] = useState("")

  // Streaming effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 15)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-6xl rounded-xl overflow-hidden">

      {/* BACKGROUND BLUR IMAGE */}
      <img
        src="/pagedemo1/hero-wallpaper.png"
        alt="Demo background"
        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110"
      />

      {/* MAIN IMAGE */}
      <img
        src="/pagedemo1/hero-wallpaper.png"
        alt="Demo"
        className="relative w-full rounded-xl"
      />

      {/* VIDEO OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="aspect-[1.6] h-[80%]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/pagedemo1/pro-res-hevc-safari.mp4"
            type="video/mp4"
          />
          <source
            src="/pagedemo1/pro-res-vp9-chrome.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* ===== CLUELY STYLE GLASS AI CARD ===== */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[55%] rounded-2xl p-6
        bg-gradient-to-b from-[#21232a]/60 to-[#21232a]/80
        backdrop-blur-xl border border-white/20
        shadow-[0px_7px_30px_rgba(0,0,0,0.4)]
        text-white">

        {/* Question bubble */}
        <div className="flex justify-end">
          <div className="px-4 py-2 rounded-2xl rounded-br-md
            bg-blue-600/80 text-sm font-medium text-[#CBE3FF]">
            What should I say?
          </div>
        </div>

        {/* Streaming AI Text */}
        <div className="mt-6 text-base lg:text-lg leading-relaxed tracking-tight text-[#F2F2F5] max-w-[90%]">
          {displayed}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 space-y-4">

          {/* Options */}
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="flex items-center gap-1">
              ✨ What should I say?
            </span>

            <span className="hidden lg:block">•</span>

            <span className="hidden lg:flex items-center gap-1">
              💬 Follow-up questions
            </span>
          </div>

          {/* Input Box */}
          <div className="h-12 w-full flex items-center px-4 rounded-xl
            border border-white/20
            bg-[#1a1e2d]/50
            text-[#7A7A84]
            text-sm lg:text-base">
            Ask anything about the screen or conversation
          </div>

        </div>
      </div>

    </div>
  )
}

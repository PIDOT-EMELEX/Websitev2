"use client";

import { useState } from "react";
import MovingBorder from "../moving-border";

export default function EverythingInYourControlUI() {

const [activeTab, setActiveTab] = useState(1);
const [isOpen, setIsOpen] = useState(false);
  return (
    <div dir="ltr" data-orientation="horizontal">
        
        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden mb-4">

        {/* Selected Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border border-white/30 rounded-2xl p-4 text-left text-white bg-black"
        >
            {activeTab === 1 && "Design the role before you hire"}
            {activeTab === 2 && "Simulate your business environment"}
            {activeTab === 3 && "Control evaluation criteria"}
            {activeTab === 4 && "Watch candidates perform"}
            {activeTab === 5 && "Shortlist using performance signals"}
            {activeTab === 6 && "Hire your right candidate"}
        </button>

        {/* Dropdown Buttons */}
        {isOpen && (
            <div className="mt-2 flex flex-col gap-2">
            
            <button
                onClick={() => { setActiveTab(1); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Design the role before you hire
            </button>

            <button
                onClick={() => { setActiveTab(2); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Simulate your business environment
            </button>

            <button
                onClick={() => { setActiveTab(3); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Control evaluation criteria
            </button>

            <button
                onClick={() => { setActiveTab(4); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Watch candidates perform
            </button>

            <button
                onClick={() => { setActiveTab(5); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Shortlist using performance signals
            </button>

            <button
                onClick={() => { setActiveTab(6); setIsOpen(false); }}
                className="border border-white/30 rounded-2xl p-4 text-white bg-black"
            >
                Hire your right candidate
            </button>

            </div>
        )}

        </div>
        
        {/* TAB LIST */}
        <div
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        data-orientation="horizontal"
        className="hidden lg:grid mb-3 grid-cols-1 gap-3 md:mb-8 md:gap-8 lg:grid-cols-3"
        style={{ outline: 'none' }}
        >
        {/* ================= TAB 1 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 1}
            data-state={activeTab === 1 ? "active" : "inactive"}
            onClick={() => setActiveTab(1)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Design the role before you hire"
            id="radix-_R_1dpbr9fstb_-trigger-Design the role before you hire"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Design the role before you hire
            </h4>
            </div>

            </span>
            
            {activeTab === 1 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}
                        
        </button>
        

        {/* ================= TAB 2 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 2}
            data-state={activeTab === 2 ? "active" : "inactive"}
            onClick={() => setActiveTab(2)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Simulate your business environment"
            id="radix-_R_1dpbr9fstb_-trigger-Simulate your business environment"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="15" x="2" y="3" rx="2" />
                      <line x1="6" x2="6" y1="21" y2="18" />
                      <line x1="10" x2="10" y1="21" y2="18" />
                      <line x1="14" x2="14" y1="21" y2="18" />
                      <line x1="18" x2="18" y1="21" y2="18" />
                      <line x1="2" x2="22" y1="18" y2="18" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Simulate your business environment
            </h4>
            </div>

            </span>

            {activeTab === 2 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}

        </button>

        {/* ================= TAB 3 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 3}
            data-state={activeTab === 3 ? "active" : "inactive"}
            onClick={() => setActiveTab(3)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Control evaluation criteria"
            id="radix-_R_1dpbr9fstb_-trigger-Control evaluation criteria"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" x2="4" y1="21" y2="14" />
                      <line x1="4" x2="4" y1="10" y2="3" />
                      <line x1="12" x2="12" y1="21" y2="12" />
                      <line x1="12" x2="12" y1="8" y2="3" />
                      <line x1="20" x2="20" y1="21" y2="16" />
                      <line x1="20" x2="20" y1="12" y2="3" />
                      <line x1="2" x2="6" y1="14" y2="14" />
                      <line x1="10" x2="14" y1="8" y2="8" />
                      <line x1="18" x2="22" y1="16" y2="16" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Control evaluation criteria
            </h4>
            </div>

            </span>

            {activeTab === 3 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}

        </button>

        {/* ================= TAB 4 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 4}
            data-state={activeTab === 4 ? "active" : "inactive"}
            onClick={() => setActiveTab(4)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Watch candidates perform"
            id="radix-_R_1dpbr9fstb_-trigger-Watch candidates perform"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Watch candidates perform
            </h4>
            </div>

            </span>

            {activeTab === 4 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}

        </button>

        {/* ================= TAB 5 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 5}
            data-state={activeTab === 5 ? "active" : "inactive"}
            onClick={() => setActiveTab(5)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Shortlist using performance signals"
            id="radix-_R_1dpbr9fstb_-trigger-Shortlist using performance signals"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Shortlist using performance signals
            </h4>
            </div>

            </span>

            {activeTab === 5 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}

        </button>

        {/* ================= TAB 6 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 6}
            data-state={activeTab === 6 ? "active" : "inactive"}
            onClick={() => setActiveTab(6)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Hire your right candidate"
            id="radix-_R_1dpbr9fstb_-trigger-Hire your right candidate"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-white/30 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-white/30 data-[state='active']:border-white/30"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-white/30 text-white group-data-[state=active]:text-[#f69507] relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-[#f69507]"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-white">
                Hire your right candidate
            </h4>
            </div>

            </span>

            {activeTab === 6 && (
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-2xl">
                <MovingBorder duration={3000} radius={28} />
            </div>
            )}

        </button>
        </div>


        <div className="grid">
            {/* ================= TAB PANEL 1 ================= */}
            <div
            data-state={activeTab === 1 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Design the role before you hire"
            id="radix-_R_1dpbr9fstb_-content-Design the role before you hire"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 1
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-metrics.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>

            {/* ================= TAB PANEL 2 ================= */}
            <div
            data-state={activeTab === 2 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Simulate your business environment"
            id="radix-_R_1dpbr9fstb_-content-Simulate your business environment"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 2
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-emails.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>

            {/* ================= TAB PANEL 3 ================= */}
            <div
            data-state={activeTab === 3 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Control evaluation criteria"
            id="radix-_R_1dpbr9fstb_-content-Control evaluation criteria"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 3
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-domain.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>

            {/* ================= TAB PANEL 4 ================= */}
            <div
            data-state={activeTab === 4 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Watch candidates perform"
            id="radix-_R_1dpbr9fstb_-content-Watch candidates perform"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 4
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-domain.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>

            {/* ================= TAB PANEL 5 ================= */}
            <div
            data-state={activeTab === 5 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Shortlist using performance signals"
            id="radix-_R_1dpbr9fstb_-content-Shortlist using performance signals"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 5
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-domain.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>

            {/* ================= TAB PANEL 6 ================= */}
            <div
            data-state={activeTab === 6 ? "active" : "inactive"}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Hire your right candidate"
            id="radix-_R_1dpbr9fstb_-content-Hire your right candidate"
            tabIndex={0}
            className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${
                activeTab === 6
                ? "opacity-100 translate-y-0 scale-[1]"
                : "opacity-0 -translate-y-6 scale-[0.98] pointer-events-none"
            }`}
            >
            <div style={{ opacity: 1, transform: 'none' }}>
                <img
                alt="Resend Dashboard - Overview"
                src="/pagedemo/screenshot-domain.webp"
                loading="lazy"
                width={1232}
                height={657}
                decoding="async"
                data-nimg="1"
                className="w-full rounded-2xl border border-white/20"
                style={{ color: 'transparent' }}
                />
            </div>
            </div>
        </div>
    </div>
  );
}

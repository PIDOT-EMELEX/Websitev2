"use client";

import { useState } from "react";
import MovingBorder from "../moving-border";

export default function EverythingInYourControlUI() {

const [activeTab, setActiveTab] = useState(1);
  return (
    <div dir="ltr" data-orientation="horizontal">
        {/* TAB LIST */}
        <div
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        data-orientation="horizontal"
        className="mb-3 grid grid-cols-1 gap-3 md:mb-8 md:gap-8 lg:grid-cols-3"
        style={{ outline: 'none' }}
        >
        {/* ================= TAB 1 ================= */}
        <button
            type="button"
            role="tab"
            aria-selected={activeTab === 1}
            data-state={activeTab === 1 ? "active" : "inactive"}
            onClick={() => setActiveTab(1)}
            aria-controls="radix-_R_1dpbr9fstb_-content-Intuitive Analytics"
            id="radix-_R_1dpbr9fstb_-trigger-Intuitive Analytics"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-slate-600 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-slate-600 data-[state='active']:border-slate-600"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-slate-600 text-slate-12 group-data-[state=active]:text-green-9 relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}
                     className="analytics-icon"
                >
                    {/* SVG — KEPT EXACT (NO CHANGES) */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 500 500"
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: 'translate3d(0px, 0px, 0px)',
                        contentVisibility: 'visible',
                    }}
                    >
                    <defs>
                        <clipPath id="__lottie_element_2">
                        <rect width="500" height="500" x="0" y="0" />
                        </clipPath>
                        <clipPath id="__lottie_element_5">
                        <path d="M0,0 L500,0 L500,500 L0,500z" />
                        </clipPath>
                    </defs>

                    <g
                    clipPath="url(#__lottie_element_5)"
                    style={{ display: 'block' }}
                    transform="matrix(1,0,0,1,0,0)"
                    opacity="1"
                    >
                    {/* ---- Small bar 1 ---- */}
                    <g
                        className="primary design"
                        style={{ display: 'none' }}
                        transform="matrix(20.829999923706055,0,0,20.829999923706055,114.58399963378906,343.6759948730469)"
                        opacity="1"
                    >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                            className="primary"
                            stroke="rgb(255,255,255)"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            d="M-1.75,3.75 C-1.75,3.75 1.75,3.75 1.75,3.75 C1.75,3.75 1.75,-3.7500040531158447 1.75,-3.7500040531158447 C1.75,-3.7500040531158447 -1.75,-3.7500040531158447 -1.75,-3.7500040531158447 C-1.75,-3.7500040531158447 -1.75,3.75 -1.75,3.75z"
                        />
                        </g>
                    </g>

                    {/* ---- Small bar 2 ---- */}
                    <g
                        className="primary design"
                        style={{ display: 'none' }}
                        transform="matrix(20.829999923706055,0,0,20.829999923706055,385.38800048828125,302.0780029296875)"
                        opacity="1"
                    >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                            className="primary"
                            stroke="rgb(255,255,255)"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            d="M-1.75,5.75 C-1.75,5.75 1.75,5.75 1.75,5.75 C1.75,5.75 1.75,-5.750002861022949 1.75,-5.750002861022949 C1.75,-5.750002861022949 -1.75,-5.750002861022949 -1.75,-5.750002861022949 C-1.75,-5.750002861022949 -1.75,5.75 -1.75,5.75z"
                        />
                        </g>
                    </g>

                    {/* ---- Small bar 3 ---- */}
                    <g
                        className="primary design"
                        style={{ display: 'none' }}
                        transform="matrix(20.829999923706055,0,0,20.829999923706055,250,260.4020080566406)"
                        opacity="1"
                    >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                            className="primary"
                            stroke="rgb(255,255,255)"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            d="M-1.75,7.75 C-1.75,7.75 1.75,7.75 1.75,7.75 C1.75,7.75 1.75,-7.749996185302734 1.75,-7.749996185302734 C1.75,-7.749996185302734 -1.75,-7.749996185302734 -1.75,-7.749996185302734 C-1.75,-7.749996185302734 -1.75,7.75 -1.75,7.75z"
                        />
                        </g>
                    </g>

                    {/* ---- Active bars (visible) ---- */}
                    <g
                        className="primary design"
                        style={{ display: 'block' }}
                        transform="matrix(20.829999923706055,0,0,20.829999923706055,-4957.498046875,-4957.498046875)"
                        opacity="1"
                    >
                        <g opacity="1" transform="matrix(1,0,0,1,243.5,254.5)">
                        <path
                            className="primary"
                            fill="rgb(255,255,255)"
                            fillOpacity="1"
                            d="M1.75,4.5 C1.75,4.5 -1.75,4.5 -1.75,4.5 C-2.1600000858306885,4.5 -2.5,4.159999847412109 -2.5,3.75 C-2.5,3.75 -2.5,-3.75 -2.5,-3.75 C-2.5,-4.170000076293945 -2.1600000858306885,-4.5 -1.75,-4.5 C-1.75,-4.5 1.75,-4.5 1.75,-4.5 C2.1600000858306885,-4.5 2.5,-4.170000076293945 2.5,-3.75 C2.5,-3.75 2.5,3.75 2.5,3.75 C2.5,4.159999847412109 2.1600000858306885,4.5 1.75,4.5z M-1,3 C-1,3 1,3 1,3 C1,3 1,-3 1,-3 C1,-3 -1,-3 -1,-3 C-1,-3 -1,3 -1,3z"
                        />
                        </g>

                        <g opacity="1" transform="matrix(1,0,0,1,256.5,252.5)">
                        <path
                            className="primary"
                            fill="rgb(255,255,255)"
                            fillOpacity="1"
                            d="M1.75,6.5 C1.75,6.5 -1.75,6.5 -1.75,6.5 C-2.1600000858306885,6.5 -2.5,6.159999847412109 -2.5,5.75 C-2.5,5.75 -2.5,-5.75 -2.5,-5.75 C-2.5,-6.159999847412109 -2.1600000858306885,-6.5 -1.75,-6.5 C-1.75,-6.5 1.75,-6.5 1.75,-6.5 C2.1600000858306885,-6.5 2.5,-6.159999847412109 2.5,-5.75 C2.5,-5.75 2.5,5.75 2.5,5.75 C2.5,6.159999847412109 2.1600000858306885,6.5 1.75,6.5z M-1,5 C-1,5 1,5 1,5 C1,5 1,-5 1,-5 C1,-5 -1,-5 -1,-5 C-1,-5 -1,5 -1,5z"
                        />
                        </g>

                        <g opacity="1" transform="matrix(1,0,0,1,250,250.5)">
                        <path
                            className="primary"
                            fill="rgb(255,255,255)"
                            fillOpacity="1"
                            d="M1.75,8.5 C1.75,8.5 -1.75,8.5 -1.75,8.5 C-2.1600000858306885,8.5 -2.5,8.15999984741211 -2.5,7.75 C-2.5,7.75 -2.5,-7.75 -2.5,-7.75 C-2.5,-8.15999984741211 -2.1600000858306885,-8.5 -1.75,-8.5 C-1.75,-8.5 1.75,-8.5 1.75,-8.5 C2.1600000858306885,-8.5 2.5,-8.15999984741211 2.5,-7.75 C2.5,-7.75 2.5,7.75 2.5,7.75 C2.5,8.15999984741211 2.1600000858306885,8.5 1.75,8.5z M-1,7 C-1,7 1,7 1,7 C1,7 1,-7 1,-7 C1,-7 -1,-7 -1,-7 C-1,-7 -1,7 -1,7z"
                        />
                        </g>
                    </g>
                    </g>

                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-green-400"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-slate-12">
                Intuitive Analytics
            </h4>
            </div>

            </span>

            <span
            aria-hidden="true"
            className="absolute inset-0 z-0 scale-x-[1.5] blur-xs group-data-[state=active]:before:absolute group-data-[state=active]:before:from-0% group-data-[state=active]:before:inset-0 group-data-[state=active]:before:top-1/2 group-data-[state=active]:before:w-[400px] group-data-[state=active]:before:animate-disco-border group-data-[state=active]:before:bg-conic group-data-[state=active]:before:from-green-11 group-data-[state=active]:before:via-transparent group-data-[state=active]:before:to-transparent"
            />
            
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
            aria-controls="radix-_R_1dpbr9fstb_-content-Full Visibility"
            id="radix-_R_1dpbr9fstb_-trigger-Full Visibility"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-slate-600 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-slate-600 data-[state='active']:border-slate-600"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-slate-600 text-slate-12 group-data-[state=active]:text-green-9 relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 500 500"
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: 'translate3d(0px, 0px, 0px)',
                        contentVisibility: 'visible',
                    }}
                    >
                    <defs>
                        <clipPath id="__lottie_element_24">
                        <rect width="500" height="500" x="0" y="0" />
                        </clipPath>
                        <clipPath id="__lottie_element_27">
                        <path d="M0,0 L500,0 L500,500 L0,500z" />
                        </clipPath>
                    </defs>

                    <g clipPath="url(#__lottie_element_24)">
                        <g
                        clipPath="url(#__lottie_element_27)"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={{ display: 'block' }}
                        >
                        {/* -------- Rectangle outline -------- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,249.99899291992188,250.0030059814453)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M192.70899963378906,151.04200744628906 C192.70899963378906,151.04200744628906 -192.70899963378906,151.04200744628906 -192.70899963378906,151.04200744628906 C-192.70899963378906,151.04200744628906 -192.70899963378906,-151.04200744628906 -192.70899963378906,-151.04200744628906 C-192.70899963378906,-151.04200744628906 192.70899963378906,-151.04200744628906 192.70899963378906,-151.04200744628906 C192.70899963378906,-151.04200744628906 192.70899963378906,151.04200744628906 192.70899963378906,151.04200744628906z"
                            />
                            </g>
                        </g>

                        {/* -------- Envelope top -------- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,249.99899291992188,187.5030059814453)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M192.70899963378906,-88.54199981689453 C192.70899963378906,-88.54199981689453 45.340999603271484,62.4205436706543 45.340999603271484,62.4205436706543 C20.69499969482422,87.66759490966797 -20.69499969482422,87.66759490966797 -45.340999603271484,62.4205436706543 C-45.340999603271484,62.4205436706543 -192.70899963378906,-88.54199981689453 -192.70899963378906,-88.54199981689453"
                            />
                            </g>
                        </g>

                        {/* -------- Zero-length path (kept as-is) -------- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,249.99899291992188,187.5030059814453)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M0 0"
                            />
                            </g>
                        </g>

                        {/* -------- Filled envelope (hidden) -------- */}
                        <g
                            className="primary design"
                            transform="matrix(1,0,0,1,250,250)"
                            opacity="1"
                            style={{ display: 'none' }}
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                fill="rgb(255,255,255)"
                                fillOpacity="1"
                                d="M208.3459930419922,-151.28700256347656 C208.34100341796875,-151.5679931640625 208.32200622558594,-151.8470001220703 208.30299377441406,-152.1269989013672 ..."
                            />
                            </g>
                        </g>

                        {/* -------- Empty hidden group -------- */}
                        <g className="primary design" style={{ display: 'none' }}>
                            <g>
                            <path className="primary" />
                            </g>
                        </g>
                        </g>

                    </g>
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-green-400"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-slate-12">
                Full Visibility
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
            aria-controls="radix-_R_1dpbr9fstb_-content-Domain Authentication"
            id="radix-_R_1dpbr9fstb_-trigger-Domain Authentication"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
            className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-slate-600 p-6 md:h-[5.625rem] outline-hidden focus-visible:ring-2 focus-visible:ring-slate-600 data-[state='active']:border-slate-600"
        >
            <span className="absolute inset-px z-10 grid place-items-center rounded-2xl bg-black group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-white/[3%] group-data-[state=active]:via-white/[1%] group-data-[state=active]:to-black">
            <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
            <div className="align-center border-slate-600 text-slate-12 group-data-[state=active]:text-green-9 relative flex h-10 w-10 justify-center overflow-hidden rounded-xl bg-gradient-to-bl from-white/[6%] p-2 transition-all duration-150 ease-in-out group-data-[state=active]:from-white/10 md:border">
                <div className="relative flex h-full w-full items-center justify-center">
                <div style={{ width: 18, height: 18 }}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 500 500"
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: 'translate3d(0px, 0px, 0px)',
                        contentVisibility: 'visible',
                    }}
                    >
                    <defs>
                        <clipPath id="__lottie_element_46">
                        <rect width="500" height="500" x="0" y="0" />
                        </clipPath>
                        <clipPath id="__lottie_element_49">
                        <path d="M0,0 L500,0 L500,500 L0,500z" />
                        </clipPath>
                    </defs>

                    <g clipPath="url(#__lottie_element_46)">
                        <g
                        clipPath="url(#__lottie_element_49)"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={{ display: 'block' }}
                        >
                        {/* ---- Outer circle ---- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,250.00399780273438,250.0030059814453)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M192.70899963378906,0 C192.70899963378906,106.43000030517578 106.43000030517578,192.70899963378906 0,192.70899963378906 C-106.43000030517578,192.70899963378906 -192.70899963378906,106.43000030517578 -192.70899963378906,0 C-192.70899963378906,-106.43000030517578 -106.43000030517578,-192.70899963378906 0,-192.70899963378906 C106.43000030517578,-192.70899963378906 192.70899963378906,-106.43000030517578 192.70899963378906,0z"
                            />
                            </g>
                        </g>

                        {/* ---- Horizontal line ---- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,250.00399780273438,250.0030059814453)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M-192.70899963378906,0 C-192.70899963378906,0 -106.00399780273438,0 2.996000051498413,0 C141.99600219726562,0 192.70899963378906,0 192.70899963378906,0"
                            />
                            </g>
                        </g>

                        {/* ---- Right arc ---- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,0,0.001007080078125)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,202.5030059814453,250.00399780273438)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M78.18621826171875,190.2521514892578 C184.46145629882812,171.99057006835938 240.4475555419922,85 240.4475555419922,0 C240.4475555419922,-85 184.46145629882812,-168.00015258789062 78.18621826171875,-190.99984741210938"
                            />
                            </g>
                        </g>

                        {/* ---- Inner arcs ---- */}
                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,0,0.001007080078125)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,202.5030059814453,250.00399780273438)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M75.47502136230469,190.62600708007812 C98.14456176757812,158.33399963378906 115.05220794677734,85 115.05220794677734,0 C115.05220794677734,-85 98.14456176757812,-158.33399963378906 75.47502136230469,-190.62600708007812"
                            />
                            </g>
                        </g>

                        <g
                            className="primary design"
                            style={{ display: 'block' }}
                            transform="matrix(1,0,0,1,0,0.001007080078125)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,202.5030059814453,250.00399780273438)">
                            <path
                                className="primary"
                                stroke="rgb(255,255,255)"
                                strokeOpacity="1"
                                strokeWidth="31.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fillOpacity="0"
                                d="M20.20800018310547,190.62600708007812 C-3.5741844177246094,158.33963012695312 -20.257410049438477,85 -20.257410049438477,0 C-20.257410049438477,-85 -3.5747807025909424,-158.34002685546875 20.20800018310547,-190.62600708007812"
                            />
                            </g>
                        </g>

                        {/* ---- Filled version (hidden) ---- */}
                        <g
                            className="primary design"
                            transform="matrix(1,0,0,1,250,250)"
                            opacity="1"
                            style={{ display: 'none' }}
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                className="primary"
                                fill="rgb(255,255,255)"
                                fillOpacity="1"
                                d="M0.004000000189989805,-208.3560028076172 C-114.88600158691406,-208.3560028076172 -208.3560028076172,-114.88700103759766 -208.3560028076172,0.003000000026077032 C-208.3560028076172,114.89299774169922 -114.88600158691406,208.36199951171875 0.004000000189989805,208.36199951171875 C114.89399719238281,208.36199951171875 208.36300659179688,114.89299774169922 208.36300659179688,0.003000000026077032 C208.36300659179688,-114.88700103759766 114.89399719238281,-208.3560028076172 0.004000000189989805,-208.3560028076172z"
                            />
                            </g>
                        </g>

                        {/* ---- Empty hidden group ---- */}
                        <g className="primary design" style={{ display: 'none' }}>
                            <g>
                            <path className="primary" />
                            </g>
                        </g>
                        </g>

                    </g>
                    </svg>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-transparent mix-blend-darken group-data-[state=active]:bg-green-400"
                />
                </div>
            </div>

            <h4 className="font-display effect-font-styling text-base tracking-tighter text-slate-12">
                Domain Authentication
            </h4>
            </div>

            </span>

            {activeTab === 3 && (
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
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Intuitive Analytics"
            id="radix-_R_1dpbr9fstb_-content-Intuitive Analytics"
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
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Full Visibility"
            id="radix-_R_1dpbr9fstb_-content-Full Visibility"
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
            aria-labelledby="radix-_R_1dpbr9fstb_-trigger-Domain Authentication"
            id="radix-_R_1dpbr9fstb_-content-Domain Authentication"
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
        </div>
    </div>
  );
}

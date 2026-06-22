"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic"; 
import Link from "next/link";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";
import { ArrowRight } from "lucide-react";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

  export function GlobeDemo() {
    const globeConfig = {
      pointSize: 4,
      globeColor: "#4A4A4A",//"#062056"
      showAtmosphere: true,
      atmosphereColor: "#FFFFFF",
      atmosphereAltitude: 0.1,
      emissive: "#4A4A4A",//"#062056"
      emissiveIntensity: 0.1,
      shininess: 0.9,
      polygonColor: "rgba(255,255,255,0.7)",
      ambientLight: "#000000ff", //"#38bdf8"
      directionalLeftLight: "#ffffff",
      directionalTopLight: "#ffffff",
      pointLight: "#ffffff",
      arcTime: 1000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
    };
    const colors = ["#ffb13b", "#f69507", "#6366f1"];
    const sampleArcs = [
      {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 1,
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -1.303396,
        endLng: 36.852443,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: -15.785493,
        startLng: -47.909029,
        endLat: 36.162809,
        endLng: -115.119411,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: 21.3099,
        startLng: -157.8581,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 5,
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 5,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -33.8688,
        endLng: 151.2093,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 5,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 6,
        startLat: -15.432563,
        startLng: 28.315853,
        endLat: 1.094136,
        endLng: -63.34546,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 6,
        startLat: 37.5665,
        startLng: 126.978,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 6,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 7,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 7,
        startLat: 48.8566,
        startLng: -2.3522,
        endLat: 52.52,
        endLng: 13.405,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 7,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 8,
        startLat: -8.833221,
        startLng: 13.264837,
        endLat: -33.936138,
        endLng: 18.436529,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 8,
        startLat: 49.2827,
        startLng: -123.1207,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 8,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 9,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 9,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 9,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 10,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: 28.6139,
        endLng: 77.209,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 10,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 10,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 11,
        startLat: 41.9028,
        startLng: 12.4964,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 11,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 11,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 1.3521,
        endLng: 103.8198,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 12,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 12,
        startLat: 35.6762,
        startLng: 139.6503,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 12,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 13,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 13,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 13,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 14,
        startLat: -33.936138,
        startLng: 18.436529,
        endLat: 21.395643,
        endLng: 39.883798,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
    ];

  return (
    <section className="relative flex flex-col md:flex-row lg:min-h-screen items-center justify-between md:flex-row md:pb-5">
      {/* === Text Section === */}
      <div className="w-full mx-auto text-center px-4 ms:mt-10 z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display effect-font-styling effect-font-gradient sm:text-left text-center mb-2 sm:px-5 md:px-10 lg:px-20 text-[3rem] leading-[120%] tracking-tighter md:text-[3.5rem]"
        >
           Global Enterprise Hiring Redefined
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base md:text-[1.125rem] md:leading-[1.5] sm:text-left text-center text-white/60 font-normal text-balance mb-6 sm:px-5 md:px-10 lg:px-20"
        >
          AI Powered Corporate Simulation Software for Hiring Global Teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-row gap-6 items-center sm:justify-start justify-center sm:px-5 md:px-10 lg:px-20 mb-8"
        >
          <Modal>
            <ModalTrigger
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/10 px-6 py-3 text-sm font-medium transition cursor-pointer text-center group/modal-btn relative overflow-hidden"
            >
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Book a Call
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20 space-x-2">
                <img
                  src={"/assets/pi-dot-logomark.svg"}
                  width={20}
                  height={20}
                  alt="Pi Dot Logo Mark"
                />
                <img
                  src={"/assets/pi-dot-wordmark.svg"}
                  width={60}
                  height={30}
                  alt="Pi Dot Word Mark"
                />
              </div>
            </ModalTrigger>
            <ModalBody className="dark:bg-neutral-950 dark:border-white/10 max-w-lg md:max-w-xl text-white">
              <ModalContent className="overflow-y-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-left">
                  Book a Call
                </h3>
                <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("Booking request submitted successfully!"); }}>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Contact (Email Preferred)</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Profession / Representing Whom</label>
                    <input
                      type="text"
                      placeholder="College, Startup, Founder..."
                      className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 font-medium">Reason For Appointment</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-[#f69507] px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#f69507] hover:bg-[#ffad33] py-3 text-black font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </ModalContent>
            </ModalBody>
          </Modal>
          <Link
            href="/enterprise"
            className="inline-flex items-center rounded-2xl text-white/70 hover:text-white px-6 py-3 text-sm font-medium transition cursor-pointer"
          >
            Know More
          </Link>
        </motion.div>
      </div>

      {/* === Globe Section (Outside Container) === */}
      <div className="relative w-full flex justify-center items-center z-10">
        {/* 🔥 Increased Globe Height */}
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] -mt-6 md:-mt-10 lg:mt-0">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>

      {/* === Bottom Gradient Overlay === */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}

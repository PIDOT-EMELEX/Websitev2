"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { ArrowRight } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Book" },
    { text: "your" },
    { text: "discovery" },
    { text: "session" },
    {
      text: "Today!",
      className: "text-[#f69507] dark:text-[#f69507]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance text-center">
        Ready to Rethink Hiring, Talent Training, and Workforce Readiness?
      </p>

      <TypewriterEffectSmooth words={words} />

      {/* ✅ Buttons now side-by-side on mobile, unchanged on desktop */}
      <div className="flex flex-row md:flex-row space-x-3 md:space-x-4 mt-4">
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
        <button className="inline-flex items-center justify-center rounded-2xl bg-white text-black border border-black px-6 py-3 text-sm font-medium transition cursor-pointer text-center">
          Explore More
        </button>
      </div>
    </div>
  );
}

import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { ArrowRight } from "lucide-react";

export default function HeroUI() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* HEADLINE */}
      <h1
        className="text-[56px] leading-[102%] font-medium tracking-[-1px] text-white lg:text-[80px]"
        style={{ fontFamily: "EB Garamond" }}
      >
        <span className="block overflow-hidden">
          <span>Simulate</span> <span>Before</span>
        </span>
        <span className="block overflow-hidden">
          <span>You</span> <span>Hire</span>
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="max-w-2xl text-white/90 text-base lg:text-[19px] leading-[140%]">
        Simulate real job scenarios and evaluate candidates based on
        <br className="hidden md:block" />
        how they think, decide, and execute.
      </p>

      {/* CTA */}
      <div className="flex gap-3">
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
      
        {/* MOBILE */}
        <button className="cta-button flex sm:hidden">
            {/* BLURRED BORDER */}
            <span className="absolute inset-0 z-20 blur-[1px] pointer-events-none">
                <span className="blurred-border absolute -top-px -left-px h-full w-full" />
            </span>

            {/* SHIMMER */}
            <span className="absolute -top-4 -left-12 h-[153px] w-[54px] opacity-40 shimmer pointer-events-none">
                <span className="shimmer-gradient h-full w-full block" />
            </span>
            {/* <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-laptop" 
                aria-hidden="true">
                <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946" />
            </svg> */}
          <span>Explore more</span>
        </button>

        {/* DESKTOP */}
        <a href="#" className="cta-button hidden sm:flex">
            {/* BLURRED BORDER */}
            <span className="absolute inset-0 z-20 blur-[1px] pointer-events-none">
                <span className="blurred-border absolute -top-px -left-px h-full w-full" />
            </span>

            {/* SHIMMER */}
            <span className="absolute -top-4 -left-12 h-[153px] w-[54px] opacity-40 shimmer pointer-events-none">
                <span className="shimmer-gradient h-full w-full block" />
            </span>
            {/* <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="mb-0.5" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z" />
            </svg> */}
          <span>Explore more</span>
        </a>
      </div>
    </div>
  );
}

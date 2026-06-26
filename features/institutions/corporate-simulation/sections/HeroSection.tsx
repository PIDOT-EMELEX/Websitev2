import Button from "../ui/HeroSectionButtonUI";
import BlackCubeScene from "../BlackCubeScene";
import { BookCallLink } from "@/components/ui/book-call-link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="w-full max-w-full mx-auto px-6 lg:px-16">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center max-w-2xl lg:pl-0">
            <h1 className="font-display effect-font-styling effect-font-gradient text-[3rem] leading-[120%] tracking-tighter md:text-[3.5rem] text-center sm:text-left">
              Corporate Simulation <br /> for Colleges
            </h1>

            <p className="mt-6 text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance text-center sm:text-left">
              Industry-led, hands-on business simulations
              <br className="hidden sm:block" />
              and delivered in collaboration with top companies
            </p>

            <div className="mt-10 flex flex-row gap-6 items-center justify-center sm:justify-start">
              <BookCallLink />
              <a
                href="#simulation-cards"
                className="inline-flex items-center rounded-2xl text-white/70 hover:text-white px-6 py-3 text-sm font-medium transition cursor-pointer"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* ================= RIGHT SPACE + CUBE ================= */}
          <div className="relative hidden lg:block bg-black">
            <div className="absolute inset-8">
              <BlackCubeScene />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

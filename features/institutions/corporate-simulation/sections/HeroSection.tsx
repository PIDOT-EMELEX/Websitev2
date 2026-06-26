import Container from "../ui/HeroSectionContainerUI";
import Button from "../ui/HeroSectionButtonUI";
import BlackCubeScene from "../BlackCubeScene";
import { BookCallLink } from "@/components/ui/book-call-link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <Container>
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center max-w-2xl lg:pl-16 scale-110">
            <h1 className="font-serif text-6xl leading-tight">
              Corporate Simulation <br /> for Colleges
            </h1>

            <p className="mt-6 text-white/70">
              Industry-led, hands-on business simulations
              <br />
              and delivered in collaboration with top companies
            </p>

            <div className="mt-10 flex items-center gap-6">
              <BookCallLink />
              <Button variant="ghost">Explore More</Button>
            </div>
          </div>

          {/* ================= RIGHT SPACE + CUBE (UNCHANGED) ================= */}
          <div className="relative hidden lg:block bg-black overflow-hidden">
            <div className="pt-5 absolute inset-0 scale-90">
              <BlackCubeScene />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

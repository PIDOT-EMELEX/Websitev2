import Container from "../ui/HeroSectionContainerUI";
import Button from "../ui/HeroSectionButtonUI";
import BlackCubeScene from "../BlackCubeScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <Container>
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center max-w-2xl lg:pl-16 scale-110">
            <h1 className="font-serif text-6xl leading-tight">
              Email for <br /> developers
            </h1>

            <p className="mt-6 text-white/70">
              The best way to reach humans instead of spam folders.
              <br />
              Deliver transactional and marketing emails at scale.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Button>Get Started</Button>
              <Button variant="ghost">Documentation</Button>
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

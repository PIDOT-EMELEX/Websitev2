import HeroSection from "../../pages/pagedemo1/sections/HeroSection";
import FeatureSection from "../../pages/pagedemo1/sections/FeatureSection";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
    <section
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/pagedemo1/hero-bg4.png')",
        // backgroundSize: "cover",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* DARKEN OVERLAY */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" /> */}

      <HeroSection />
    </section>
    <FeatureSection />
    </main>
  );
}
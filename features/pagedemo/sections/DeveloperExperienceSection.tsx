import DeveloperExperienceUI from "../ui/DeveloperExperienceUI";

export default function DeveloperExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Heading */}
      <h2 className="font-display text-white text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-left mb-3">
        First-class <br />
        developer experience
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-[1.125rem] leading-[1.6] text-gray-400 text-left max-w-4xl mb-12">
        We are a team of engineers who love building tools for other engineers.
        <br />
        Our goal is to create the email platform we've always wished we had — one that <em className="italic">just works</em>.
        
      </p>
      <DeveloperExperienceUI />
    </section>
  );
}

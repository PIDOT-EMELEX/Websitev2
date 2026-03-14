import GoBeyondEditingUI from "../ui/GoBeyondEditingUI";

export default function GoBeyondEditingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Heading */}
      <h2 className="font-display text-white text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] text-left mb-3">
        Go beyond editing
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-[1.125rem] leading-[1.6] text-gray-400 text-left max-w-4xl mb-12">
        Group and control your contacts in a simple and intuitive way.
        <br />
        Straightforward analytics and reporting tools that will help you send better emails.
      </p>
      <GoBeyondEditingUI />
    </section>
  );
}

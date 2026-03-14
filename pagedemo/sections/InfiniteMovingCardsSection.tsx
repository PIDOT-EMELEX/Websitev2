"use client";

import { InfiniteMovingCards } from "../ui/InfiniteMovingCardsUI";

export default function InfiniteMovingCardsSection() {
  return (
    <section className="mx-auto py-12 sm:py-24 px-0">
      {/* Heading */}
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-2 text-center">
        Beyond expectations
      </h2>

      {/* Sub text */}
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/70 font-normal text-balance mb-24 text-center">
        Resend is driving remarkable developer experiences that enable success
        <br className="hidden sm:block" />
        stories, empower businesses, and fuel growth across industries and individuals.
      </p>

      {/* Cards container (IMPORTANT STRUCTURE) */}
      <div className="group mx-auto -ml-6 -mr-6 flex w-[calc(100%+24px)] items-start overflow-hidden">
        <div className="flex cursor-grab active:cursor-grabbing select-none gap-8">
          <div className="flex flex-row flex-nowrap gap-8">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="fast"
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Our team loves Resend. It makes email sending so easy and reliable.",
    name: "Vlad Matsiiako",
    title: "Co-founder of Infisical",
    logo: "https://cdn.resend.com/posts/logo-infisical.jpg",
    avatar: "/static/avatars/vlad-matsiiako.jpg",
  },
  {
    quote: "Our team loves Resend. It makes email sending so easy and reliable.",
    name: "Vlad Matsiiako",
    title: "Co-founder of Infisical",
    logo: "https://cdn.resend.com/posts/logo-infisical.jpg",
    avatar: "/static/avatars/vlad-matsiiako.jpg",
  },
  {
    quote: "Our team loves Resend. It makes email sending so easy and reliable.",
    name: "Vlad Matsiiako",
    title: "Co-founder of Infisical",
    logo: "https://cdn.resend.com/posts/logo-infisical.jpg",
    avatar: "/static/avatars/vlad-matsiiako.jpg",
  },
];

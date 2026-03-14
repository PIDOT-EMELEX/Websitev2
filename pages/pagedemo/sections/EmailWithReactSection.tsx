"use client";

import EmailWithReactUI from "../ui/EmailWithReactUI";

export default function EmailWithReactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        width={170}
        height={170}
        src="/pagedemo/3d-react.mp4"
        className="mx-auto mb-6"
      />

      {/* Heading */}
        <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-5 text-center">
            Develop emails using React
        </h2>

        {/* Description */}
        <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/70 font-normal text-balance text-center">
            Create beautiful templates without having to deal with &lt;table&gt; layouts
            and HTML.
            <br className="hidden sm:block" /> Powered by react-email, our open source
            component library.
        </p>

        {/* CTA Buttons */}
        <div className="mx-auto my-10 flex flex-col justify-center gap-4 px-10 sm:max-w-none sm:flex-row sm:px-0 md:mb-20">
            {/* Primary Button */}
            <a
            href="/signup"
            className="
                relative inline-flex items-center justify-center select-none
                rounded-2xl h-12 px-5 text-base font-semibold text-white
                border-[2px] border-white/5
                backdrop-blur-[25px]
                bg-origin-border
                bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)]
                shadow-sm transition-all duration-200
                hover:bg-white/90 hover:text-black hover:shadow-button
                focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none
                after:absolute after:top-[-2px] after:left-[-2px]
                after:w-[calc(100%+4px)] after:h-[calc(100%+4px)]
                after:rounded-[1rem]
                after:bg-[url('/pagedemo/texture-btn.png')]
                after:bg-repeat after:pointer-events-none
            "
            >
            Get Started
            <span className="text-[#70757E] opacity-100 -mr-2">
                <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </span>
            </a>

            {/* Secondary Button */}
            <a
            href="https://react.email/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="
                relative inline-flex items-center justify-center
                rounded-2xl h-12 px-5 text-base font-semibold
                bg-transparent border border-transparent
                text-white/70 transition duration-200
                hover:text-white
                focus-visible:ring-4 focus-visible:ring-gray-a2 focus-visible:outline-none
                [&_svg]:text-gray-9
            "
            >
            Check the Docs
            <span className="text-[#70757E] opacity-100 -mr-2">
                <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </span>
            </a>
        </div>
        <EmailWithReactUI />
    </section>
  );
}

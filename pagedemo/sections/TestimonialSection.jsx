export default function TestimonialSection() {
  return (
    <div className="relative group flex flex-col items-center justify-center gap-12 pt-24 md:pb-24">
      {/* Top glowing line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Conic + radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      {/* Logo bubble */}
      <div
        className="flex h-[100px] w-[100px] items-center justify-center rounded-full transition-all duration-700"
        style={{
          background:
            "radial-gradient(rgba(200,200,200,0.15) 0%, #000 90%)",
        }}
      >
        <img
          src="/pagedemo/vercel.svg?dpl=dpl_3Woud86P9DrfeWXTfTd4vX6A8Trk"
          alt="Vercel"
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className="select-none"
        />
      </div>

      {/* Quote */}
      <blockquote className="mx-auto max-w-[520px] text-center">
        <span className="text-[1.5rem] leading-[1.5] font-medium text-gray-200">
          Resend is transforming email for developers. Simple interface, easy
          integrations, handy templates. What else could we ask for.
        </span>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src="/pagedemo/guillermo-rauch.webp"
          alt="Guillermo Rauch"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-gray-200">
            Guillermo Rauch
          </p>
          <p className="text-sm leading-[1.6] text-gray-400">
            CEO at Vercel
          </p>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#"
        className="group/subtle-cta relative mx-auto mt-0 flex w-fit items-center gap-1 overflow-hidden rounded-full border border-white/5 bg-white/10 py-2 pl-3 pr-1.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-500 ease-[cubic-bezier(.36,.66,.6,1)]
        md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-4 md:group-hover:opacity-100"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 opacity-60 mix-blend-hard-light transition-all duration-500"
        />
        <span className="relative">Send with Next.js</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </div>
  );
}

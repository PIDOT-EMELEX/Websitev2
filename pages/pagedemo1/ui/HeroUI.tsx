export default function HeroUI() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* HEADLINE */}
      <h1
        className="text-[56px] leading-[102%] font-medium tracking-[-1px] text-white lg:text-[80px]"
        style={{ fontFamily: "EB Garamond" }}
      >
        <span className="block overflow-hidden">
          <span>#1</span> <span>Undetectable</span>
        </span>
        <span className="block overflow-hidden">
          <span>AI</span> <span>for</span> <span>Meetings</span>
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="max-w-2xl text-white/90 text-base lg:text-[19px] leading-[140%]">
        Cluely takes perfect meeting notes and gives real-time answers,
        <br className="hidden md:block" />
        all while completely undetectable
      </p>

      {/* CTA */}
      <div className="flex gap-3">
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
            <svg 
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
            </svg>
          <span>Get the desktop app</span>
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
            <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="mb-0.5" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z" />
            </svg>
          <span>Get for Windows</span>
        </a>
      </div>
    </div>
  );
}

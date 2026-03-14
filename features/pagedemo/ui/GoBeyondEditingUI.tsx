import Image from "next/image";

export default function GoBeyondEditingUI() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
        {/* ================= CARD 1 ================= */}
        <div className="relative flex flex-col gap-4 rounded-3xl border border-b-0 border-slate-800">
          
          {/* Top gradient line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[150px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Dark mode overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-0.5 -top-0.5 hidden h-[calc(100%+4px)] w-[calc(100%+4px)] dark:block"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 50%, #000000 100%)",
            }}
          />

          {/* Light mode overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-0.5 -top-0.5 block h-[calc(100%+4px)] w-[calc(100%+4px)] dark:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 50%, #ffffff 100%)",
            }}
          />

            {/* Card body */}
            <div className="pt-16 pl-12 pr-4 relative w-full h-full overflow-hidden rounded-2xl shadow-2xl px-8 py-6 md:px-12 flex items-center">
                <Image
                src="/pagedemo/screenshot-zoom-audience.webp"
                alt="Audiences Screenshot"
                width={622}
                height={308}
                loading="lazy"
                decoding="async"
                className="block w-full rounded-2xl"
                style={{
                    maskImage:
                    "linear-gradient(45deg, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
                />


            {/* Top mask */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                background:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 90%)",
                }}
            />
            </div>

            {/* ================= CARD 1 INFO ================= */}
            <div className="z-10 flex max-w-[38ch] flex-col gap-4 pl-0 md:pl-10">
                {/* Icon */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-slate-300"
                >
                    <path
                    d="M18.2228 9.23107H16.2418C14.9242 9.23107 13.8461 8.06799 13.8461 6.64645V5.35415C13.8461 3.93261 14.9242 2.76953 16.2418 2.76953H16.5274C17.845 2.76953 18.9231 3.93261 18.9231 5.35415V8.48551C18.9138 8.89308 18.6006 9.23107 18.2228 9.23107ZM16.2418 4.26066C15.6889 4.26066 15.2282 4.74776 15.2282 5.35415V6.64645C15.2282 7.2429 15.6797 7.73995 16.2418 7.73995H17.5317V5.35415C17.5317 4.7577 17.0803 4.26066 16.5182 4.26066H16.2418Z"
                    fill="currentColor"
                    />
                    <path
                    d="M9.39857 9.23107H7.23354C5.79354 9.23107 4.61536 8.06799 4.61536 6.64645V5.35415C4.61536 3.92267 5.79354 2.76953 7.23354 2.76953H7.53564C8.97564 2.76953 10.1538 3.92267 10.1538 5.35415V8.48551C10.1538 8.89308 9.81144 9.23107 9.39857 9.23107ZM7.23354 4.26066C6.61927 4.26066 6.12585 4.74776 6.12585 5.35415V6.64645C6.12585 7.25284 6.61927 7.73995 7.23354 7.73995H8.64333V5.35415C8.64333 4.7577 8.14991 4.26066 7.53564 4.26066H7.23354Z"
                    fill="currentColor"
                    />
                    <path
                    d="M14.0053 15.692H11.8442C10.4068 15.692 9.23077 14.5289 9.23077 13.1074V11.8151C9.23077 10.3935 10.4068 9.23047 11.8442 9.23047H12.1558C13.5932 9.23047 14.7692 10.3935 14.7692 11.8151V14.9464C14.7592 15.354 14.4174 15.692 14.0053 15.692ZM11.8442 10.7216C11.2411 10.7216 10.7385 11.2087 10.7385 11.8151V13.1173C10.7385 13.7237 11.2311 14.2108 11.8442 14.2108H13.2514V11.825C13.2514 11.2286 12.7589 10.7315 12.1458 10.7315H11.8442V10.7216Z"
                    fill="currentColor"
                    />
                    <path
                    d="M17.2789 21.2306H7.1827C6.78847 21.2306 6.46155 20.9168 6.46155 20.5383V20.0768C6.46155 18.166 8.07693 16.6152 10.0673 16.6152H14.3942C16.3846 16.6152 18 18.166 18 20.0768V20.5383C18 20.9168 17.6731 21.2306 17.2789 21.2306ZM7.91347 19.846H16.5385C16.4231 18.8122 15.5 17.9998 14.3846 17.9998H10.0577C8.95193 17.9998 8.03847 18.8122 7.91347 19.846Z"
                    fill="currentColor"
                    />
                    <path
                    d="M7.55768 15.2312H3.05768C2.64768 15.2312 2.30768 14.886 2.30768 14.4697V13.962C2.30768 11.8601 3.98768 10.1543 6.05768 10.1543H7.55768C7.96768 10.1543 8.30768 10.4995 8.30768 10.9158C8.30768 11.3321 7.96768 11.6774 7.55768 11.6774H6.05768C4.89768 11.6774 3.94768 12.5709 3.81768 13.7081H7.55768C7.96768 13.7081 8.30768 14.0534 8.30768 14.4697C8.30768 14.886 7.96768 15.2312 7.55768 15.2312Z"
                    fill="currentColor"

                    />
                    <path
                    d="M20.9423 15.2312H16.4423C16.0323 15.2312 15.6923 14.886 15.6923 14.4697C15.6923 14.0534 16.0323 13.7081 16.4423 13.7081H20.1823C20.0623 12.5709 19.1023 11.6774 17.9423 11.6774H16.4423C16.0323 11.6774 15.6923 11.3321 15.6923 10.9158C15.6923 10.4995 16.0323 10.1543 16.4423 10.1543H17.9423C20.0123 10.1543 21.6923 11.8601 21.6923 13.962V14.4697C21.6923 14.886 21.3523 15.2312 20.9423 15.2312Z"
                    fill="currentColor"
                    />
                </svg>
            <h2 className="font-display text-xl leading-[130%] text-slate-200">
                Contact Management
            </h2>

            <p className="text-sm leading-[1.6] text-gray-400">
                Import your list in minutes, regardless the size of your audience.
                Get full visibility of each contact and their personal attributes.
            </p>

            <a
                href="#"
                className="text-sm text-slate-200 transition hover:text-white focus-visible:ring-2 focus-visible:ring-slate-600 outline-none"
            >
                Learn more
            </a>
            </div>

        </div>


          
          {/* ================= CARD 2 ================= */}
          <div className="relative flex flex-col gap-4 rounded-3xl border border-b-0 border-slate-800">

            {/* Top gradient line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-px w-[150px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(143,143,143,0.67) 50%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Dark mode overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-0.5 -top-0.5 hidden h-[calc(100%+4px)] w-[calc(100%+4px)] dark:block"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 50%, #000000 100%)",
              }}
            />

            {/* Light mode overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-0.5 -top-0.5 block h-[calc(100%+4px)] w-[calc(100%+4px)] dark:hidden"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 50%, #ffffff 100%)",
              }}
            />

            {/* Card body */}
            
            <div className="pt-16 pl-12 pr-4 relative w-full h-full overflow-hidden rounded-2xl shadow-2xl px-8 py-6 md:px-12 flex items-center">
                <Image
                src="/pagedemo/screenshot-zoom-analytics.webp"
                alt="Audiences Screenshot"
                width={622}
                height={308}
                loading="lazy"
                decoding="async"
                className="block w-full rounded-2xl"
                style={{
                    maskImage:
                    "linear-gradient(45deg, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
                />

            {/* Top mask */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                background:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 90%)",
                }}
            />
            </div>
            
            {/* ================= CARD 2 INFO ================= */}
            <div className="z-10 flex max-w-[38ch] flex-col gap-4 pl-0 md:pl-10">
                {/* Icon */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-slate-300"
                >
                    <path
                    d="M3 3v16a2 2 0 0 0 2 2h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    />
                    <path
                    d="m19 9-5 5-4-4-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    />
                </svg>
            <h2 className="font-display text-xl leading-[130%] text-slate-200">
                Broadcast Analytics
            </h2>

            <p className="text-sm leading-[1.6] text-gray-400">
                Unlock powerful insights and understand exactly how your audience is interacting with your broadcast emails.
            </p>

            <a
                href="#"
                className="text-sm text-slate-200 transition hover:text-white focus-visible:ring-2 focus-visible:ring-slate-600 outline-none"
            >
                Learn more
            </a>
            </div>

          </div>

      </div>
    </>
  );
}

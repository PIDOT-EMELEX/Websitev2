export default function DeveloperExperienceUI() {
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
          <div className="relative z-10 h-[324px] overflow-hidden">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                background:
                  "radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.06) 3%, rgba(98,255,179,0) 70%, rgba(98,255,179,0) 100%)",
              }}
            >
              {/* Top Input */}
              <div className="absolute left-1/2 top-10 w-[94%] max-w-[25.625rem] -translate-x-1/2 md:top-1/3">
                <div
                  className="relative inline-flex w-full items-center justify-between gap-3 rounded-lg border border-slate-700 px-2 py-1 pb-1.5"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0))",
                  }}
                >
                  <button
                    type="button"
                    aria-label="Select test mode"
                    className="flex items-center gap-1 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
                  >
                    <div className="inline-flex items-center gap-2 font-sans">
                      <span className="hidden md:flex h-7 items-center rounded-[0.625rem] bg-green-900/30 px-2 text-xs font-medium text-green-400 capitalize">
                        delivered
                      </span>
                      <span className="pl-1 text-sm md:pl-0">
                        delivered@resend.dev
                      </span>
                    </div>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Send test email"
                    className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-[5px] text-sm transition-transform duration-150 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-slate-600"
                    style={{
                      background: "#000",
                      color: "#fff",
                    }}
                  >
                    <svg width="14" height="12" fill="none">
                      <path
                        d="M12.72 9.2 9.69 4.357V1h.144a.5.5 0 1 0 0-1.001H4.167a.5.5 0 1 0 0 1.001h.143v3.356L1.28 9.2a1.8 1.8 0 0 0-.05 1.85c.33.596.935.951 1.62.951h8.3c.685 0 1.29-.355 1.62-.95a1.801 1.801 0 0 0-.05-1.851ZM8.69 1v3.5a.5.5 0 0 0 .075.265L9.537 6H4.463l.772-1.234a.5.5 0 0 0 .076-.266V1.001H8.69Zm3.204 9.564a.838.838 0 0 1-.744.435h-8.3a.838.838 0 0 1-.744-.435.812.812 0 0 1 .023-.834L3.837 7h6.327l1.708 2.73c.16.257.17.569.022.834Z"
                        fill="#fff"
                      />
                    </svg>
                    Send
                  </button>
                </div>
              </div>

              {/* Logs */}
              <div className="absolute bottom-0 left-1/2 h-[200px] w-full -translate-x-1/2 overflow-hidden px-4 md:h-[120px] md:w-auto">
                <div className="flex flex-col-reverse text-slate-400">
                  {[
                    "7e4272e8-d923-4792-bb8e-55bac004f764",
                    "4fea6d6e-ca08-46a8-9cd7-be654f16d55c",
                    "008ac0c7-d549-4635-930f-b7e3b79ae032",
                    "9a7c062c-b6fb-4860-804d-36849ca37dbf",
                    "14a76994-0267-4797-b439-c21fd8a8de5c",
                    "4ba1d772-9639-4b25-b236-7a2bbf49c629",
                    "4c479913-5e90-4d86-be44-08aec93ac156",
                    "ae2b07c5-e766-4cff-a156-592d29b343e7",
                    "e1ac3f29-4dfd-41b6-8134-16d39828c495",
                  ].map((id) => (
                    <div key={id} className="mb-2 flex gap-4 text-sm">
                      <pre>HTTP 200:</pre>
                      <pre className="truncate">
                        {`{ "id": "`}
                        <span className="text-slate-500">{id}</span>
                        {`" }`}
                      </pre>
                    </div>
                  ))}
                </div>

                {/* Bottom fade */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)",
                  }}
                />
              </div>
            </div>

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
          {/* ================= TEST MODE INFO CARD ================= */}
          <div className="z-10 flex max-w-[34ch] flex-col gap-4 pl-0 md:pl-10">
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
              d="M15.2308 7.56438V7.34644C15.2308 7.07029 15.0069 6.84644 14.7308 6.84644H9.26923C8.99308 6.84644 8.76923 7.07029 8.76923 7.34644V7.56438C8.76923 7.76264 8.92994 7.92336 9.1282 7.92336C9.52471 7.92336 9.84615 8.24479 9.84615 8.6413V12.5359C9.84615 13.1885 9.52773 13.8001 8.99307 14.1743L7.81814 14.9968C7.3835 15.301 7.03999 15.718 6.82451 16.2028C5.96647 18.1334 7.37966 20.308 9.49234 20.308H14.5076C16.6203 20.308 18.0335 18.1334 17.1755 16.2028C16.96 15.718 16.6165 15.301 16.1818 14.9968L15.0069 14.1743C14.4723 13.8001 14.1538 13.1885 14.1538 12.5359V8.6413C14.1538 8.24479 14.4753 7.92336 14.8718 7.92336C15.07 7.92336 15.2308 7.76264 15.2308 7.56438Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17.1154 17.6154C17.1154 17.6154 15.7692 17.8846 12.8077 16.8077C9.84618 15.7307 6.88464 17.6154 6.88464 17.6154"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            <path
              d="M16.3077 15.1923C16.3077 15.1923 13.8846 13.8461 11.7308 14.6538C9.57693 15.4615 7.69232 15.1923 7.69232 15.1923"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            <path
              d="M14.1538 12.2308C14.1538 12.2308 12.8077 12.5 11.7308 11.9615C10.6538 11.423 9.98077 12.2308 9.98077 12.2308"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            <rect 
            fill="currentColor" 
            height="1.07692" 
            rx="0.5"  
            width="1.07692" 
            x="11.4615" 
            y="7.9231">
            </rect>
            <rect 
            fill="currentColor" 
            height="1.07692" 
            rx="0.5" 
            width="1.07692" 
            x="12.5385" 
            y="3.0769">
            </rect>
            <rect 
            fill="currentColor" 
            height="1.07692" 
            rx="0.5" 
            width="1.07692" 
            x="9.84613" 
            y="0.923096">
            </rect>
          </svg>

          {/* Title */}
          <h2 className="font-display text-xl leading-[130%] text-slate-200">
            Test Mode
          </h2>

          {/* Description */}
          <p className="text-sm leading-[1.6] text-gray-400">
            Simulate events and experiment with our API without the risk of accidentally
            sending real emails to real people.
          </p>

          {/* Link */}
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

            {/* Card body (EMPTY) */}
            <div className="relative z-10 h-[324px] overflow-hidden">
              <div
                className="relative h-full w-full"
                style={{
                  background:
                    "radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.06) 3%, rgba(98,255,179,0) 70%, rgba(98,255,179,0) 100%)",
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
            <div className="z-10 flex max-w-[36ch] flex-col gap-4 pl-0 md:pl-10">
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
                  clipRule="evenodd"
                  d="M10.5818 6H10.0272V9.27273H6.69995V9.81818H10.0272V14.1818H6.69995V14.7273H10.0272V18H10.5818V14.7273H15.0181V18H15.5727V14.7273H18.9V14.1818H15.5727V9.81818H18.9V9.27273H15.5727V6H15.0181V9.27273H10.5818V6ZM15.0181 14.1818V9.81818H10.5818V14.1818H15.0181Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  fillRule="evenodd"
                />
                <rect
                  x="6"
                  y="5.26929"
                  width="13.5385"
                  height="13.5385"
                  rx="4"
                  fill="currentColor"
                  fillOpacity="0.15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="15.2307"
                  y="2.19238"
                  width="6.76923"
                  height="6.76923"
                  rx="3.38462"
                  fill="black"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="17.6923"
                  y="4.65381"
                  width="1.84615"
                  height="1.84615"
                  rx="0.923077"
                  fill="currentColor"
                />
              </svg>

              {/* Title */}
              <h2 className="font-display text-xl leading-[130%] text-slate-200">
                Modular Webhooks
              </h2>

              {/* Description */}
              <p className="text-sm leading-[1.6] text-gray-400">
                Receive real-time notifications directly to your server. Every time an
                email is delivered, opened, bounces, or a link is clicked.
              </p>

              {/* Link */}
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

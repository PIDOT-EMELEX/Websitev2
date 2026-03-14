"use client";

import { JSX, RefObject } from "react";
import {
  NodeJsIcon,
  ServerlessIcon,
  RubyIcon,
  PythonIcon,
  PhpIcon,
  GoIcon,
  RustIcon,
  JavaIcon,
  ElixirIcon,
  DotNetIcon,
  RestIcon,
  SmtpIcon,
  GitHubIcon,
  DownloadIcon,
} from "../icons/PlatformIcons";

/* ---------------------------------
   COPY ICON (YOUR SVG)
---------------------------------- */
const CopyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="text-current"
  >
    <path
      d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 12.25H14.25M9.75 15.25H14.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

type Props = {
  videoRef: RefObject<HTMLVideoElement>;
  onMouseEnter: () => void;
  active: string;
  setActive: (id: string) => void;
};

/* ---------------------------------
   ICON OPTICAL SCALE
---------------------------------- */
const iconScale: Record<string, string> = {
  node: "scale-[0.9]",
  serverless: "scale-[0.95]",
  ruby: "scale-[0.9]",
  python: "scale-[0.95]",
  php: "scale-[0.95]",
  go: "scale-[0.9]",
  rust: "scale-[0.85]",
  java: "scale-[0.9]",
  elixir: "scale-[0.95]",
  dotnet: "scale-[0.95]",
  rest: "scale-[0.95]",
  smtp: "scale-[0.95]",
};

/* ---------------------------------
   PLATFORMS
---------------------------------- */
const platforms = [
  { id: "node", label: "Node.js", icon: NodeJsIcon },
  { id: "serverless", label: "Serverless", icon: ServerlessIcon },
  { id: "ruby", label: "Ruby", icon: RubyIcon },
  { id: "python", label: "Python", icon: PythonIcon },
  { id: "php", label: "PHP", icon: PhpIcon },
  { id: "go", label: "Go", icon: GoIcon },
  { id: "rust", label: "Rust", icon: RustIcon },
  { id: "java", label: "Java", icon: JavaIcon },
  { id: "elixir", label: "Elixir", icon: ElixirIcon },
  { id: "dotnet", label: ".NET", icon: DotNetIcon },
  { id: "rest", label: "REST API", icon: RestIcon },
  { id: "smtp", label: "SMTP", icon: SmtpIcon },
];

/* ---------------------------------
   YELLOW TOKEN
---------------------------------- */
const Y = ({ children }: { children: string }) => (
  <span
    className="text-yellow-400"
    style={{ textShadow: "0 0 12px rgba(251,191,36,0.15)" }}
  >
    {children}
  </span>
);

/* ---------------------------------
   CODE (JSX)
---------------------------------- */
const codeSnippets: Record<string, JSX.Element> = {
  node: (
    <>
      <span className="text-white/60">import</span>{" "}
      <span className="text-white">{"{ sendEmail }"}</span>{" "}
      <span className="text-white/60">from</span> <Y>"sdk"</Y>
      {"\n\n"}
      <span className="text-white/60">await</span>{" "}
      <span className="text-white">sendEmail</span>
      {"({\n  "}
      <span className="text-white/60">to:</span> <Y>"user@example.com"</Y>
      {",\n  "}
      <span className="text-white/60">subject:</span> <Y>"Hello"</Y>
      {",\n});"}
    </>
  ),
  serverless: (
    <>
      <span className="text-white/60">export default async function</span>{" "}
      <span className="text-white">handler</span>
      {"(req) {\n  "}
      <span className="text-white/60">await</span>{" "}
      <span className="text-white">sendEmail</span>
      {"({\n    "}
      <span className="text-white/60">to:</span>{" "}
      <Y>"req.body.email"</Y>
      {",\n    "}
      <span className="text-white/60">subject:</span>{" "}
      <Y>"Serverless Email"</Y>
      {"\n  });\n}"}
    </>
  ),
  python: (
    <>
      <span className="text-white/60">from</span>{" "}
      <span className="text-white">sdk</span>{" "}
      <span className="text-white/60">import</span>{" "}
      <span className="text-white">send_email</span>
      {"\n\nsend_email(\n  "}
      <span className="text-white/60">to=</span>
      <Y>"user@example.com"</Y>
      {",\n  "}
      <span className="text-white/60">subject=</span>
      <Y>"Hello"</Y>
      {"\n)"}
    </>
  ),
  ruby: (
    <>
      <span className="text-white">Sdk.send_email</span>
      {"(\n  "}
      <span className="text-white/60">to:</span> <Y>"user@example.com"</Y>
      {",\n  "}
      <span className="text-white/60">subject:</span> <Y>"Hello"</Y>
      {"\n)"}
    </>
  ),
  php: (
    <>
      <span className="text-white">$client</span>
      <span className="text-white/60">-&gt;</span>
      <span className="text-white">sendEmail</span>
      {"([\n  "}
      <Y>"to"</Y> {" => "} <Y>"user@example.com"</Y>
      {",\n]);"}
    </>
  ),
  go: (
    <>
      <span className="text-white">client.SendEmail</span>
      {"(sdk.Email{\n  "}
      <span className="text-white/60">To:</span> <Y>"user@example.com"</Y>
      {",\n})"}
    </>
  ),
  rust: (
    <>
      <span className="text-white">client.send_email</span>
      {"(Email {\n  "}
      <span className="text-white/60">to:</span> <Y>"user@example.com"</Y>
      {",\n});"}
    </>
  ),
  java: (
    <>
      <span className="text-white">client.sendEmail</span>
      {"(\n  "}
      <Y>"user@example.com"</Y>
      {"\n);"}
    </>
  ),
  elixir: (
    <>
      <span className="text-white">Sdk.send_email</span>
      {"(\n  "}
      <span className="text-white/60">to:</span> <Y>"user@example.com"</Y>
      {"\n)"}
    </>
  ),
  dotnet: (
    <>
      <span className="text-white">client.SendEmail</span>
      {"(\n  "}
      <Y>"user@example.com"</Y>
      {"\n);"}
    </>
  ),
  rest: (
    <>
      <span className="text-white/60">POST</span>{" "}
      <Y>"https://api.example.com/send"</Y>
      {"\n{\n  "}
      <Y>"to"</Y>: <Y>"user@example.com"</Y>
      {"\n}"}
    </>
  ),
  smtp: (
    <>
      <span className="text-white/60">SMTP SEND</span>
      {"\nTo: "} <Y>"user@example.com"</Y>
    </>
  ),
};

/* ---------------------------------
   PLAIN TEXT (FOR COPY)
---------------------------------- */
const codePlainText: Record<string, string> = {
  node: `import { sendEmail } from "sdk";

await sendEmail({
  to: "user@example.com",
  subject: "Hello",
});`,
  serverless: `export default async function handler(req) {
  await sendEmail({
    to: req.body.email,
    subject: "Serverless Email",
  });
}`,
  python: `from sdk import send_email

send_email(
  to="user@example.com",
  subject="Hello"
)`,
  ruby: `Sdk.send_email(
  to: "user@example.com",
  subject: "Hello"
)`,
  php: `$client->sendEmail([
  "to" => "user@example.com",
]);`,
  go: `client.SendEmail(sdk.Email{
  To: "user@example.com",
})`,
  rust: `client.send_email(Email {
  to: "user@example.com",
});`,
  java: `client.sendEmail(
  "user@example.com"
);`,
  elixir: `Sdk.send_email(
  to: "user@example.com"
)`,
  dotnet: `client.SendEmail(
  "user@example.com"
);`,
  rest: `POST https://api.example.com/send
{
  "to": "user@example.com"
}`,
  smtp: `SMTP SEND
To: user@example.com`,
};

export default function IntegrateMorningUI({
  videoRef,
  onMouseEnter,
  active,
  setActive,
}: Props) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codePlainText[active]);
  };

  return (
    <section className="w-full flex justify-center py-24">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">

        {/* Video Container */}
        <div
            onMouseEnter={onMouseEnter}
            className="w-full max-w-5xl flex justify-center mb-10"
        >
            <div className="h-[170px] aspect-video">
            <video
                ref={videoRef}
                className="h-full w-full rounded-xl object-contain"
                muted
                playsInline
                preload="auto"
            >
                <source
                src="/pagedemo/3d-integrate-morning.mp4"
                type="video/mp4"
                />
            </video>
            </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold">
          <span className="text-white">Integrate </span>
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            this morning
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 max-w-xl text-white/70 text-sm md:text-base">
          A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages.
        </p>

        {/* ICONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
        {platforms.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;

            return (
            <div key={id} className="group flex flex-col items-center gap-1">
                <button
                onClick={() => setActive(id)}
                className={`w-16 h-16 rounded-xl flex items-center justify-center border transition
                    ${
                    isActive
                        ? "border-white/30 text-yellow-400"
                        : "border-white/20 text-white hover:border-white hover:text-white"
                    }`}
                >
                <Icon className="w-8 h-8" />
                </button>

                {/* LABEL */}
                <span
                className={`text-[11px] whitespace-nowrap transition
                    ${
                    isActive
                        ? "text-white/60"
                        : "text-white/60 group-hover:text-white"
                    }`}
                >
                {label}
                </span>
            </div>
            );
        })}
        </div>



        {/* CODE */}
        <div className="mt-14 w-full max-w-4xl rounded-2xl border border-white/10 bg-black overflow-hidden">
          <div className="flex justify-between px-4 py-3 border-b border-white/10">
            <span className="text-xs text-white/40">{active}.example</span>
            <button
              onClick={handleCopy}
              className="text-white/40 hover:text-yellow-400"
            >
              <CopyIcon />
            </button>
          </div>

          <div className="flex font-mono text-sm">
            <div className="w-10 text-right pr-3 pt-6 text-white/30 select-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <pre className="flex-1 pt-6 pr-6 pb-10 text-left whitespace-pre-wrap text-white/80">
              <code>{codeSnippets[active]}</code>
            </pre>
          </div>

        {/* FOOTER */}
        <div className="flex items-center gap-6 px-4 py-3 border-t border-white/10 text-xs text-white/50">
        <span className="flex items-center gap-2 hover:text-white cursor-pointer">
            <span><GitHubIcon /></span> View on GitHub
        </span>
        <span className="flex items-center gap-2 hover:text-white cursor-pointer">
            <span><DownloadIcon /></span> Download ZIP
        </span>
        </div>

        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import NotebookEditor from "../CellNotebook";
import CellNotebook from "../CellNotebook";

export default function EditorUI() {
  return (
    <div className="w-[90%] mx-auto tiptap-extended">
        <div
        className="relative mt-16 rounded-2xl border-gray-600 border h-[37.5rem]"
        style={{
            background:
            "radial-gradient(41.07% 8.33% at 50% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #101010 0%, rgba(0, 0, 0, 0.80) 100%)",
            maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)",
            maskSize: "100% 100%",
            maskPosition: "bottom",
        }}
        >
        {/* Glow lines */}
        <div
            aria-hidden="true"
            className="absolute top-0 w-[300px] md:w-[600px] h-px left-1/2 -translate-x-1/2 pointer-events-none blur-[3px]"
            style={{
            background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, #FFF 50%, rgba(255,255,255,0) 100%)",
            }}
        />
        <div
            aria-hidden="true"
            className="absolute top-0 w-[300px] md:w-[600px] h-px left-1/2 -translate-x-1/2 pointer-events-none blur-[10px]"
            style={{
            background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, #FFF 50%, rgba(255,255,255,0) 100%)",
            }}
        />
        <div
            aria-hidden="true"
            className="absolute top-0 w-[300px] md:w-[600px] h-px left-1/2 -translate-x-1/2 pointer-events-none opacity-100"
            style={{
            background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, #9B7CFF 50%, rgba(255,255,255,0) 100%)",
            }}
        />

        {/* Toolbar */}
        <div className="text-sm relative flex items-center justify-between h-16 w-full px-6 py-4 border-b border-gray-600">
            <div className="flex items-center gap-2 border bg-gray-2 border-gray-500 rounded-md px-2 py-1.5 text-gray-100">
            {/* SVG kept as-is */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-paint-bucket"
                aria-hidden="true"
            >
                <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
                <path d="m5 2 5 5" />
                <path d="M2 13h15" />
                <path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" />
            </svg>
            Styles
            </div>

            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 opacity-60">
            Weekly Acme Newsletter
            </div>

            <div className="flex gap-4 text-gray-110">
            <span className="gap-2 items-center hidden md:flex">
                {/* clock svg omitted for brevity */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-clock mt-[1px]" 
                    aria-hidden="true"
                    >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
                a day ago
            </span>
            <div className="rounded-md border border-gray-600 px-3 py-1.5 bg-background">
                Test
            </div>
            <div className="rounded-md px-3 py-1.5 border border-white bg-white text-black">
                Send
            </div>
            </div>
        </div>

        {/* Email meta */}
        <div className="md:mt-10 w-full md:w-[60%] rounded-2xl rounded-b-none bg-black mx-auto md:border-[#262A2D] md:border">
            <div className="px-8 pt-2 text-sm">
            <div className="flex items-center py-2 border-b border-gray-600">
                <span className="w-24 text-gray-400">From</span>
                <span>your.name@acme.com</span>
            </div>

            <div className="flex items-center py-3 border-b border-gray-600">
                <span className="w-24 text-gray-400">To</span>
                <span className="flex items-center gap-1.5 -ml-1 bg-white/20 pl-2 pr-3 rounded-full py-1">
                <svg 
                fill="none" 
                height="18" 
                viewBox="0 0 24 24" 
                width="18" 
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18.2228 9.23107H16.2418C14.9242 9.23107 13.8461 8.06799 13.8461 6.64645V5.35415C13.8461 3.93261 14.9242 2.76953 16.2418 2.76953H16.5274C17.845 2.76953 18.9231 3.93261 18.9231 5.35415V8.48551C18.9138 8.89308 18.6006 9.23107 18.2228 9.23107ZM16.2418 4.26066C15.6889 4.26066 15.2282 4.74776 15.2282 5.35415V6.64645C15.2282 7.2429 15.6797 7.73995 16.2418 7.73995H17.5317V5.35415C17.5317 4.7577 17.0803 4.26066 16.5182 4.26066H16.2418Z" 
                    fill="currentColor" />
                    <path d="M9.39857 9.23107H7.23354C5.79354 9.23107 4.61536 8.06799 4.61536 6.64645V5.35415C4.61536 3.92267 5.79354 2.76953 7.23354 2.76953H7.53564C8.97564 2.76953 10.1538 3.92267 10.1538 5.35415V8.48551C10.1538 8.89308 9.81144 9.23107 9.39857 9.23107ZM7.23354 4.26066C6.61927 4.26066 6.12585 4.74776 6.12585 5.35415V6.64645C6.12585 7.25284 6.61927 7.73995 7.23354 7.73995H8.64333V5.35415C8.64333 4.7577 8.1499 4.26066 7.53564 4.26066H7.23354Z" 
                    fill="currentColor" />
                    <path d="M14.0053 15.692H11.8442C10.4068 15.692 9.23077 14.5289 9.23077 13.1074V11.8151C9.23077 10.3935 10.4068 9.23047 11.8442 9.23047H12.1558C13.5932 9.23047 14.7692 10.3935 14.7692 11.8151V14.9464C14.7592 15.354 14.4174 15.692 14.0053 15.692ZM11.8442 10.7216C11.2411 10.7216 10.7385 11.2087 10.7385 11.8151V13.1173C10.7385 13.7237 11.2311 14.2108 11.8442 14.2108H13.2514V11.825C13.2514 11.2286 12.7589 10.7315 12.1458 10.7315H11.8442V10.7216Z" 
                    fill="currentColor" />
                    <path d="M17.2789 21.2306H7.1827C6.78847 21.2306 6.46155 20.9168 6.46155 20.5383V20.0768C6.46155 18.166 8.07693 16.6152 10.0673 16.6152H14.3942C16.3846 16.6152 18 18.166 18 20.0768V20.5383C18 20.9168 17.6731 21.2306 17.2789 21.2306ZM7.91347 19.846H16.5385C16.4231 18.8122 15.5 17.9998 14.3846 17.9998H10.0577C8.95193 17.9998 8.03847 18.8122 7.91347 19.846Z" 
                    fill="currentColor" />
                    <path d="M7.55768 15.2312H3.05768C2.64768 15.2312 2.30768 14.886 2.30768 14.4697V13.962C2.30768 11.8601 3.98768 10.1543 6.05768 10.1543H7.55768C7.96768 10.1543 8.30768 10.4995 8.30768 10.9158C8.30768 11.3321 7.96768 11.6774 7.55768 11.6774H6.05768C4.89768 11.6774 3.94768 12.5709 3.81768 13.7081H7.55768C7.96768 13.7081 8.30768 14.0534 8.30768 14.4697C8.30768 14.886 7.96768 15.2312 7.55768 15.2312Z" 
                    fill="currentColor" />
                    <path d="M20.9423 15.2312H16.4423C16.0323 15.2312 15.6923 14.886 15.6923 14.4697C15.6923 14.0534 16.0323 13.7081 16.4423 13.7081H20.1823C20.0623 12.5709 19.1023 11.6774 17.9423 11.6774H16.4423C16.0323 11.6774 15.6923 11.3321 15.6923 10.9158C15.6923 10.4995 16.0323 10.1543 16.4423 10.1543H17.9423C20.0123 10.1543 21.6923 11.8601 21.6923 13.962V14.4697C21.6923 14.886 21.3523 15.2312 20.9423 15.2312Z" 
                    fill="currentColor" />
                </svg>
                Newsletter <span className="hidden md:inline">Subscribers</span>
                </span>
            </div>

            <div className="flex items-center py-3">
                <span className="w-24 text-gray-400">Subject</span>
                <span>Weekly Newsletter</span>
            </div>
            </div>
        </div>
        </div>


      {/* Editor Canvas */}
      <div
        className="md:border-[#262A2D] md:border-l md:border-r overflow-auto relative w-full md:w-[calc(60%-1px)] -mt-[385px] md:-mt-[343px] pb-2 mx-auto bg-white text-black h-[33.125rem]"
        style={{ scrollbarWidth: "thin" }}
      >
        <Image
        src="/pagedemo/broadcast-email-header.webp"
        alt="Full-screen image"
        width={600}
        height={194}
        className="w-full"
        sizes="(max-width: 768px) 100vw, 60vw"
        />


        <div className="h-fit min-h-[calc(100%-14rem)] px-12 py-2 pl-10">   
            <CellNotebook />
        </div>
      </div>
    </div>
  );
}

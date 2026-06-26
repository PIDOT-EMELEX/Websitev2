import { cn } from "@/lib/utils";

export const CAL_BOOKING_URL = "https://cal.com/pi-dot";

type BookCallLinkProps = {
  className?: string;
  mobileMenu?: boolean;
};

export function BookCallLink({ className, mobileMenu = false }: BookCallLinkProps) {
  if (mobileMenu) {
    return (
      <a
        href={CAL_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full flex items-center text-lg text-white bg-transparent p-0 border-0 outline-none text-left font-medium hover:text-[#f69507] transition-colors cursor-pointer group/modal-btn relative overflow-hidden",
          className
        )}
      >
        <span className="group-hover/modal-btn:translate-x-40 transition duration-500">
          Book a Call
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-start absolute inset-0 transition duration-500 text-[#f69507] z-20">
          Book a Call
        </div>
      </a>
    );
  }

  return (
    <a
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/10 px-6 py-3 text-sm font-medium transition cursor-pointer text-center group/modal-btn relative overflow-hidden",
        className
      )}
    >
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        Book a Call
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20 space-x-2">
        <img
          src="/assets/pi-dot-logomark.svg"
          width={20}
          height={20}
          alt="Pi Dot Logo Mark"
        />
        <img
          src="/assets/pi-dot-wordmark.svg"
          width={60}
          height={30}
          alt="Pi Dot Word Mark"
        />
      </div>
    </a>
  );
}

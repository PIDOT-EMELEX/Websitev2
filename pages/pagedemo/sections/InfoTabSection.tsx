"use client";

import { motion, type Variants } from "framer-motion";
import { InfoTooltip } from "../ui/InfoTooltip";


/* Animation variants */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


export default function InfoTabSection() {
  return (
    <section className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border-t border-slate-600 px-6 py-20 sm:py-24 md:mt-0 md:max-w-7xl">
      {/* Top glowing line */}
      <div
        aria-hidden="true"
        className="left-1/2 right-1 top-0 w-[300px] sm:left-auto center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Conic + radial light */}
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="dark:block hidden pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 50%, #000000 100%)",
        }}
      />

      {/* Light overlay */}
      <div
        aria-hidden="true"
        className="dark:hidden block pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 50%, #ffffff 100%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-20">
        <h2 className="font-display effect-font-styling effect-font-gradient mb-12 max-w-md text-[3rem] leading-[120%] tracking-tighter md:text-[3.5rem]">
          Reach humans, not spam folders
        </h2>
      </div>

      {/* Grid */}
      <motion.div
        className="relative z-20 mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex w-full flex-col gap-3 md:gap-2"
          >
            <div className="flex flex-row gap-3 md:flex-col md:gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="1.5" stroke="currentColor" />
                <path d="M12 2C12.8219 2 13.6205 2.09914 14.3848 2.28612C14.2426 2.5854 14.1366 2.90514 14.0722 3.23971C13.4069 3.08294 12.7132 3 12 3C8.42719 3 5.34061 5.08189 3.88723 8.09873C3.60187 8.03411 3.30494 8 3.00004 8C2.94326 8 2.88677 8.00118 2.83057 8.00353C4.37288 4.46983 7.89802 2 12 2ZM2.83057 15.9965C4.37287 19.5302 7.89802 22 12 22C17.5229 22 22 17.5228 22 12C22 10.1746 21.5109 8.46346 20.6566 6.99043C20.4069 7.21247 20.1291 7.40369 19.8293 7.55814C20.5745 8.8687 21 10.3846 21 12C21 16.9706 16.9706 21 12 21C8.42719 21 5.34061 18.9181 3.88722 15.9013C3.60187 15.9659 3.30494 16 3.00004 16C2.94327 16 2.88676 15.9988 2.83057 15.9965Z" 
                fill="currentColor"
                clipRule="evenodd"
                fillRule="evenodd"
                >
                </path>
                <path d="M12.0998 16.999C12.0666 16.9997 12.0334 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.4193 7 16.4373 8.71825 16.9002 11.001C16.9334 11.0003 16.9666 11 17 11C17.3181 11 17.6293 11.0297 17.9309 11.0865C17.4909 8.20635 15.0031 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C12.1378 18 12.2745 17.9954 12.41 17.9862C12.2741 17.6725 12.1694 17.3421 12.0998 16.999Z" 
                fill="currentColor"
                clipRule="evenodd"
                fillRule="evenodd"
                >
                </path>
                <circle cx="16.5" cy="15" r="1.5" fill="currentColor" />
                <circle cx="2.5" cy="12" r="1.5" fill="currentColor" />
                <circle cx="18" cy="4" r="1.5" fill="currentColor" />
                <path d="M11.5 10.5V2.5M12.5 13.5V21.5" 
                stroke="currentColor"
                >
                </path>
              </svg>

              <h4 className="font-display effect-font-styling text-xl text-slate-12 leading-[32px] md:leading-none">
                Proactive blocklist tracking
              </h4>
            </div>

            <p className="text-sm leading-[1.6] text-gray-400 font-normal">
            Be the first to know if your domain is added to a{" "} 
            <InfoTooltip label="Domain Name System-based Blackhole Lists (DNSBLs) are intended to inform email providers of IP addresses and domains that are suspected of sending unwanted email.">
            DNSBLs 
            </InfoTooltip>
            , such as those offered by{" "} 
            <InfoTooltip label="Spamhaus is an international nonprofit organization that specializes in tracking and combating spam and email abuse.">
            Spamhaus 
            </InfoTooltip>
            , with removal requests generated by Resend.
            </p>
          </motion.div>
        ))}      
        
      </motion.div>
    </section>
  );
}

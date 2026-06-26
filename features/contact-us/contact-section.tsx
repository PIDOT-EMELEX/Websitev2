"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { CAL_BOOKING_URL } from "@/components/ui/book-call-link";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Glow */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-[#f69507]/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <span
            className="
              mb-6 inline-flex w-fit
              items-center gap-2
              rounded-full
              border border-[#f69507]/40
              bg-[#f69507]/10
              px-4 py-2
              text-sm
              text-[#f69507]
            "
          >
            Start A Conversation
          </span>

          <h2
            className="
              max-w-xl
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            "
          >
            Let&apos;s Build
            <br />
            Something Great.
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Whether you&apos;re a college,
            startup, founder, student organization,
            or enterprise partner,
            we&apos;d love to hear about your goals
            and explore how Pi Dot can help.
          </p>

          {/* Contact Info */}

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <Phone size={18} />
              </div>

              <span className="text-zinc-300">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <Mail size={18} />
              </div>

              <span className="text-zinc-300">
                hello@pidot.in
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-zinc-800
                  bg-zinc-900
                "
              >
                <MapPin size={18} />
              </div>

              <span className="text-zinc-300">
                Hyderabad, India
              </span>
            </div>

          </div>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap gap-8">

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                50+
              </h3>

              <p className="text-zinc-500">
                Colleges
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                10K+
              </h3>

              <p className="text-zinc-500">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#f69507]">
                100+
              </h3>

              <p className="text-zinc-500">
                Workshops
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE BOOKING CARD */}

        <div
          className="
            rounded-[32px]
            border border-[#f69507]/20
            bg-gradient-to-b
            from-[#f69507]
            to-[#e18a00]
            p-8
            shadow-[0_0_80px_rgba(246,149,7,0.15)]
          "
        >

          <h3
            className="
              mb-8
              text-3xl
              font-bold
              text-black
            "
          >
            Book An Appointment
          </h3>

          <div className="space-y-8">
            <div
              className="
                rounded-3xl
                bg-white/20
                p-6
                text-black
              "
            >
              <p className="text-lg font-semibold">
                Pick a time that works for you.
              </p>

              <p className="mt-3 text-sm leading-6 text-black/70">
                You will be redirected to our Cal.com booking page to choose an
                available slot and share the details for the conversation.
              </p>
            </div>

            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-black
                px-8 py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Book a Call

              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

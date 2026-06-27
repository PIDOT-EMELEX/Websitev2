"use client";

import { useEffect, useState } from "react";
import { Linkedin, Github } from "lucide-react";
import { TeamMember, getEnabledTeamMembers } from "@/lib/team-storage";

function StatusBadge({ status }: { status: "open" | "busy" }) {
  return (
    <span
      className={`text-xs font-medium leading-tight ${
        status === "open" ? "text-green-400" : "text-zinc-400"
      }`}
    >
      {status === "open" ? "Open to\nchat" : "Heads\ndown"}
    </span>
  );
}

function MemberCard({ m }: { m: TeamMember }) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-5 gap-4">
      {/* Top row: photo + name + status */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden bg-zinc-800">
            {m.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-zinc-500 font-bold text-lg">
                {m.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-white text-base leading-tight">{m.name}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{m.role}</p>
          </div>
        </div>
        <div className="text-right whitespace-pre-line pt-0.5">
          <StatusBadge status={m.status} />
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{m.bio}</p>

      {/* Footer: location + socials */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-zinc-500">{m.location}</span>
        <div className="flex gap-2">
          {m.linkedinUrl ? (
            <a
              href={m.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="h-7 w-7 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-[#f69507]/50 transition"
            >
              <Linkedin size={13} className="text-zinc-400" />
            </a>
          ) : (
            <span className="h-7 w-7 rounded-lg border border-zinc-800 flex items-center justify-center opacity-30">
              <Linkedin size={13} className="text-zinc-600" />
            </span>
          )}
          {m.githubUrl ? (
            <a
              href={m.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="h-7 w-7 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-[#f69507]/50 transition"
            >
              <Github size={13} className="text-zinc-400" />
            </a>
          ) : (
            <span className="h-7 w-7 rounded-lg border border-zinc-800 flex items-center justify-center opacity-30">
              <Github size={13} className="text-zinc-600" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamShowcase() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    setMembers(getEnabledTeamMembers());
  }, []);

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-zinc-500 mb-4">Team</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg mb-4">
            Practical operators<br />with product depth.
          </h2>
          <p className="text-zinc-400 max-w-xl text-base">
            A focused group combining research, design, engineering, and quality to ship
            clear, customer-facing outcomes.
          </p>
        </div>

        {/* Cards grid */}
        {members.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <MemberCard key={m.id} m={m} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-600 text-sm">No team members to display yet.</p>
        )}
      </div>
    </section>
  );
}
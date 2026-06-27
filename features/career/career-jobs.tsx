"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  enabled: boolean;
  workplaceType?: string;
  jobType?: string;
  experienceLevel?: string;
  skills?: string[];
  salary?: string;
}

interface Props {
  jobs: Job[];
}

const ITEMS_PER_PAGE = 10;

export default function CareerJobs({ jobs }: Props) {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const activeJobs = jobs.filter((j) => j.enabled);

  // unique locations & workplace types for dropdowns
  const locations = ["All", ...Array.from(new Set(activeJobs.map((j) => j.location).filter(Boolean)))];
  const types = ["All", ...Array.from(new Set(activeJobs.map((j) => j.workplaceType).filter(Boolean) as string[]))];

  const filtered = activeJobs.filter((j) => {
    const locOk = selectedLocation === "All" || j.location === selectedLocation;
    const typeOk = selectedType === "All" || j.workplaceType === selectedType;
    return locOk && typeOk;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePage = (p: number) => {
    setCurrentPage(p);
    document.getElementById("jobs-listing-section")?.scrollIntoView({ behavior: "smooth" });
  };

  if (activeJobs.length === 0) {
    return (
      <section className="pb-32 text-center px-6">
        <h2 className="text-4xl font-bold text-white">We are not hiring now&nbsp;:(</h2>
        <p className="mt-4 text-zinc-400">Please check back later.</p>
      </section>
    );
  }

  return (
    <section id="jobs-listing-section" className="bg-black text-white pb-32 px-6 scroll-mt-24">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Open Positions</h2>
          <p className="text-zinc-400">We&apos;re currently looking for help in the following areas:</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <select
            value={selectedLocation}
            onChange={(e) => { setSelectedLocation(e.target.value); setCurrentPage(1); }}
            className="w-full sm:w-52 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 focus:border-[#f69507] focus:outline-none transition-all appearance-none cursor-pointer"
          >
            {locations.map((l) => (
              <option key={l} value={l}>{l === "All" ? "All locations" : l}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
            className="w-full sm:w-52 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 focus:border-[#f69507] focus:outline-none transition-all appearance-none cursor-pointer"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t === "All" ? "All departments" : t}</option>
            ))}
          </select>
        </div>

        {/* Job List */}
        {filtered.length === 0 ? (
          <p className="text-center text-zinc-500 py-16 text-lg">No positions match your filters.</p>
        ) : (
          <div className="divide-y divide-zinc-800/70 border-y border-zinc-800/70">
            {paginated.map((job) => (
              <Link
                key={job.id}
                href={`/career/${job.id}`}
                className="group flex items-center justify-between gap-6 py-6 hover:px-2 transition-all duration-200"
              >
                <div>
                  <p className="text-lg font-semibold text-white group-hover:text-[#f69507] transition-colors">
                    {job.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm text-[#f69507]/80">{job.location}</span>
                    {job.workplaceType && (
                      <>
                        <span className="text-zinc-700 text-xs">•</span>
                        <span className="text-xs text-zinc-500">{job.workplaceType}</span>
                      </>
                    )}
                    {job.jobType && (
                      <>
                        <span className="text-zinc-700 text-xs">•</span>
                        <span className="text-xs text-zinc-500">{job.jobType}</span>
                      </>
                    )}
                  </div>
                </div>

                <span className="shrink-0 flex items-center gap-1.5 text-sm font-semibold text-[#f69507] group-hover:text-[#d17c00] transition-colors">
                  Apply
                  <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-white hover:border-[#f69507] disabled:opacity-30 transition"
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => handlePage(p)}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-medium transition ${
                  currentPage === p
                    ? "border-[#f69507] bg-[#f69507] text-black"
                    : "border-zinc-800 text-zinc-400 hover:border-[#f69507]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-white hover:border-[#f69507] disabled:opacity-30 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
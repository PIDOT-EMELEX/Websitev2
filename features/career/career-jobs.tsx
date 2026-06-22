"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Clock, ChevronLeft, ChevronRight, FileText } from "lucide-react";

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

const ITEMS_PER_PAGE = 6;

export default function CareerJobs({ jobs }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkplace, setSelectedWorkplace] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const activeJobs = jobs.filter((job) => job.enabled);

  // Filter jobs based on search query, workplace type, and job type
  const filteredJobs = activeJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.skills && job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesWorkplace =
      selectedWorkplace === "All" ||
      job.workplaceType === selectedWorkplace;

    const matchesJobType =
      selectedJobType === "All" ||
      job.jobType === selectedJobType;

    return matchesSearch && matchesWorkplace && matchesJobType;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of job listing
    const element = document.getElementById("jobs-listing-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (activeJobs.length === 0) {
    return (
      <section className="pb-32 text-center">
        <h2 className="text-5xl font-bold text-white">We are not hiring now :(</h2>
        <p className="mt-5 text-zinc-400">Please check back later.</p>
      </section>
    );
  }

  return (
    <section id="jobs-listing-section" className="pb-32 px-6 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        
        {/* SEARCH AND FILTERS BAR */}
        <div className="mb-12 rounded-[30px] border border-white/5 bg-[#0a0a0a]/80 p-6 backdrop-blur-md">
          <div className="grid gap-4 md:grid-cols-12">
            
            {/* Search Input */}
            <div className="relative md:col-span-6">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search jobs by title, skills, or location..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on new search
                }}
                className="w-full rounded-2xl border border-white/10 bg-black py-3.5 pl-12 pr-4 text-white placeholder-zinc-500 focus:border-[#f69507] focus:outline-none focus:ring-1 focus:ring-[#f69507] transition-all"
              />
            </div>

            {/* Workplace Type Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedWorkplace}
                onChange={(e) => {
                  setSelectedWorkplace(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white focus:border-[#f69507] focus:outline-none transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
              >
                <option value="All">All Workplace Types</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedJobType}
                onChange={(e) => {
                  setSelectedJobType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-white focus:border-[#f69507] focus:outline-none transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
              >
                <option value="All">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

          </div>
        </div>

        {/* JOBS GRID */}
        {filteredJobs.length === 0 ? (
          <div className="py-20 text-center rounded-[30px] border border-white/5 bg-[#0a0a0a]/40">
            <p className="text-zinc-500 text-lg">No jobs match your search criteria. Try a different term or filter.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedJobs.map((job) => (
                <Link
                  href={`/career/${job.id}`}
                  key={job.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-[#0a0a0a] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#f69507]/30 cursor-pointer min-h-[380px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f69507]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Badges / Header details */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.workplaceType && (
                        <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-300">
                          {job.workplaceType}
                        </span>
                      )}
                      {job.jobType && (
                        <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-[#f69507]">
                          {job.jobType}
                        </span>
                      )}
                      {job.experienceLevel && (
                        <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-400">
                          {job.experienceLevel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#f69507] transition duration-300">
                      {job.title}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-1.5 text-zinc-400 text-sm">
                      <MapPin size={15} className="text-[#f69507]" />
                      <span>{job.location}</span>
                      {job.salary && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span>{job.salary}</span>
                        </>
                      )}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-zinc-400 line-clamp-3 mb-6">
                      {job.description}
                    </p>

                    {/* Skill tags */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-white/5">
                        {job.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-[11px] font-medium bg-[#0f0f0f] text-zinc-400 px-2 py-0.5 rounded-md border border-white/5">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="text-[11px] text-zinc-500 font-medium self-center px-1">
                            +{job.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#f69507] group-hover:underline flex items-center gap-1">
                      KNOW MORE & APPLY
                    </span>
                    <ChevronRight size={18} className="text-zinc-500 group-hover:text-[#f69507] transform group-hover:translate-x-1 transition duration-300" />
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white hover:border-[#f69507] disabled:opacity-40 disabled:hover:border-white/10 transition duration-300"
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-medium transition duration-300 ${
                      currentPage === page
                        ? "border-[#f69507] bg-[#f69507] text-black"
                        : "border-white/10 bg-[#0a0a0a] text-zinc-400 hover:border-[#f69507] hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white hover:border-[#f69507] disabled:opacity-40 disabled:hover:border-white/10 transition duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
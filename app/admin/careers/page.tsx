"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Users, 
  Plus, 
  Trash2, 
  Eye, 
  Check, 
  ArrowLeft, 
  Globe, 
  ExternalLink,
  MapPin,
  Clock,
  DollarSign,
  Copy
} from "lucide-react";

import {
  getJobs,
  saveJob,
  deleteJob,
  updateJob,
  getApplications,
  deleteApplication,
  CareerJob,
  JobApplication
} from "@/lib/career-storage";

export default function CareersAdminPage() {
  const [activeTab, setActiveTab] = useState<"positions" | "create" | "applications">("positions");
  const [jobs, setJobs] = useState<CareerJob[]>([]);
  const [apps, setApps] = useState<JobApplication[]>([]);

  // Form Fields State
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [workplaceType, setWorkplaceType] = useState("Remote");
  const [jobType, setJobType] = useState("Full-time");
  const [experienceLevel, setExperienceLevel] = useState("Entry level");
  const [salary, setSalary] = useState("");
  const [skillsText, setSkillsText] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");

  useEffect(() => {
    setJobs(getJobs());
    setApps(getApplications());
  }, []);

  const handleCreate = () => {
    if (!title || !location || !description) {
      alert("Please fill in Job Title, Location, and Description.");
      return;
    }

    const newJob: CareerJob = {
      id: Date.now().toString(),
      title,
      location,
      description,
      enabled: true,
      createdAt: new Date().toISOString(),
      workplaceType,
      jobType,
      experienceLevel,
      salary: salary.trim() || undefined,
      skills: skillsText ? skillsText.split(",").map(s => s.trim()).filter(Boolean) : [],
      requirements,
      benefits
    };

    saveJob(newJob);
    setJobs(getJobs());
    
    // Reset Form Fields
    setTitle("");
    setLocation("");
    setWorkplaceType("Remote");
    setJobType("Full-time");
    setExperienceLevel("Entry level");
    setSalary("");
    setSkillsText("");
    setDescription("");
    setRequirements("");
    setBenefits("");

    // Switch to positions tab
    setActiveTab("positions");
  };

  const handleToggleStatus = (id: string, currentStatus: boolean) => {
    updateJob(id, { enabled: !currentStatus });
    setJobs(getJobs());
  };

  const handleDeleteJob = (id: string) => {
    if (confirm("Are you sure you want to delete this position?")) {
      deleteJob(id);
      setJobs(getJobs());
    }
  };

  const handleDuplicateJob = (jobToDuplicate: CareerJob) => {
    const duplicatedJob: CareerJob = {
      ...jobToDuplicate,
      id: Date.now().toString(),
      title: `${jobToDuplicate.title} (Copy)`,
      enabled: false, // Clone as a Draft so it can be edited/reviewed first
      createdAt: new Date().toISOString(),
    };
    saveJob(duplicatedJob);
    setJobs(getJobs());
  };

  const handleDeleteApp = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      deleteApplication(id);
      setApps(getApplications());
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* HEADER BAR */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              href="/admin/dashboard"
              className="
                inline-flex items-center gap-2 mb-4
                text-zinc-400 hover:text-white transition text-sm
              "
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Careers Dashboard
            </h1>
          </div>

          {/* TAB SWITCHER */}
          <div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800">
            <button
              onClick={() => setActiveTab("positions")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeTab === "positions"
                  ? "bg-[#f69507] text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Briefcase size={16} />
              Positions ({jobs.length})
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeTab === "create"
                  ? "bg-[#f69507] text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Plus size={16} />
              Create Position
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeTab === "applications"
                  ? "bg-[#f69507] text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Users size={16} />
              Applications ({apps.length})
            </button>
          </div>
        </div>

        {/* TAB CONTENTS */}
        {activeTab === "positions" && (
          <div className="space-y-6">
            {jobs.length === 0 ? (
              <div className="text-center py-20 rounded-3xl border border-zinc-800 bg-zinc-950/30">
                <Briefcase className="mx-auto text-zinc-600 mb-4" size={48} />
                <p className="text-zinc-400">No job openings created yet.</p>
                <button
                  onClick={() => setActiveTab("create")}
                  className="mt-4 rounded-xl bg-[#f69507] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#ffb13b] transition"
                >
                  Create Your First Position
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="
                      flex flex-col md:flex-row md:items-center justify-between
                      rounded-3xl border border-zinc-850 bg-zinc-950 p-6 md:p-8 gap-6
                    "
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-bold">{job.title}</h3>
                        {job.workplaceType && (
                          <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
                            {job.workplaceType}
                          </span>
                        )}
                        {job.jobType && (
                          <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-xs text-[#f69507]">
                            {job.jobType}
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm flex items-center gap-1.5">
                        <Globe size={14} className="text-zinc-500" />
                        {job.location} {job.salary ? `• ${job.salary}` : ""}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                      <Link
                        href={`/career/${job.id}`}
                        target="_blank"
                        className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-semibold hover:border-white transition flex items-center gap-1.5"
                      >
                        <Eye size={15} />
                        View Job
                      </Link>

                      <button
                        onClick={() => handleDuplicateJob(job)}
                        className="rounded-xl border border-zinc-850 bg-zinc-900 px-4 py-2.5 text-sm font-semibold hover:border-[#f69507] hover:text-[#f69507] transition cursor-pointer flex items-center gap-1.5"
                      >
                        <Copy size={15} />
                        Duplicate
                      </button>

                      <button
                        onClick={() => handleToggleStatus(job.id, job.enabled)}
                        className={`
                          rounded-xl px-4 py-2.5 text-sm font-semibold transition cursor-pointer flex items-center gap-1.5
                          ${
                            job.enabled
                              ? "bg-green-600/10 text-green-400 border border-green-500/20 hover:bg-green-600/20"
                              : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-zinc-700"
                          }
                        `}
                      >
                        <Check size={15} />
                        {job.enabled ? "Active" : "Draft"}
                      </button>

                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        className="
                          rounded-xl border border-red-500/20 bg-red-950/10 px-4 py-2.5
                          text-sm font-semibold text-red-400 hover:bg-red-950/30 transition cursor-pointer flex items-center gap-1.5
                        "
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "create" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LINKEDIN STYLE CREATION FORM */}
            <div className="lg:col-span-7 rounded-3xl border border-zinc-850 bg-zinc-950 p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold border-b border-zinc-800 pb-3 flex items-center gap-2">
                <Briefcase size={20} className="text-[#f69507]" />
                Job Information
              </h2>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Job Title *</label>
                  <input
                    placeholder="e.g. Senior Software Engineer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Location *</label>
                    <input
                      placeholder="e.g. San Francisco, CA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition"
                    />
                  </div>

                  {/* Salary */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Compensation / Salary (Optional)</label>
                    <input
                      placeholder="e.g. $120k - $140k"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Workplace Type */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Workplace Type</label>
                    <select
                      value={workplaceType}
                      onChange={(e) => setWorkplaceType(e.target.value)}
                      className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition cursor-pointer"
                    >
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Job Type</label>
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition cursor-pointer"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Experience Level</label>
                    <select
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition cursor-pointer"
                    >
                      <option value="Entry level">Entry level</option>
                      <option value="Associate">Associate</option>
                      <option value="Mid-Senior level">Mid-Senior level</option>
                      <option value="Director">Director</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-455 uppercase mb-2">Skills (Comma-separated)</label>
                  <input
                    placeholder="e.g. React, Next.js, TypeScript, Node.js"
                    value={skillsText}
                    onChange={(e) => setSkillsText(e.target.value)}
                    className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition"
                  />
                  {skillsText && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {skillsText.split(",").map(s => s.trim()).filter(Boolean).map((s, idx) => (
                        <span key={idx} className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg text-xs font-medium text-zinc-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Description / Role Overview *</label>
                  <textarea
                    rows={5}
                    placeholder="Provide a general summary of the job description, team, and company vision..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition resize-y"
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Requirements (One per line)</label>
                  <textarea
                    rows={4}
                    placeholder="e.g. 3+ years experience in Frontend Development&#10;e.g. Knowledge of CSS and Tailwind CSS&#10;e.g. Strong team coordination skills"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition resize-y"
                  />
                </div>

                {/* Benefits */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-450 uppercase mb-2">Benefits & Offerings (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Health, Dental, and Vision coverage&#10;e.g. Flexible workspace options&#10;e.g. Yearly personal growth budget"
                    value={benefits}
                    onChange={(e) => setBenefits(e.target.value)}
                    className="w-full rounded-xl bg-black border border-zinc-800 p-4 focus:border-[#f69507] focus:outline-none transition resize-y"
                  />
                </div>

                <button
                  onClick={handleCreate}
                  className="
                    rounded-xl bg-[#f69507] px-8 py-3.5
                    font-bold text-black hover:bg-[#ffb13b] transition w-full cursor-pointer
                  "
                >
                  Create & Publish Position
                </button>
              </div>
            </div>

            {/* LIVE CARD PREVIEW PANEL */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="rounded-3xl border border-zinc-850 bg-zinc-950 p-6">
                <h3 className="text-lg font-bold text-zinc-400 mb-4 flex items-center gap-1.5">
                  <Eye size={16} /> Live Card Preview
                </h3>
                
                <div className="rounded-[30px] border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300">
                        {workplaceType}
                      </span>
                      <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs text-[#f69507]">
                        {jobType}
                      </span>
                      <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
                        {experienceLevel}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {title || "Job Position Title"}
                    </h3>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                      <MapPin size={15} className="text-[#f69507]" />
                      <span>{location || "Location"}</span>
                      {salary && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span>{salary}</span>
                        </>
                      )}
                    </div>

                    <p className="mt-4 text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {description || "Enter description content to preview the layout..."}
                    </p>

                    {skillsText && (
                      <div className="mt-6 pt-4 flex flex-wrap gap-1.5 border-t border-white/5">
                        {skillsText.split(",").slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-[11px] font-medium bg-[#0f0f0f] text-zinc-450 px-2 py-0.5 rounded-md border border-white/5">
                            {skill.trim()}
                          </span>
                        ))}
                        {skillsText.split(",").length > 3 && (
                          <span className="text-[11px] text-zinc-500 font-medium self-center px-1">
                            +{skillsText.split(",").length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#f69507]">
                      KNOW MORE & APPLY
                    </span>
                    <ExternalLink size={16} className="text-zinc-650" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "applications" && (
          <div className="space-y-6">
            {apps.length === 0 ? (
              <div className="text-center py-20 rounded-3xl border border-zinc-800 bg-zinc-950/30">
                <Users className="mx-auto text-zinc-600 mb-4" size={48} />
                <p className="text-zinc-400">No submissions received yet.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {apps.map((app) => (
                  <div
                    key={app.id}
                    className="
                      rounded-3xl border border-zinc-850 bg-zinc-950 p-6 md:p-8 space-y-4
                    "
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                        <p className="text-zinc-400 text-sm mt-0.5">Applied for: <span className="text-[#f69507] font-semibold">{app.jobTitle}</span></p>
                        <p className="text-zinc-500 text-xs mt-1">Submitted on {new Date(app.appliedAt).toLocaleString()}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteApp(app.id)}
                        className="
                          self-start rounded-xl border border-red-500/20 bg-red-950/10 px-4 py-2
                          text-xs font-semibold text-red-400 hover:bg-red-950/30 transition cursor-pointer flex items-center gap-1.5
                        "
                      >
                        <Trash2 size={13} />
                        Delete Application
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-900 pt-4 text-sm">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-semibold">Email Contact</span>
                        <p className="text-zinc-350 mt-1 font-medium select-all">{app.email}</p>
                      </div>
                      
                      {app.linkedinUrl && (
                        <div>
                          <span className="text-xs text-zinc-500 uppercase font-semibold">LinkedIn Profile</span>
                          <p className="mt-1">
                            <a 
                              href={app.linkedinUrl} 
                              target="_blank" 
                              className="text-[#f69507] hover:underline flex items-center gap-1 text-sm"
                            >
                              Open LinkedIn Profile
                              <ExternalLink size={12} />
                            </a>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 border-t border-zinc-900 pt-4 text-sm">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-semibold">Resume / Portfolio link</span>
                        <p className="mt-1">
                          <a 
                            href={app.resumeUrl} 
                            target="_blank" 
                            className="text-[#f69507] hover:underline flex items-center gap-1 text-sm break-all font-mono"
                          >
                            {app.resumeUrl}
                            <ExternalLink size={12} />
                          </a>
                        </p>
                      </div>
                    </div>

                    {app.message && (
                      <div className="border-t border-zinc-900 pt-4">
                        <span className="text-xs text-zinc-500 uppercase font-semibold block mb-1">Cover Message</span>
                        <div className="bg-black/40 border border-zinc-900 p-4 rounded-2xl text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                          {app.message}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
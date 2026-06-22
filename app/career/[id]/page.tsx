"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Award, 
  CheckCircle, 
  Send, 
  Loader2 
} from "lucide-react";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import PiDotGlow from "@/components/sections/pi-dot-glow";
import { getJobs, CareerJob, submitApplication } from "@/lib/career-storage";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;

  const [job, setJob] = useState<CareerJob | null>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const allJobs = getJobs();
    const foundJob = allJobs.find((j) => j.id === jobId);
    setJob(foundJob || null);
    setLoading(false);
  }, [jobId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;

    setSubmitting(true);
    // Simulate a brief API submit delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const applicationData = {
      id: Date.now().toString(),
      jobId: job.id,
      jobTitle: job.title,
      name,
      email,
      linkedinUrl,
      resumeUrl,
      message,
      appliedAt: new Date().toISOString(),
    };

    // Save candidate submission locally
    submitApplication(applicationData);

    // Fire off email notification request asynchronously
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobTitle: job.title,
        name,
        email,
        linkedinUrl,
        resumeUrl,
        message,
      }),
    }).catch((err) => {
      console.error("Failed to send email notification:", err);
    });

    setSubmitting(false);
    setSuccess(true);

    // Reset Form
    setName("");
    setEmail("");
    setLinkedinUrl("");
    setResumeUrl("");
    setMessage("");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        <Loader2 className="h-10 w-10 animate-spin text-[#f69507]" />
      </main>
    );
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-3xl font-bold mb-4">Job Position Not Found</h2>
        <p className="text-zinc-400 mb-8">The career opportunity you are looking for does not exist or has been closed.</p>
        <Link 
          href="/career" 
          className="inline-flex items-center gap-2 rounded-xl bg-[#f69507] text-black px-6 py-3 font-semibold transition hover:bg-[#ffb13b]"
        >
          <ArrowLeft size={18} />
          Back to Careers
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* NAVBAR */}
      <div className="fixed top-0 z-50 w-full flex justify-center pt-6 sm:pt-4">
        <NavbarDemo />
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 pt-32 pb-24 px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          
          {/* BACK TO CAREERS */}
          <div className="mb-8">
            <Link 
              href="/career" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#f69507] text-sm font-medium transition"
            >
              <ArrowLeft size={16} />
              Back to Careers
            </Link>
          </div>

          {/* JOB HEADER CARD */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-[#0a0a0a] p-8 md:p-12 mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f69507]/5 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {job.workplaceType && (
                  <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                    {job.workplaceType}
                  </span>
                )}
                {job.jobType && (
                  <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-semibold text-[#f69507]">
                    {job.jobType}
                  </span>
                )}
                {job.experienceLevel && (
                  <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400">
                    {job.experienceLevel}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-zinc-400 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#f69507]" />
                  <span>{job.location}</span>
                </div>
                {job.salary && (
                  <>
                    <span className="hidden md:inline text-zinc-700">•</span>
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-[#f69507]" />
                      <span>{job.salary}</span>
                    </div>
                  </>
                )}
                <span className="hidden md:inline text-zinc-700">•</span>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#f69507]" />
                  <span>Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* TWO COLUMN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: DETAILS */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2.5">
                  <Briefcase size={22} className="text-[#f69507]" />
                  Job Overview
                </h2>
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-base">
                  {job.description}
                </div>
              </div>

              {/* Skills */}
              {job.skills && job.skills.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2.5">
                    <Award size={22} className="text-[#f69507]" />
                    Skills Needed
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="rounded-xl bg-zinc-900 border border-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-[#f69507]/30 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.trim() && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2.5">
                    <CheckCircle size={22} className="text-[#f69507]" />
                    Role Requirements
                  </h2>
                  <ul className="space-y-3.5">
                    {job.requirements.split("\n").filter(line => line.trim()).map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#f69507] shrink-0" />
                        <span>{req.replace(/^[•\-\*\s]+/, "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {job.benefits && job.benefits.trim() && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2.5">
                    <CheckCircle size={22} className="text-[#f69507]" />
                    What We Offer & Benefits
                  </h2>
                  <ul className="space-y-3.5">
                    {job.benefits.split("\n").filter(line => line.trim()).map((ben, index) => (
                      <li key={index} className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500 shrink-0" />
                        <span>{ben.replace(/^[•\-\*\s]+/, "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: APPLICATION FORM */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-[30px] border border-white/5 bg-[#0a0a0a] p-8 md:p-10 shadow-2xl">
                
                <h3 className="text-2xl font-bold mb-6">
                  Apply for this position
                </h3>

                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center py-10"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500 mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">Application Submitted!</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Thank you for applying. We have received your details and will get back to you soon.
                      </p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium hover:border-[#f69507] transition"
                      >
                        Submit another application
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-white/10 bg-black p-3.5 text-white placeholder-zinc-600 focus:border-[#f69507] focus:outline-none transition"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-white/10 bg-black p-3.5 text-white placeholder-zinc-600 focus:border-[#f69507] focus:outline-none transition"
                        />
                      </div>

                      {/* LinkedIn URL */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">LinkedIn Profile URL</label>
                        <input
                          type="url"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full rounded-xl border border-white/10 bg-black p-3.5 text-white placeholder-zinc-600 focus:border-[#f69507] focus:outline-none transition"
                        />
                      </div>

                      {/* Resume Link */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Resume Link (Google Drive / Dropbox) *</label>
                        <input
                          type="url"
                          required
                          value={resumeUrl}
                          onChange={(e) => setResumeUrl(e.target.value)}
                          placeholder="https://drive.google.com/..."
                          className="w-full rounded-xl border border-white/10 bg-black p-3.5 text-white placeholder-zinc-600 focus:border-[#f69507] focus:outline-none transition"
                        />
                      </div>

                      {/* Message / Cover Letter */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Short Message / Pitch</label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us why you are a great fit..."
                          className="w-full rounded-xl border border-white/10 bg-black p-3.5 text-white placeholder-zinc-600 focus:border-[#f69507] focus:outline-none transition resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#f69507] text-black px-6 py-4 font-semibold hover:bg-[#ffb13b] disabled:opacity-50 transition mt-2 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Submit Application
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <PiDotGlow />
        </div>
        <div className="relative z-10 mt-75">
          <FooterDemo />
        </div>
      </section>
    </main>
  );
}

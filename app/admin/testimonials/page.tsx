"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Trash2, ToggleLeft, ToggleRight } from "lucide-react";

import {
  getTestimonials,
  saveTestimonial,
  deleteTestimonial,
  updateTestimonial,
  Testimonial,
} from "@/lib/testimonial-storage";

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  /* Form state */
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [quote, setQuote] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    setTestimonials(getTestimonials());
  }, []);

  const refresh = () => setTestimonials(getTestimonials());

  const handleCreate = () => {
    if (!name || !quote) return;

    saveTestimonial({
      id: Date.now().toString(),
      name,
      role,
      company,
      quote,
      avatarUrl: avatarUrl || "/blog/roy.jpg",
      logoUrl: logoUrl || "/assets/pi-dot-logomark.svg",
      enabled: true,
      createdAt: new Date().toISOString(),
    });

    refresh();
    setName("");
    setRole("");
    setCompany("");
    setQuote("");
    setAvatarUrl("");
    setLogoUrl("");
  };

  const handleToggle = (id: string, currentEnabled: boolean) => {
    updateTestimonial(id, { enabled: !currentEnabled });
    refresh();
  };

  const handleDelete = (id: string) => {
    deleteTestimonial(id);
    refresh();
  };

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      {/* BACK BUTTON */}
      <div className="mb-10">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium transition hover:border-zinc-500"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <h1 className="mb-2 text-5xl font-bold">Testimonial Management</h1>
      <p className="mb-12 text-zinc-400">
        Create, manage, and toggle testimonials across the entire website.
      </p>

      {/* ========== CREATE FORM ========== */}
      <div className="mb-16 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h2 className="mb-6 text-2xl font-semibold">Add Testimonial</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors"
          />
          <input
            placeholder="Role (e.g. CTO)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors"
          />
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors"
          />
          <input
            placeholder="Avatar URL (optional)"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors"
          />
          <input
            placeholder="Logo URL (optional)"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors md:col-span-2"
          />
          <textarea
            rows={4}
            placeholder="Testimonial quote *"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="w-full rounded-xl bg-black border border-zinc-800 focus:border-[#f69507] p-4 outline-none transition-colors resize-none md:col-span-2"
          />
        </div>

        <button
          onClick={handleCreate}
          disabled={!name || !quote}
          className="mt-6 rounded-xl bg-[#f69507] px-8 py-3 font-semibold text-black transition hover:bg-[#ffad33] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Add Testimonial
        </button>
      </div>

      {/* ========== TESTIMONIALS LIST ========== */}
      <h2 className="mb-6 text-2xl font-semibold">
        All Testimonials ({testimonials.length})
      </h2>

      {testimonials.length === 0 && (
        <p className="text-zinc-500">No testimonials yet. Create one above.</p>
      )}

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`flex items-start justify-between gap-6 rounded-2xl border p-6 transition ${
              t.enabled
                ? "border-zinc-800 bg-zinc-950"
                : "border-zinc-800/50 bg-zinc-950/50 opacity-60"
            }`}
          >
            {/* Left: Content */}
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <img
                src={t.avatarUrl || "/blog/roy.jpg"}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover shrink-0 border border-zinc-700"
              />
              <div className="min-w-0">
                <h3 className="text-lg font-bold truncate">{t.name}</h3>
                <p className="text-sm text-zinc-400">
                  {t.role}
                  {t.company && `, ${t.company}`}
                </p>
                <p className="mt-2 text-sm text-zinc-300 line-clamp-2">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleToggle(t.id, t.enabled)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                  t.enabled
                    ? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
                title={t.enabled ? "Disable" : "Enable"}
              >
                {t.enabled ? (
                  <ToggleRight size={18} />
                ) : (
                  <ToggleLeft size={18} />
                )}
                {t.enabled ? "Enabled" : "Disabled"}
              </button>

              <button
                onClick={() => handleDelete(t.id)}
                className="flex items-center gap-2 rounded-xl bg-red-600/20 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-600/30"
                title="Delete"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

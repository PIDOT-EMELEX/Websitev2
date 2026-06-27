"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, ArrowLeft, Check, X, Copy } from "lucide-react";
import {
  TeamMember,
  getTeamMembers,
  saveTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "@/lib/team-storage";

const EMPTY: Omit<TeamMember, "id"> = {
  name: "",
  role: "",
  bio: "",
  location: "",
  photo: "",
  status: "open",
  linkedinUrl: "",
  githubUrl: "",
  order: 0,
  enabled: true,
};

export default function AdminTeamPage() {
  const router = useRouter();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState<Omit<TeamMember, "id">>(EMPTY);
  const [isAdding, setIsAdding] = useState(false);

  const refresh = () => setMembers(getTeamMembers());

  useEffect(() => { refresh(); }, []);

  const handleAdd = () => {
    setForm({ ...EMPTY, order: members.length + 1 });
    setEditing(null);
    setIsAdding(true);
  };

  const handleEdit = (m: TeamMember) => {
    setEditing(m);
    setForm({ ...m });
    setIsAdding(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) return alert("Name is required");
    if (editing) {
      updateTeamMember(editing.id, form);
    } else {
      saveTeamMember({ ...form, id: crypto.randomUUID() });
    }
    refresh();
    setIsAdding(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this team member?")) return;
    deleteTeamMember(id);
    refresh();
  };

  const handleDuplicate = (m: TeamMember) => {
    saveTeamMember({
      ...m,
      id: crypto.randomUUID(),
      name: `${m.name} (Copy)`
    });
    refresh();
  };

  const handleToggleEnabled = (id: string, current: boolean) => {
    updateTeamMember(id, { enabled: !current });
    refresh();
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Dashboard</span>
          </button>
          <div className="h-4 w-px bg-zinc-800" />
          <h1 className="text-3xl font-bold">Team Management</h1>
          <button
            onClick={handleAdd}
            className="ml-auto flex items-center gap-2 rounded-xl bg-[#f69507] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            <Plus size={16} />
            Add Member
          </button>
        </div>

        {/* Form */}
        {isAdding && (
          <div className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-xl font-bold mb-6">
              {editing ? "Edit Member" : "New Member"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Name", key: "name" },
                { label: "Role / Title", key: "role" },
                { label: "Location", key: "location" },
                { label: "LinkedIn URL", key: "linkedinUrl" },
                { label: "GitHub URL", key: "githubUrl" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="mb-1 block text-sm text-zinc-400">{label}</label>
                  <input
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={label}
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#f69507] transition"
                  />
                </div>
              ))}

              <div>
                <label className="mb-1 block text-sm text-zinc-400">Photo</label>
                <div className="flex items-center gap-4">
                  {form.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.photo} alt="Preview" className="h-12 w-12 rounded-xl object-cover bg-zinc-800" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setForm({ ...form, photo: reader.result as string });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full text-sm text-zinc-400 file:mr-4 file:cursor-pointer file:rounded-xl file:border-0 file:bg-zinc-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-zinc-700 transition"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-sm text-zinc-400">Bio</label>
                <textarea
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  rows={3}
                  placeholder="Short bio..."
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#f69507] transition resize-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-zinc-400">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value as "open" | "busy" })}
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#f69507] transition"
                >
                  <option value="open">Open to chat</option>
                  <option value="busy">Heads down</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm text-zinc-400">Display Order</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#f69507] transition"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="text-sm text-zinc-400">Visible on website</label>
                <button
                  onClick={() => setForm({ ...form, enabled: !form.enabled })}
                  className={`w-10 h-6 rounded-full transition-colors ${form.enabled ? "bg-[#f69507]" : "bg-zinc-700"} relative`}
                >
                  <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${form.enabled ? "translate-x-5" : "translate-x-1"}`} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-xl bg-[#f69507] px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                <Check size={16} /> Save
              </button>
              <button
                onClick={() => { setIsAdding(false); setEditing(null); }}
                className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 transition"
              >
                <X size={16} /> Cancel
              </button>
            </div>
          </div>
        )}

        {/* Member List */}
        <div className="space-y-4">
          {members.length === 0 && (
            <p className="text-center text-zinc-600 py-20">No team members yet. Add one above.</p>
          )}
          {members.map((m) => (
            <div
              key={m.id}
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-4"
            >
              {/* Photo */}
              <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden bg-zinc-800">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-zinc-600 text-lg font-bold">
                    {m.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white">{m.name}</p>
                <p className="text-sm text-zinc-500">{m.role}</p>
              </div>

              {/* Status badge */}
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                m.status === "open"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-zinc-800 text-zinc-400"
              }`}>
                {m.status === "open" ? "Open to chat" : "Heads down"}
              </span>

              {/* Enabled toggle */}
              <button
                onClick={() => handleToggleEnabled(m.id, m.enabled)}
                title={m.enabled ? "Visible" : "Hidden"}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${
                  m.enabled ? "bg-[#f69507]/10 text-[#f69507]" : "bg-zinc-800 text-zinc-600"
                }`}
              >
                {m.enabled ? <Check size={14} /> : <X size={14} />}
              </button>

              {/* Duplicate */}
              <button
                onClick={() => handleDuplicate(m)}
                className="h-8 w-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition"
                title="Duplicate"
              >
                <Copy size={14} className="text-zinc-400" />
              </button>

              {/* Edit */}
              <button
                onClick={() => handleEdit(m)}
                className="h-8 w-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition"
                title="Edit"
              >
                <Pencil size={14} className="text-zinc-400" />
              </button>

              {/* Delete */}
              <button
                onClick={() => handleDelete(m.id)}
                className="h-8 w-8 rounded-lg bg-zinc-800 hover:bg-red-900/40 flex items-center justify-center transition"
              >
                <Trash2 size={14} className="text-zinc-400 hover:text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

import { FileText, Briefcase, MessageSquareQuote, Download, Upload, Users } from "lucide-react";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AdminHome() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = {
      pidot_blogs: localStorage.getItem("pidot_blogs"),
      pidot_careers: localStorage.getItem("pidot_careers"),
      pidot_applications: localStorage.getItem("pidot_applications"),
      pidot_testimonials: localStorage.getItem("pidot_testimonials"),
      pidot_team: localStorage.getItem("pidot_team"),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pidot_data_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.pidot_blogs) localStorage.setItem("pidot_blogs", json.pidot_blogs);
        if (json.pidot_careers) localStorage.setItem("pidot_careers", json.pidot_careers);
        if (json.pidot_applications) localStorage.setItem("pidot_applications", json.pidot_applications);
        if (json.pidot_testimonials) localStorage.setItem("pidot_testimonials", json.pidot_testimonials);
        if (json.pidot_team) localStorage.setItem("pidot_team", json.pidot_team);
        alert("Data imported successfully!");
        window.location.reload();
      } catch (err) {
        alert("Failed to parse the file.");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-6xl px-6 py-24">

        <h1
          className="
            text-center
            text-5xl
            font-bold
          "
        >
          Admin Dashboard
        </h1>

        <p
          className="
            mt-4
            text-center
            text-zinc-400
          "
        >
          Manage Blogs, Careers, and Testimonials
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            <Download size={18} className="text-[#f69507]" />
            Export Data
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            <Upload size={18} className="text-[#f69507]" />
            Import Data
          </button>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImport} 
            accept=".json" 
            className="hidden" 
          />
        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {/* BLOG CARD */}

          <button
            onClick={() =>
              router.push("/admin/blogs")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <FileText
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Blog Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Create, edit, publish and manage
              blogs.
            </p>
          </button>

          {/* CAREER CARD */}

          <button
            onClick={() =>
              router.push("/admin/careers")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <Briefcase
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Career Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Manage hiring positions and
              career page visibility.
            </p>
          </button>

          {/* TESTIMONIAL CARD */}

          <button
            onClick={() =>
              router.push("/admin/testimonials")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <MessageSquareQuote
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Testimonial Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Manage testimonials displayed
              across the website.
            </p>
          </button>

          {/* TEAM CARD */}

          <button
            onClick={() =>
              router.push("/admin/team")
            }
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-10
              text-left
              transition
              hover:border-[#f69507]
            "
          >
            <Users
              size={50}
              className="
                text-[#f69507]
              "
            />

            <h2
              className="
                mt-6
                text-3xl
                font-bold
              "
            >
              Team Management
            </h2>

            <p
              className="
                mt-3
                text-zinc-400
              "
            >
              Manage team members displayed
              on the About page.
            </p>
          </button>

        </div>

      </div>

    </main>
  );
}
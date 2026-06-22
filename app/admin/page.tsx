"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (username === "admin" && password === "vamshi@pidot") {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-10">
        <h1 className="text-4xl font-bold text-white">Admin Login</h1>
        <p className="mt-3 text-zinc-400">
          Login to access the PI DOT dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">
          {/* USERNAME */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none focus:border-[#f69507] transition-colors"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none focus:border-[#f69507] transition-colors"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#f69507] py-4 font-semibold text-white transition hover:opacity-90"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
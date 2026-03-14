"use client";

import { useEffect, useState } from "react";

interface PreviewData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function LinkPreviewCard({ url }: { url: string }) {
  const [preview, setPreview] = useState<PreviewData | null>(null);

  useEffect(() => {
    async function fetchPreview() {
      const res = await fetch("/api/link-preview", {
        method: "POST",
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setPreview(data);
    }

    fetchPreview();
  }, [url]);

  if (!preview) {
    return (
      <div className="p-4 border rounded-lg animate-pulse">
        Loading preview...
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      className="block border rounded-xl overflow-hidden hover:shadow-lg transition border-white/30"
    >
      {preview.image && (
        <img
          src={preview.image}
          alt={preview.title}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-semibold text-lg">{preview.title}</h3>
        <p className="text-sm text-white/70">{preview.description}</p>
      </div>
    </a>
  );
}
"use client";

import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog-storage";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();

  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const headings =
  blog.content
    ?.map(
      (
        block: any,
        index: number
      ) => ({
        ...block,
        originalIndex: index,
      })
    )
    .filter(
      (block: any) =>
        block.type === "heading"
    ) || [];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-24">

        <span className="text-[#f69507] text-sm font-medium">
          {blog.category}
        </span>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          {blog.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-zinc-400">
          <span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>

          <span>•</span>

          <span>{blog.readTime}</span>

          <span>•</span>

          <div className="flex items-center gap-3">
            <img
              src={
                blog.authorImage?.trim()
                  ? blog.authorImage
                  : "/blog/roy.jpg"
              }
              alt={blog.author}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span>{blog.author}</span>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg text-zinc-400">
          {blog.excerpt}
        </p>

      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6">
        <img
          src={
            blog.image?.trim()
              ? blog.image
              : "/blog/hero.png"
          }
          alt={blog.title}
          className="
            h-[500px]
            w-full
            rounded-3xl
            object-cover
          "
        />
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            <div className="space-y-12">

              {blog.content?.map(
                (block: any, index: number) => {

                  if (block.type === "heading") {
                    return (
                      <h2
                        id={`section-${index}`}
                        key={index}
                        className="text-4xl font-bold text-white scroll-mt-32"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "subheading") {
                    return (
                      <h3
                        key={index}
                        className="text-2xl font-semibold text-[#f69507]"
                      >
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <div
                        key={index}
                        className="whitespace-pre-line text-lg leading-8 text-zinc-300"
                      >
                        {block.text}
                      </div>
                    );
                  }

                  if (block.type === "blockquote") {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-[#f69507] pl-6 py-1 my-6"
                      >
                        <p className="text-xl italic text-zinc-300 leading-relaxed">
                          {block.text}
                        </p>
                        {block.attribution && (
                          <cite className="block mt-3 text-sm text-zinc-500 not-italic">
                            {block.attribution}
                          </cite>
                        )}
                      </blockquote>
                    );
                  }

                  if (block.type === "code") {
                    return (
                      <div key={index} className="rounded-xl overflow-hidden border border-zinc-800 my-6">
                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                          <span className="text-xs text-zinc-500 font-mono">
                            {block.language || "code"}
                          </span>
                          <div className="flex gap-1.5">
                            {["bg-red-500","bg-yellow-500","bg-green-500"].map(c => (
                              <div key={c} className={`w-2.5 h-2.5 rounded-full opacity-50 ${c}`} />
                            ))}
                          </div>
                        </div>
                        <pre className="bg-zinc-950 p-5 overflow-x-auto">
                          <code className="font-mono text-sm text-emerald-400 leading-7 whitespace-pre">
                            {block.text}
                          </code>
                        </pre>
                      </div>
                    );
                  }

                  if (block.type === "points") {
                    return (
                      <ul
                        key={index}
                        className="space-y-3 pl-0"
                      >
                        {(block.items || []).map(
                          (item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300 text-lg leading-relaxed">
                              <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#f69507] shrink-0" />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    );
                  }

                  if (block.type === "numbered-list") {
                    return (
                      <ol key={index} className="space-y-3 pl-0">
                        {(block.items || []).map(
                          (item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300 text-lg leading-relaxed">
                              <span className="text-[#f69507] font-semibold shrink-0 w-6 text-right">{i + 1}.</span>
                              {item}
                            </li>
                          )
                        )}
                      </ol>
                    );
                  }

                  if (block.type === "image") {
                    return (
                      <figure key={index} className="my-6">
                        <img
                          src={block.src}
                          alt={block.caption || ""}
                          className="w-full rounded-2xl object-cover"
                        />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-zinc-500 mt-3">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }

                  if (block.type === "divider") {
                    return (
                      <div key={index} className="flex items-center gap-4 py-4">
                        <div className="flex-1 border-t border-zinc-800" />
                        <span className="text-zinc-700 tracking-[8px] text-xs">· · ·</span>
                        <div className="flex-1 border-t border-zinc-800" />
                      </div>
                    );
                  }

                  if (block.type === "callout") {
                    const styles: Record<string, { ring: string; bg: string; label: string }> = {
                      info:    { ring: "border-blue-700/50",    bg: "bg-blue-950/30",    label: "💡" },
                      warning: { ring: "border-amber-700/50",   bg: "bg-amber-950/30",   label: "⚠️" },
                      tip:     { ring: "border-green-700/50",   bg: "bg-green-950/30",   label: "✅" },
                      success: { ring: "border-emerald-700/50", bg: "bg-emerald-950/30", label: "🎉" },
                    };
                    const ct = block.calloutType || "info";
                    const s = styles[ct] || styles.info;
                    return (
                      <div key={index} className={`rounded-xl border p-5 ${s.ring} ${s.bg}`}>
                        <p className="text-base text-zinc-300 leading-relaxed">
                          <span className="mr-2">{s.label}</span>
                          {block.text}
                        </p>
                      </div>
                    );
                  }

                  return null;
                }
              )}


            </div>

          </div>

          {/* RIGHT TOC */}
          <div className="lg:col-span-4">

            <div
              className="
                sticky
                top-28
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950
                p-6
              "
            >
              <h3 className="mb-6 text-lg font-semibold">
                Table of Contents
              </h3>

              <div className="space-y-4">
                {headings.map(
                  (heading: any, index: number) => (
                    <a
                      key={index}
                      href={`#section-${heading.originalIndex}`}
                      className="
                        block
                        text-sm
                        text-zinc-400
                        transition
                        hover:text-[#f69507]
                      "
                    >
                      {heading.text}
                    </a>
                  )
                )}
              </div>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
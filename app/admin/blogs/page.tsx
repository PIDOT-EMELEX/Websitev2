"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  BlogPost,
  getBlogs,
  saveBlog,
  deleteBlog,
  updateBlog,
} from "@/lib/blog-storage";

export default function DashboardPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("General");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const handleCreateBlog = () => {
    if (!title) {
      alert("Please enter a blog title");
      return;
    }

    const newBlog: BlogPost = {
      id: Date.now().toString(),

      title,
      slug,
      excerpt,

      image: "/blog/hero.png",

      category,
      college: "",

      author,

      readTime: "5 Min Read",

      featured: false,

      showOnBlogPage: false,

      createdAt: new Date().toISOString(),

      content: [],
    };

    saveBlog(newBlog);

    router.push(`/admin/editor/${slug}`);
  };

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      {/* BACK BUTTON */}
      <div className="mb-10">
        <Link
          href="/admin/dashboard"
          className="
            inline-flex items-center gap-2
            rounded-xl border border-zinc-700
            bg-zinc-900 px-5 py-3
            text-sm font-medium
          "
        >
          ← Back to Home
        </Link>
      </div>

      {/* CREATE BLOG */}
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <h1 className="text-5xl font-bold">
            Blog Dashboard
          </h1>

          <p className="mt-4 text-zinc-400">
            Create and manage blogs.
          </p>
        </div>

        <div className="space-y-8">
          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Blog Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter blog title"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4 outline-none
              "
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Slug
            </label>

            <div
              className="
                rounded-2xl border
                border-zinc-800
                bg-zinc-950
                px-5 py-4
                text-zinc-500
              "
            >
              {slug || "blog-slug"}
            </div>
          </div>

          {/* AUTHOR */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Author
            </label>

            <input
              value={author}
              onChange={(e) =>
                setAuthor(e.target.value)
              }
              placeholder="Author name"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4 outline-none
              "
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4 outline-none
              "
            >
              <option>General</option>
              <option>Placements</option>
              <option>Hackathons</option>
              <option>Workshops</option>
              <option>Industry Connect</option>
            </select>
          </div>

          {/* EXCERPT */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Excerpt
            </label>

            <textarea
              rows={4}
              value={excerpt}
              onChange={(e) =>
                setExcerpt(e.target.value)
              }
              placeholder="Short blog description"
              className="
                w-full rounded-2xl
                border border-zinc-800
                bg-zinc-950
                px-5 py-4 outline-none
              "
            />
          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={handleCreateBlog}
            className="
              rounded-2xl
              bg-[#f69507]
              px-10 py-4
              font-semibold
              text-black
            "
          >
            Create Blog
          </button>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="mx-auto mt-24 max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold">
          Existing Blogs
        </h2>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                flex items-center
                justify-between
                rounded-2xl
                border border-zinc-800
                bg-zinc-950
                p-6
              "
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {blog.title}
                </h3>

                <div className="mt-2 flex gap-3 text-sm text-zinc-500">
                  <span>{blog.category}</span>
                  <span>•</span>

                  <span>
                    {blog.showOnBlogPage
                      ? "Visible"
                      : "Hidden"}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* EDIT */}
                <button
                  onClick={() =>
                    router.push(
                      `/admin/editor/${blog.slug}`
                    )
                  }
                  className="
                    rounded-xl
                    bg-blue-600
                    px-5 py-2
                    text-sm
                  "
                >
                  Edit
                </button>

                {/* TOGGLE */}
                <button
                  onClick={() => {
                    updateBlog(blog.slug, {
                      showOnBlogPage:
                        !blog.showOnBlogPage,
                    });

                    setBlogs(getBlogs());
                  }}
                  className={`
                    rounded-xl px-5 py-2 text-sm
                    ${
                      blog.showOnBlogPage
                        ? "bg-green-600"
                        : "bg-zinc-700"
                    }
                  `}
                >
                  {blog.showOnBlogPage
                    ? "Visible"
                    : "Hidden"}
                </button>

                {/* DELETE */}
                <button
                  onClick={() => {
                    deleteBlog(blog.slug);

                    setBlogs(getBlogs());
                  }}
                  className="
                    rounded-xl
                    bg-red-600
                    px-5 py-2
                    text-sm
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
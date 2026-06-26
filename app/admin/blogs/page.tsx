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

export default function AdminBlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categoryInputOpen, setCategoryInputOpen] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");

  const defaultCategories = [
    "General",
    "Placements",
    "Hackathons",
    "Workshops",
    "Industry Connect",
    "Case Studies",
    "Insights",
    "AI & Technology",
    "Success Stories",
  ];

  // Get all unique categories from existing blogs
  const allCategories = Array.from(
    new Set([...defaultCategories, ...blogs.map((b) => b.category).filter(Boolean)])
  ).sort();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("General");
  const [author, setAuthor] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);

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
      image: image || "",
      category,
      college: "",
      author,
      authorImage: authorImage || "/blog/roy.jpg",
      readTime: "5 Min Read",
      featured,
      showOnBlogPage: false,
      createdAt: new Date().toISOString(),
      content: [
        {
          type: "paragraph",
          text: "Start editing your blog content in the editor.",
        },
      ],
    };

    saveBlog(newBlog);
    setTitle("");
    setExcerpt("");
    setCategory("General");
    setAuthor("");
    setAuthorImage("");
    setImage("");
    setFeatured(false);
    setBlogs(getBlogs());
    router.push(`/admin/editor/${slug}`);
  };

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      {/* BACK BUTTON */}
      <div className="mb-10">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* CREATE BLOG */}
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <h1 className="text-5xl font-bold">Blog Dashboard</h1>
          <p className="mt-4 text-zinc-400">
            Create and manage blog articles.
          </p>
        </div>

        <div className="space-y-8">
          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Blog Title *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Slug</label>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-zinc-500">
              {slug || "blog-slug"}
            </div>
          </div>

          {/* AUTHOR */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Author Name
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
            />
          </div>

          {/* AUTHOR IMAGE */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Author Image
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                value={authorImage}
                onChange={(e) => setAuthorImage(e.target.value)}
                placeholder="/blog/roy.jpg"
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
              />
              <label className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm text-zinc-400 cursor-pointer hover:border-zinc-600 transition-colors">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setAuthorImage(URL.createObjectURL(file));
                    }
                  }}
                />
              </label>
            </div>
            {authorImage && (
              <img
                src={authorImage}
                alt="Author preview"
                className="mt-3 h-16 w-16 rounded-full object-cover border border-zinc-700"
              />
            )}
          </div>

          {/* FEATURED IMAGE */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Featured Image
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="/blog/hero.png"
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
              />
              <label className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm text-zinc-400 cursor-pointer hover:border-zinc-600 transition-colors">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setImage(URL.createObjectURL(file));
                    }
                  }}
                />
              </label>
            </div>
            {image && (
              <img
                src={image}
                alt="Featured preview"
                className="mt-3 w-full max-w-[300px] rounded-2xl object-cover border border-zinc-700"
              />
            )}
          </div>

          {/* CATEGORY */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Category
            </label>
            <div className="relative">
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCategoryInput(e.target.value);
                }}
                onFocus={() => setCategoryInputOpen(true)}
                placeholder="Type or select a category"
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
              />
              
              {/* Category Dropdown */}
              {categoryInputOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setCategoryInputOpen(false)}
                  />
                  <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-48 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg">
                    {allCategories
                      .filter((cat) =>
                        cat.toLowerCase().includes(category.toLowerCase())
                      )
                      .map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setCategory(cat);
                            setCategoryInputOpen(false);
                          }}
                          className="w-full px-5 py-3 text-left text-white hover:bg-zinc-900 transition-colors border-b border-zinc-800/50 last:border-b-0"
                        >
                          {cat}
                        </button>
                      ))}
                    
                    {/* Custom category option if input doesn't match any existing */}
                    {category &&
                      !allCategories.some(
                        (cat) => cat.toLowerCase() === category.toLowerCase()
                      ) && (
                        <button
                          onClick={() => {
                            setCategory(category);
                            setCategoryInputOpen(false);
                          }}
                          className="w-full px-5 py-3 text-left text-[#f69507] hover:bg-zinc-900 transition-colors border-t border-zinc-800 font-medium"
                        >
                          ✓ Create new: "{category}"
                        </button>
                      )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* EXCERPT */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Excerpt (Summary)
            </label>
            <textarea
              rows={4}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short blog description (appears in listings)"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-[#f69507]"
            />
          </div>

          {/* FEATURED TOGGLE */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-5 w-5 rounded border-zinc-800 bg-zinc-950"
            />
            <label htmlFor="featured" className="text-sm text-zinc-400">
              Mark as Featured Blog
            </label>
          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={handleCreateBlog}
            className="rounded-2xl bg-[#f69507] px-10 py-4 font-semibold text-black hover:bg-[#e68500] transition-colors"
          >
            Create Blog & Start Editing
          </button>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="mx-auto mt-24 max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold">Existing Blogs</h2>

        <div className="space-y-4">
          {blogs.length === 0 ? (
            <p className="text-center text-zinc-500">No blogs created yet.</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-500">
                    <span>{blog.category}</span>
                    <span>•</span>
                    <span>by {blog.author}</span>
                    <span>•</span>
                    <span>{blog.showOnBlogPage ? "Published" : "Draft"}</span>
                    {blog.featured && (
                      <>
                        <span>•</span>
                        <span className="text-[#f69507]">⭐ Featured</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* EDIT */}
                  <button
                    onClick={() =>
                      router.push(`/admin/editor/${blog.slug}`)
                    }
                    className="rounded-xl bg-blue-600 px-5 py-2 text-sm hover:bg-blue-500 transition-colors"
                  >
                    Edit
                  </button>

                  {/* DUPLICATE */}
                  <button
                    onClick={() => {
                      const newTitle = `${blog.title} (Copy)`;
                      const baseSlug = blog.slug;
                      let newSlug = `${baseSlug}-copy`;
                      
                      // Check for slug collisions and generate a unique one
                      const existingBlogs = getBlogs();
                      let counter = 1;
                      while (existingBlogs.some((b) => b.slug === newSlug)) {
                        newSlug = `${baseSlug}-copy-${counter}`;
                        counter++;
                      }

                      const newBlog: BlogPost = {
                        ...blog,
                        id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
                        title: newTitle,
                        slug: newSlug,
                        featured: false,
                        showOnBlogPage: false,
                        createdAt: new Date().toISOString(),
                      };

                      saveBlog(newBlog);
                      setBlogs(getBlogs());
                    }}
                    className="rounded-xl bg-purple-600 px-5 py-2 text-sm hover:bg-purple-500 transition-colors"
                  >
                    Duplicate
                  </button>

                  {/* TOGGLE VISIBILITY */}
                  <button
                    onClick={() => {
                      updateBlog(blog.slug, {
                        showOnBlogPage: !blog.showOnBlogPage,
                      });
                      setBlogs(getBlogs());
                    }}
                    className={`rounded-xl px-5 py-2 text-sm transition-colors ${
                      blog.showOnBlogPage
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-zinc-700 hover:bg-zinc-600"
                    }`}
                  >
                    {blog.showOnBlogPage ? "Published" : "Draft"}
                  </button>

                  {/* TOGGLE FEATURED */}
                  <button
                    onClick={() => {
                      updateBlog(blog.slug, {
                        featured: !blog.featured,
                      });
                      setBlogs(getBlogs());
                    }}
                    className={`rounded-xl px-5 py-2 text-sm transition-colors ${
                      blog.featured
                        ? "bg-[#f69507] text-black hover:bg-[#e68500]"
                        : "bg-zinc-700 hover:bg-zinc-600 text-white"
                    }`}
                    title={blog.featured ? "Remove from featured" : "Mark as featured"}
                  >
                    {blog.featured ? "⭐ Featured" : "Feature"}
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          "Are you sure you want to delete this blog?"
                        )
                      ) {
                        deleteBlog(blog.slug);
                        setBlogs(getBlogs());
                      }
                    }}
                    className="rounded-xl bg-red-600 px-5 py-2 text-sm hover:bg-red-500 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-storage";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

interface PremiumBlogListProps {
  blogs: BlogPost[];
}

export function PremiumBlogList({ blogs }: PremiumBlogListProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-16">
        {blogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            className="group cursor-pointer border-b border-gray-200 pb-16 last:border-b-0"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="space-y-6">
                {/* Category & Metadata */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="font-medium uppercase tracking-wide text-black">
                    {blog.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{blog.readTime}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold leading-tight text-black transition-colors duration-200 group-hover:text-gray-600">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-lg leading-relaxed text-gray-600">
                  {blog.excerpt}
                </p>

                {/* Featured Image */}
                {blog.image && (
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-xl object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Author */}
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={blog.authorImage || "/blog/roy.jpg"}
                    alt={blog.author}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-600">{blog.author}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

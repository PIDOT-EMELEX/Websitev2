"use client";

import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog-storage";
import { useParams } from "next/navigation";
import { PremiumBlogNav } from "@/components/ui/premium-blog-nav";
import { PremiumBlogArticle } from "@/components/ui/premium-blog-article";
import { PremiumBlogFooter } from "@/components/ui/premium-blog-footer";

export default function BlogDetailPage() {
  const params = useParams();

  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <PremiumBlogNav />
      <PremiumBlogArticle
        title={blog.title}
        category={blog.category}
        date={new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        readTime={blog.readTime}
        author={blog.author}
        authorImage={blog.authorImage || "/blog/roy.jpg"}
        image={blog.image || "/blog/hero.png"}
        content={blog.content || []}
      />
      <PremiumBlogFooter />
    </>
  );
}

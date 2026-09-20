import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Yoga Blog | Tips, Guides & Poses",
  description:
    "Yoga articles, guides and tips from Arti Yoga Studio Indore. Learn about yoga for beginners, flexibility, stress relief, Surya Namaskar and more.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Yoga Blog | Arti Yoga Studio Indore",
    description: "Yoga articles, guides and tips from Arti Yoga Studio Indore.",
    url: `${siteConfig.url}/blog`,
  },
};

const categoryColors: Record<string, string> = {
  Beginners: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  Flexibility: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  Routines: "bg-blue-50 text-blue-600",
  Wellness: "bg-purple-50 text-purple-600",
  Poses: "bg-orange-50 text-orange-600",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="ys-container py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </Link>
          <p className="section-label mb-3">Yoga Knowledge</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Yoga Blog
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-xl">
            Guides, tips and insights to support your yoga practice — from
            beginner basics to advanced techniques.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="ys-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-md hover:border-[var(--color-primary)]/25 transition-all duration-200"
            >
              {/* Category colour bar */}
              <div className="h-1 bg-[var(--color-primary)]" />

              <div className="flex flex-col flex-1 p-6">
                {/* Category + read time */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[post.category] ??
                      "bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--color-text-faint)]">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-lg font-semibold text-[var(--color-text)] leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-faint)]">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs font-medium text-[var(--color-primary)] group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

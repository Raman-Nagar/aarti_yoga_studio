import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Arti Nagar"],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl font-semibold text-[var(--color-text)] mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display text-lg font-semibold text-[var(--color-text)] mt-7 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-[var(--color-text)] mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-[var(--color-text-2)] leading-relaxed ml-4 list-disc">
          {line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      // Inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={key++} className="text-[var(--color-text-2)] leading-relaxed">
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="font-semibold text-[var(--color-text)]">{part}</strong> : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Arti Nagar", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "Arti Yoga Studio",
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-[var(--color-bg)]">
        {/* Header */}
        <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="ys-container py-10 md:py-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                {post.category}
              </span>
              <span className="text-xs text-[var(--color-text-faint)]">{post.readTime}</span>
              <span className="text-xs text-[var(--color-text-faint)]">·</span>
              <span className="text-xs text-[var(--color-text-faint)]">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </span>
            </div>

            <h1 className="font-display text-2xl md:text-4xl font-semibold text-[var(--color-text)] leading-tight max-w-3xl">
              {post.title}
            </h1>

            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl leading-relaxed">
              {post.description}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-semibold">
                A
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text)]">Arti Nagar</p>
                <p className="text-xs text-[var(--color-text-muted)]">Yoga Instructor, Indore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="ys-container py-12 md:py-16">
          <div className="max-w-3xl">
            <article className="prose-custom">
              {renderContent(post.content)}
            </article>

            {/* CTA */}
            <div className="mt-14 p-8 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]">
              <p className="section-label mb-3">Ready to Start?</p>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-2">
                Practice yoga with Arti in Indore
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-5">
                Group classes and personal home-visit sessions available. Beginner friendly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Book a Session
                </Link>
                <a
                  href={`https://wa.me/919243863365?text=Hi Arti, I read your blog post "${post.title}" and would like to book a session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:border-[var(--color-primary)] transition-colors"
                >
                  WhatsApp Arti
                </a>
              </div>
            </div>

            {/* More posts */}
            {otherPosts.length > 0 && (
              <div className="mt-14">
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-6">
                  More Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group p-4 bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/25 hover:shadow-sm transition-all"
                    >
                      <span className="text-xs font-semibold text-[var(--color-primary)]">
                        {p.category}
                      </span>
                      <p className="text-sm font-medium text-[var(--color-text)] mt-1 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                        {p.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

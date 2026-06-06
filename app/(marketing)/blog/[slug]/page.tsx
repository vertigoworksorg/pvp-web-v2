import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Quote } from "lucide-react";
import { BlogCard, CategoryChip, formatDate } from "@/components/ui/BlogCard";
import { ConnectStrip } from "@/components/sections/ConnectStrip";
import { Button } from "@/components/ui/Button";
import { blogPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { asset } from "@/lib/utils";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      {/* Hero / article header */}
      <section
        className="relative overflow-hidden text-paper"
        style={{
          background: `linear-gradient(135deg, ${post.cover.from} 0%, ${post.cover.to} 100%)`,
        }}
      >
        {/* dot grid overlay */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        >
          <defs>
            <pattern id="bp-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-dots)" />
        </svg>
        {/* warm glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="container-content relative py-10 md:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-paper/85 transition-colors hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all posts
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CategoryChip category={post.category} />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper/85">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper/85">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readMinutes} min read
            </span>
          </div>

          <h1 className="font-display mt-6 max-w-4xl text-balance text-3xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="text-body-lg mt-6 max-w-3xl text-paper/85">{post.excerpt}</p>

          <div className="mt-10 flex items-center gap-4">
            <span className="relative h-14 w-14 overflow-hidden rounded-full bg-paper/15 ring-2 ring-paper/40">
              <Image
                src={asset(post.author.imageSrc)}
                alt={post.author.name}
                fill
                sizes="56px"
                className="object-cover object-center"
              />
            </span>
            <div>
              <p className="text-base font-bold text-paper">{post.author.name}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper/70">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-paper py-10 md:py-14">
        <div className="container-content max-w-3xl">
          <p className="font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
            {post.body.lead}
          </p>

          {post.body.sections.map((section, i) => (
            <section key={i} className="mt-12">
              {section.heading && (
                <h2 className="font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
                  {section.heading}
                </h2>
              )}
              <div className="mt-5 space-y-5 text-body-lg text-ink-muted">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="md:text-[1.0625rem]">
                    {p}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 rounded-xl bg-mist p-4"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-600" />
                      <span className="text-sm font-medium text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.pullQuote && (
                <blockquote className="mt-10 rounded-2xl bg-teal-950 p-8 text-paper md:p-10">
                  <Quote className="h-7 w-7 text-orange-500" aria-hidden="true" />
                  <p className="font-display mt-4 text-2xl font-semibold leading-snug md:text-3xl">
                    {section.pullQuote}
                  </p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-paper/65">
                    — {post.author.name}, {post.author.role}
                  </p>
                </blockquote>
              )}
            </section>
          ))}

          {/* Author bio */}
          <div className="mt-16 rounded-2xl bg-mist p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-rule">
                <Image
                  src={asset(post.author.imageSrc)}
                  alt={post.author.name}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Written by
                </p>
                <p className="font-display mt-1 text-xl font-bold text-ink">
                  {post.author.name}
                </p>
                <p className="text-sm font-semibold text-teal-900">
                  {post.author.role}, Pak Venture Point
                </p>
              </div>
              <Button href="/team" size="md" variant="outline">
                Meet the team
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-mist py-10 md:py-14">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-eyebrow text-orange-600">Keep reading</p>
              <h2 className="text-display-lg mt-3 text-ink">
                More from <span className="text-orange-600">the team.</span>
              </h2>
              <span className="mt-5 inline-block h-1 w-12 rounded-full bg-orange-600" />
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-900 transition-colors hover:text-orange-600"
            >
              View all posts <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <ConnectStrip />
    </>
  );
}

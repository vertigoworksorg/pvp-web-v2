import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { asset } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const categoryToTone: Record<BlogPost["category"], "teal" | "orange"> = {
  Technology: "teal",
  Industry: "orange",
  Operations: "teal",
  Strategy: "orange",
  Investors: "teal",
  Consultancy: "orange",
};

export function CategoryChip({
  category,
  className,
}: {
  category: BlogPost["category"];
  className?: string;
}) {
  const tone = categoryToTone[category];
  const cls =
    tone === "teal"
      ? "bg-teal-50 text-teal-900 ring-1 ring-teal-900/10"
      : "bg-orange-50 text-orange-700 ring-1 ring-orange-600/15";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${cls} ${className ?? ""}`}
    >
      {category}
    </span>
  );
}

/**
 * Standard blog card used in the grid. The `featured` variant is wider /
 * taller, used at the top of the index page for the first post.
 */
export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const href = `/blog/${post.slug}`;
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-rule transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,42,48,0.3)] ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Cover artwork — gradient panel with category as the visual */}
      <Link
        href={href}
        className={`relative block overflow-hidden ${
          featured ? "aspect-[3/2] md:aspect-auto md:w-1/2" : "aspect-[16/10]"
        }`}
        style={{
          background: `linear-gradient(135deg, ${post.cover.from} 0%, ${post.cover.to} 100%)`,
        }}
      >
        {/* layered abstract pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`bg-${post.slug}`}
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#bg-${post.slug})`} />
        </svg>
        {/* huge category label as visual */}
        <div
          className={`absolute inset-0 flex items-center justify-center px-6 text-center ${
            featured ? "text-4xl md:text-5xl" : "text-3xl"
          }`}
        >
          <span className="font-display font-extrabold uppercase leading-none tracking-tight text-paper/85">
            {post.category}
          </span>
        </div>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-900 backdrop-blur-sm">
          <Clock className="h-3 w-3" aria-hidden="true" /> {post.readMinutes} min
        </span>
      </Link>

      <div className={`flex flex-1 flex-col p-6 md:p-7 ${featured ? "md:w-1/2 md:p-10" : ""}`}>
        <div className="flex items-center gap-3">
          <CategoryChip category={post.category} />
          <span className="flex items-center gap-1 text-xs font-medium text-ink-muted">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        <h3
          className={`font-display mt-4 text-balance leading-tight text-ink transition-colors group-hover:text-teal-900 ${
            featured ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          <Link href={href} className="block">
            {post.title}
          </Link>
        </h3>

        <p
          className={`text-body-sm mt-3 text-ink-muted ${
            featured ? "md:text-base" : ""
          }`}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-teal-50 ring-1 ring-teal-900/10">
              <Image
                src={asset(post.author.imageSrc)}
                alt={post.author.name}
                fill
                sizes="40px"
                className="object-cover object-center"
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">{post.author.name}</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                {post.author.role}
              </p>
            </div>
          </div>
          <Link
            href={href}
            aria-label={`Read ${post.title}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-900 text-paper transition-all group-hover:bg-orange-600"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import { Mail, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { ConnectStrip } from "@/components/sections/ConnectStrip";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Perspectives on technology, ventures, consultancy, and the future of business from the Pak Venture Point team.",
};

const allCategories = [
  "All",
  "Technology",
  "Industry",
  "Operations",
  "Strategy",
  "Investors",
  "Consultancy",
] as const;

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader variant="posts"
        eyebrow="Blog & Insights"
        title="Perspectives on building"
        highlight="from Islamabad."
        sub="Technology decisions, market commentary, operating playbooks, and the occasional opinion — written by the people doing the work at Pak Venture Point."
      />

      {/* Featured post */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-content">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-orange-600" aria-hidden="true" />
            <p className="text-eyebrow text-orange-600">Featured this week</p>
          </div>
          <BlogCard post={featured} featured />
        </div>
      </section>

      {/* Filter row + grid */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-eyebrow text-orange-600">All posts</p>
              <h2 className="text-display-lg mt-3 text-ink">
                Latest <span className="text-orange-600">stories.</span>
              </h2>
              <span className="mt-5 inline-block h-1 w-12 rounded-full bg-orange-600" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {allCategories.map((cat, i) => (
                <li key={cat}>
                  <button
                    type="button"
                    className={
                      i === 0
                        ? "rounded-full bg-teal-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-paper transition-colors"
                        : "rounded-full bg-paper px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-muted ring-1 ring-rule transition-colors hover:bg-teal-50 hover:text-teal-900 hover:ring-teal-900/15"
                    }
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-content">
          <div className="relative overflow-hidden rounded-3xl bg-teal-950 p-8 text-paper md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(233,119,36,0.7) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 ring-1 ring-paper/15">
                  <Mail className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-paper">
                    Subscribe
                  </span>
                </div>
                <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Get the next post,{" "}
                  <span className="text-orange-500">straight to your inbox.</span>
                </h2>
                <p className="text-body mt-4 max-w-xl text-paper/75">
                  One thoughtful piece on technology, ventures, and operating well in
                  emerging markets — every other week. No spam, no follow-up sales sequence.
                </p>
              </div>
              <div className="md:col-span-5">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConnectStrip />
    </>
  );
}

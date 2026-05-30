import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper-warm via-paper to-mist py-20 md:py-28">
      {/* dot grid */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
        <defs>
          <pattern id="ph-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1a5b64" fillOpacity="0.16" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-dots)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(253,226,207,0.95) 0%, transparent 70%)" }}
      />

      <div className="container-content relative">
        <p className="text-eyebrow text-orange-600">{eyebrow}</p>
        <h1 className="text-display-2xl mt-4 max-w-4xl text-ink">
          {title}
          {highlight && <> <span className="text-orange-600">{highlight}</span></>}
        </h1>
        <span className="mt-6 block h-1 w-16 rounded-full bg-orange-600" />
        {sub && <p className="text-body-lg mt-6 max-w-3xl text-ink-muted">{sub}</p>}
      </div>
    </section>
  );
}

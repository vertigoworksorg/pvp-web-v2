import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Code2, Compass, Sparkles, Users, type LucideIcon } from "lucide-react";

const nodes: { icon: LucideIcon; angle: number; label: string }[] = [
  { icon: Code2, angle: -90, label: "Software" },
  { icon: Compass, angle: 0, label: "Consultancy" },
  { icon: Sparkles, angle: 90, label: "Ventures" },
  { icon: Users, angle: 180, label: "Freelancing" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="container-content grid items-center gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24 lg:py-28">
        {/* Copy — kept deliberately short */}
        <div className="md:col-span-7">
          <div className="eyebrow flex items-center gap-2.5 text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
            Building from Islamabad
          </div>

          <h1 className="text-display-2xl mt-6 max-w-[14ch] text-ink">
            Ventures built <span className="emph">to last.</span>
          </h1>

          <p className="text-body-lg mt-6 max-w-md text-ink-soft">
            An AI-first venture studio — software, consultancy, freelancing, and startups, under one
            accountable team.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/services"
              className="group inline-flex h-12 items-center gap-2 rounded-sm bg-navy px-6 font-semibold text-paper transition-colors hover:bg-navy-900"
            >
              Explore services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/ventures"
              className="group inline-flex items-center gap-1.5 border-b border-teal-bright pb-1 font-semibold text-teal transition-colors hover:border-teal"
            >
              Launch your venture
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Orbit visual */}
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            {/* rotating dashed ring */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle
                cx="200"
                cy="200"
                r="186"
                fill="none"
                stroke="#D2CEBF"
                strokeWidth="1.5"
                strokeDasharray="2 12"
                className="origin-center motion-safe:animate-[spin_40s_linear_infinite]"
                style={{ transformBox: "fill-box" }}
              />
              <circle cx="200" cy="200" r="132" fill="none" stroke="#0E6E76" strokeWidth="1.5" strokeOpacity="0.5" />
              <circle cx="200" cy="200" r="78" fill="none" stroke="#5C7799" strokeWidth="1.5" strokeOpacity="0.5" />
              {nodes.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos(rad) * 132}
                    y2={200 + Math.sin(rad) * 132}
                    stroke="#D2CEBF"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* center mark */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-navy text-paper shadow-[0_20px_50px_-20px_rgba(10,35,66,0.6)] md:h-32 md:w-32">
                <span className="font-display text-3xl font-bold tracking-tight md:text-4xl">PVP</span>
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              </div>
            </div>

            {/* nodes on the teal ring (33% of 400 ≈ radius 132 → 33% from center) */}
            {nodes.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const left = `${50 + Math.cos(rad) * 33}%`;
              const top = `${50 + Math.sin(rad) * 33}%`;
              const Icon = n.icon;
              const teal = i % 2 === 0;
              return (
                <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
                  <span
                    className={
                      "flex h-14 w-14 items-center justify-center rounded-full text-paper shadow-md md:h-16 md:w-16 " +
                      (teal ? "bg-teal" : "bg-coral")
                    }
                    title={n.label}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

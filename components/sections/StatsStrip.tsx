import { Layers, Cpu, TrendingUp, Globe2, type LucideIcon } from "lucide-react";

type Stat = { icon: LucideIcon; headline: string; trailing: string; sub: string };

const stats: Stat[] = [
  { icon: Layers, headline: "4", trailing: "Core Pillars", sub: "Integrated Services" },
  { icon: Cpu, headline: "AI", trailing: "First Approach", sub: "Innovation at the Core" },
  { icon: TrendingUp, headline: "Growth", trailing: "Driven", sub: "Scalable & Sustainable" },
  { icon: Globe2, headline: "Global", trailing: "Vision", sub: "Local Roots, Global Impact" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-teal-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[320px] w-[320px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(233,119,36,0.6) 0%, transparent 70%)" }}
      />
      <ul className="container-content relative grid grid-cols-2 gap-x-4 gap-y-4 py-4 md:grid-cols-4 md:gap-4 md:py-5">
        {stats.map((s) => (
          <li
            key={s.trailing}
            className="flex flex-col items-center gap-1.5 text-center sm:flex-row sm:items-center sm:gap-2.5 sm:text-left"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 ring-1 ring-paper/15 md:h-10 md:w-10">
              <s.icon className="h-4 w-4 text-orange-500 md:h-[18px] md:w-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-bold leading-tight sm:whitespace-nowrap sm:text-[0.9375rem] md:text-base">
                <span className="text-orange-500">{s.headline}</span>{" "}
                <span className="text-paper">{s.trailing}</span>
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-paper/65 sm:truncate md:text-[10px]">
                {s.sub}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

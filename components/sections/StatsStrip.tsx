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
      <div className="container-content relative grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:gap-4 md:py-14">
        {stats.map((s) => (
          <div key={s.trailing} className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper/10 ring-1 ring-paper/15">
              <s.icon className="h-5 w-5 text-orange-500" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-tight whitespace-nowrap md:text-xl">
                <span className="text-orange-500">{s.headline}</span>{" "}
                <span className="text-paper">{s.trailing}</span>
              </p>
              <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-wider text-paper/65">
                {s.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

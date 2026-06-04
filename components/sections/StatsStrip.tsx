import { Layers, Cpu, TrendingUp, Globe2, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  headline: string;
  trailing: string;
  sub: string;
};

const stats: Stat[] = [
  { icon: Layers, headline: "4", trailing: "Core Pillars", sub: "Integrated Services" },
  { icon: Cpu, headline: "AI", trailing: "First Approach", sub: "Innovation at the Core" },
  { icon: TrendingUp, headline: "Growth", trailing: "Driven Solutions", sub: "Scalable & Sustainable" },
  { icon: Globe2, headline: "Global", trailing: "Vision", sub: "Local Roots, Global Impact" },
];

export function StatsStrip() {
  return (
    <section className="relative bg-teal-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[320px] w-[320px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(233,119,36,0.6) 0%, transparent 70%)" }}
      />
      <div className="container-content relative grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-6 md:py-14">
        {stats.map((s) => (
          <div key={s.trailing} className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper/10 ring-1 ring-paper/15">
              <s.icon className="h-6 w-6 text-orange-500" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
                <span className="text-orange-500">{s.headline}</span>{" "}
                <span className="text-paper">{s.trailing}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-paper/65">
                {s.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

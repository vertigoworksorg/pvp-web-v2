const stats = [
  { value: "4", label: "Core practices", sub: "One accountable team" },
  { value: "AI", label: "First by default", sub: "Not bolted on" },
  { value: "48h", label: "Scope summary", sub: "After every first call" },
  { value: "1", label: "Named owner", sub: "Brief to handover" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-navy text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <ul className="container-content relative grid grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((s, i) => (
          <li
            key={s.label}
            className={
              "py-8 md:py-10 " +
              (i !== 0 ? "md:border-l md:border-paper/10 md:pl-8" : "")
            }
          >
            <p className="font-display text-4xl font-bold leading-none text-paper md:text-5xl">
              {s.value}
            </p>
            <p className="mt-3 font-display text-base font-semibold text-paper">{s.label}</p>
            <p className="font-mono mt-1 text-[11px] uppercase tracking-[0.08em] text-teal-bright">
              {s.sub}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

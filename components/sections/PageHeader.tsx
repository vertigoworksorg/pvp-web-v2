import type { ReactNode } from "react";
import { OrbitMark } from "@/components/ui/OrbitMark";

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
    <section className="relative overflow-hidden border-b border-hairline py-16 md:py-24">
      {/* large faint orbit, top-right */}
      <OrbitMark
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.06] md:h-96 md:w-96"
        animated
      />

      <div className="container-content relative">
        <div className="eyebrow flex items-center gap-2.5 text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
          {eyebrow}
        </div>
        <h1 className="text-display-xl mt-6 max-w-[18ch] text-ink">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="emph">{highlight}</span>
            </>
          )}
        </h1>
        {sub && <p className="text-body-lg mt-6 max-w-2xl text-ink-soft">{sub}</p>}
      </div>
    </section>
  );
}

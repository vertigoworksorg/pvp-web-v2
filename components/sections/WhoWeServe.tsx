import {
  Rocket,
  Briefcase,
  Heart,
  Landmark,
  GraduationCap,
  TrendingUp,
  Globe2,
  type LucideIcon,
} from "lucide-react";

type Audience = { icon: LucideIcon; tone: "teal" | "orange"; title: string; body: string };

const audiences: Audience[] = [
  { icon: Rocket, tone: "teal", title: "Startups & Entrepreneurs", body: "Incubation, technology, and strategic guidance — from idea to scale." },
  { icon: Briefcase, tone: "orange", title: "Businesses & SMEs", body: "Optimize operations, digitize processes, and grow sustainably." },
  { icon: Heart, tone: "teal", title: "NGOs & INGOs", body: "Consultancy, M&E, and digital solutions that maximize impact." },
  { icon: Landmark, tone: "orange", title: "Government", body: "Policy, digital transformation, and public-sector capacity building." },
  { icon: GraduationCap, tone: "teal", title: "Education", body: "E-learning systems, digital tools, and innovation programs." },
  { icon: TrendingUp, tone: "orange", title: "Investors & Partners", body: "Build value through innovation-driven ventures." },
  { icon: Globe2, tone: "teal", title: "International Clients", body: "Reliable, scalable, future-ready solutions, delivered worldwide." },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="relative overflow-hidden bg-paper py-10 md:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(26,91,100,0.05) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-content relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-eyebrow text-orange-600">To Whom We Serve</p>
          <h2 className="text-display-lg mt-3 text-balance text-ink">
            Empowering every sector.{" "}
            <span className="block sm:inline">
              Creating <span className="text-orange-600">future-ready</span> impact.
            </span>
          </h2>
          <span className="mt-6 inline-block h-1 w-16 rounded-full bg-orange-600" />
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {audiences.map((a) => {
            const Icon = a.icon;
            const isTeal = a.tone === "teal";
            return (
              <li
                key={a.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-700 hover:shadow-[0_24px_48px_-28px_rgba(11,42,48,0.4)]"
              >
                {/* top accent bar */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${isTeal ? "bg-teal-900" : "bg-orange-600"}`}
                />
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-paper transition-transform duration-200 group-hover:scale-105 ${
                    isTeal ? "bg-teal-900" : "bg-orange-600"
                  }`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className={`mt-5 font-display text-lg font-bold ${isTeal ? "text-teal-900" : "text-orange-600"}`}>
                  {a.title}
                </h3>
                <p className="text-body-sm mt-2 text-ink-muted">{a.body}</p>
              </li>
            );
          })}

          {/* CTA tile to fill the 8th slot on xl + invite action */}
          <li className="flex flex-col justify-center rounded-2xl bg-teal-950 p-6 text-paper">
            <p className="font-display text-xl font-bold leading-tight">
              Different needs. <span className="text-orange-500">One commitment.</span>
            </p>
            <p className="text-body-sm mt-2 text-paper/70">
              Whoever you are, we tailor the work to fit.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-400"
            >
              Let&apos;s talk →
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

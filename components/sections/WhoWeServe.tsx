import { Rocket, Briefcase, Heart, Landmark, GraduationCap, TrendingUp, Globe2, Handshake, Send } from "lucide-react";

type Audience = {
  icon: typeof Rocket;
  tone: "teal" | "orange";
  title: string;
  body: string;
};

const audiences: Audience[] = [
  {
    icon: Rocket,
    tone: "teal",
    title: "Startups & Entrepreneurs",
    body: "From idea to scale — we support startups with incubation, technology and strategic guidance.",
  },
  {
    icon: Briefcase,
    tone: "orange",
    title: "Businesses & SMEs",
    body: "We help businesses optimize operations, digitize processes and achieve sustainable growth.",
  },
  {
    icon: Heart,
    tone: "teal",
    title: "NGOs & INGOs",
    body: "We provide consultancy, M&E, proposal development and digital solutions to maximize impact.",
  },
  {
    icon: Landmark,
    tone: "orange",
    title: "Government Institutions",
    body: "Supporting public sector entities with policy, digital transformation and capacity building.",
  },
  {
    icon: GraduationCap,
    tone: "teal",
    title: "Educational Institutions",
    body: "Empowering academia with digital solutions, e-learning systems and innovation programs.",
  },
  {
    icon: TrendingUp,
    tone: "orange",
    title: "Investors & Partners",
    body: "We create opportunities for investors and partners to build value through innovative ventures.",
  },
  {
    icon: Globe2,
    tone: "teal",
    title: "International Clients",
    body: "Serving clients worldwide with reliable, scalable and future-ready solutions.",
  },
];

export function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      {/* world-map style dot grid */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-30">
        <defs>
          <pattern id="globe-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="#1a5b64" fillOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#globe-dots)" />
      </svg>

      <div className="container-content relative">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow text-orange-600">To Whom We Serve</p>
          <h2 className="text-display-xl mt-3 text-ink">
            Empowering Every Sector.
            <br />
            Creating <span className="text-orange-600">Future-Ready</span> Impact.
          </h2>
          <span className="mt-6 inline-block h-1 w-16 rounded-full bg-orange-600" />
          <p className="text-body mt-6 text-ink-muted">
            PVP delivers innovative technology, consultancy, freelancing and venture solutions to a
            diverse range of clients and partners across industries. We tailor our services to help
            them grow, transform and lead in a rapidly changing world.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {audiences.map((a) => {
            const Icon = a.icon;
            const isTeal = a.tone === "teal";
            return (
              <article
                key={a.title}
                className="flex flex-col rounded-2xl bg-paper p-5 shadow-[0_8px_24px_-16px_rgba(11,42,48,0.25)] ring-1 ring-rule transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(11,42,48,0.35)]"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center self-center rounded-full text-paper ring-4 ${
                    isTeal ? "bg-teal-900 ring-teal-50" : "bg-orange-600 ring-orange-50"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className={`mt-5 text-center text-[0.9375rem] font-bold leading-tight ${
                  isTeal ? "text-teal-900" : "text-orange-600"
                }`}>
                  {a.title}
                </h3>
                <p className="text-body-sm mt-3 text-center text-ink-muted">{a.body}</p>
                <span className={`mt-4 block h-0.5 w-8 self-center rounded-full ${
                  isTeal ? "bg-teal-900" : "bg-orange-600"
                }`} />
              </article>
            );
          })}
        </div>

        {/* bottom banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-mist p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-paper">
              <Handshake className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-xl font-bold text-ink">Different Needs. One Commitment.</p>
              <p className="text-body-sm mt-1 text-ink-muted">
                We are committed to delivering excellence and creating lasting impact for every partner we serve.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-paper">
              <Send className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-ink">
              Let&apos;s work together to <span className="text-orange-600">build a better future.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

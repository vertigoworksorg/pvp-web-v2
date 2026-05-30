import Image from "next/image";
import {
  Lightbulb,
  Briefcase,
  ShieldCheck,
  Anchor,
  Rocket,
  Leaf,
  Palette,
  Handshake,
  Smile,
  Award,
  Users,
  Heart,
  Globe2,
  Flag,
  Brain,
  type LucideIcon,
} from "lucide-react";

type Value = {
  icon: LucideIcon;
  tone: "teal" | "orange";
  name: string;
  body: string;
};

const values: Value[] = [
  { icon: Lightbulb, tone: "teal", name: "INNOVATION", body: "We embrace creativity and new ideas to solve real-world challenges." },
  { icon: ShieldCheck, tone: "orange", name: "INTEGRITY", body: "We act with honesty, transparency and strong ethical standards." },
  { icon: Anchor, tone: "teal", name: "ACCOUNTABILITY", body: "We take ownership, deliver on our promises and stand accountable for results." },
  { icon: Users, tone: "orange", name: "COLLABORATION", body: "We believe in the power of teamwork and partnership to achieve greater impact." },
  { icon: Award, tone: "teal", name: "EXCELLENCE", body: "We are committed to quality, continuous improvement and high performance." },
  { icon: Leaf, tone: "orange", name: "SUSTAINABILITY", body: "We build solutions that create long-term value for people, businesses and communities." },
  { icon: Rocket, tone: "teal", name: "ENTREPRENEURSHIP", body: "We encourage initiative, calculated risk-taking and the drive to build impactful ventures." },
  { icon: Briefcase, tone: "orange", name: "PROFESSIONALISM", body: "We maintain the highest level of professionalism in everything we do." },
  { icon: Smile, tone: "teal", name: "CLIENT SATISFACTION", body: "Our clients are at the heart of our work. Their success is our success." },
  { icon: Palette, tone: "orange", name: "CREATIVITY", body: "We turn ideas into intelligent, practical and scalable solutions." },
];

const philosophy = [
  { icon: Users, title: "People First", body: "Empowering people and communities is our core belief." },
  { icon: Heart, title: "Value Creation", body: "We create meaningful value that drives growth and opportunity." },
  { icon: Globe2, title: "Future Focused", body: "We build today for a resilient and innovative tomorrow." },
  { icon: Flag, title: "Purpose Driven", body: "Everything we do is aligned with our mission and long-term impact." },
];

export function Values() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      {/* dot pattern right */}
      <svg aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-50">
        <defs>
          <pattern id="vp-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1a5b64" fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vp-dots)" />
      </svg>

      <div className="container-content relative">
        {/* Top — diagram + intro */}
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {/* center logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-36 w-36 rounded-full bg-paper p-3 shadow-[0_20px_50px_-20px_rgba(26,91,100,0.5)] ring-1 ring-teal-900/10">
                  <Image src="/logo.png" alt="" fill className="object-contain p-2" />
                </div>
              </div>
              {/* outer ring */}
              <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-teal-900/15" />

              {/* 4 corner pins */}
              <CornerPin position="top-0 left-1/2 -translate-x-1/2" icon={Lightbulb} tone="teal" label="INNOVATE" />
              <CornerPin position="top-1/2 right-0 -translate-y-1/2" icon={Handshake} tone="orange" label="COLLABORATE" />
              <CornerPin position="bottom-0 left-1/2 -translate-x-1/2" icon={Award} tone="orange" label="GROW" />
              <CornerPin position="top-1/2 left-0 -translate-y-1/2" icon={Rocket} tone="teal" label="IMPACT" />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-eyebrow text-orange-600">Our Values &amp; Philosophy</p>
            <h2 className="text-display-xl mt-4 text-ink">
              Guided by Values.
              <br />
              Driven by <span className="text-orange-600">Purpose.</span>
            </h2>
            <span className="mt-6 inline-block h-1 w-16 rounded-full bg-orange-600" />
            <p className="text-body mt-6 max-w-2xl text-ink-muted md:text-[1.0625rem]">
              At PVP, our values shape our culture, define our decisions and drive everything we do.
              We believe in creating long-term impact through integrity, innovation and collaboration
              — while staying committed to excellence and sustainability.
            </p>
          </div>
        </div>

        {/* 10 value cards */}
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {values.map((v) => {
            const Icon = v.icon;
            const isTeal = v.tone === "teal";
            return (
              <li
                key={v.name}
                className="flex flex-col rounded-2xl bg-paper p-5 ring-1 ring-rule transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(11,42,48,0.3)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center self-center rounded-full text-paper ${
                    isTeal ? "bg-teal-900" : "bg-orange-600"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className={`mt-4 text-center text-xs font-bold tracking-wide ${
                  isTeal ? "text-teal-900" : "text-orange-600"
                }`}>
                  {v.name}
                </p>
                <span className={`my-3 block h-0.5 w-6 self-center rounded-full ${
                  isTeal ? "bg-teal-900" : "bg-orange-600"
                }`} />
                <p className="text-[0.8125rem] text-center text-ink-muted leading-snug">{v.body}</p>
              </li>
            );
          })}
        </ul>

        {/* Philosophy strip */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-teal-950 text-paper">
          <div className="grid items-center gap-8 p-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-600/20 ring-1 ring-orange-500/40">
                  <Brain className="h-6 w-6 text-orange-500" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold leading-tight md:text-2xl">Our Philosophy</p>
                  <p className="text-body-sm mt-2 max-w-xs text-paper/75">
                    We believe that technology, innovation and human potential together can create a better,
                    smarter and more sustainable future.
                  </p>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-5 md:col-span-7 md:grid-cols-4 lg:col-span-8">
              {philosophy.map((p, i) => (
                <li key={p.title}>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      i % 2 === 0 ? "bg-teal-700/40" : "bg-orange-600/30"
                    }`}
                  >
                    <p.icon className={`h-5 w-5 ${i % 2 === 0 ? "text-teal-100" : "text-orange-500"}`} aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-paper">{p.title}</p>
                  <p className="text-[0.8125rem] mt-1 text-paper/65">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerPin({
  position,
  icon: Icon,
  tone,
  label,
}: {
  position: string;
  icon: LucideIcon;
  tone: "teal" | "orange";
  label: string;
}) {
  const isTeal = tone === "teal";
  return (
    <div className={`absolute ${position}`}>
      <div className="flex flex-col items-center">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full text-paper shadow-lg ${
            isTeal ? "bg-teal-900" : "bg-orange-600"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className={`mt-2 text-[10px] font-bold tracking-wider ${
          isTeal ? "text-teal-900" : "text-orange-600"
        }`}>
          {label}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import { leaders } from "@/lib/content";
import { asset } from "@/lib/utils";

export function MeetTeam() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="container-content relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow text-orange-600">Our Leadership</p>
          <h2 className="text-display-2xl mt-3 text-ink">
            MEET OUR <span className="text-orange-600">TEAM</span>
          </h2>
          <span className="mt-6 inline-block h-1 w-16 rounded-full bg-orange-600" />
          <p className="text-body mt-6 text-ink-muted">
            A team of passionate, professional, driven innovators delivering real value and
            building solutions that create a lasting impact.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(leaders as readonly { name: string; role: string; credentials: string; initials: string; imageSrc?: string }[]).map((leader, i) => {
            const isTeal = i % 2 === 0;
            return (
              <li
                key={leader.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-rule transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,42,48,0.35)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
                  {leader.imageSrc ? (
                    <Image
                      src={asset(leader.imageSrc)}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-7xl font-bold text-teal-900/20">
                        {leader.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-ink">{leader.name}</h3>
                  <p className={`mt-1 text-xs font-bold uppercase tracking-wider ${
                    isTeal ? "text-teal-900" : "text-orange-600"
                  }`}>
                    {leader.role}
                  </p>
                  <span className={`mt-3 block h-0.5 w-10 self-center mx-auto rounded-full ${
                    isTeal ? "bg-teal-900" : "bg-orange-600"
                  }`} />
                  <p className="text-body-sm mt-3 text-ink-muted">{leader.credentials}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { Send } from "lucide-react";

export function ConnectStrip() {
  return (
    <section className="relative overflow-hidden bg-teal-900 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(233,119,36,0.7) 0%, transparent 70%)" }}
      />
      <div className="container-content relative flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center md:py-7">
        <p className="font-display text-lg font-bold md:text-xl">
          United by Purpose. <span className="text-orange-500">Driven by Impact.</span>
        </p>
        <ul className="grid w-full grid-cols-1 gap-2 text-xs sm:grid-cols-3 md:w-auto md:gap-8 md:text-sm">
          <li className="flex items-center gap-2 text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            One Team
          </li>
          <li className="flex items-center gap-2 text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            One Vision
          </li>
          <li className="flex items-center gap-2 text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            One Future
          </li>
        </ul>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-orange-700"
        >
          <Send className="h-4 w-4" />
          Get In Touch
        </a>
      </div>
    </section>
  );
}

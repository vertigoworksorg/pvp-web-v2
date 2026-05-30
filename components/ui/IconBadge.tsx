import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Tone = "teal" | "orange" | "tealSoft" | "orangeSoft" | "white";
type Size = "sm" | "md" | "lg" | "xl" | "2xl";

const tones: Record<Tone, string> = {
  teal: "bg-teal-900 text-paper",
  orange: "bg-orange-600 text-paper",
  tealSoft: "bg-teal-50 text-teal-900",
  orangeSoft: "bg-orange-50 text-orange-700",
  white: "bg-paper text-teal-900 ring-1 ring-teal-900/10",
};

const sizes: Record<Size, { box: string; icon: string }> = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4" },
  md: { box: "h-12 w-12", icon: "h-5 w-5" },
  lg: { box: "h-16 w-16", icon: "h-7 w-7" },
  xl: { box: "h-20 w-20", icon: "h-9 w-9" },
  "2xl": { box: "h-24 w-24", icon: "h-11 w-11" },
};

export function IconBadge({
  icon: Icon,
  tone = "teal",
  size = "md",
  className,
  shape = "circle",
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
  shape?: "circle" | "square";
}) {
  const s = sizes[size];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center",
        shape === "circle" ? "rounded-full" : "rounded-2xl",
        s.box,
        tones[tone],
        className,
      )}
    >
      <Icon className={s.icon} strokeWidth={1.75} />
    </span>
  );
}

export function alternateTone(i: number): Tone {
  return i % 2 === 1 ? "teal" : "orange";
}

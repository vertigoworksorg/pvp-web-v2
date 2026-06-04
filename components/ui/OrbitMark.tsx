import { cn } from "@/lib/utils";

/**
 * The PVP brand motif: concentric orbits converging on a single coral point —
 * many practices, one accountable focus. Pure SVG, scales cleanly, animatable.
 */
export function OrbitMark({
  className,
  tone = "navy",
  animated = false,
}: {
  className?: string;
  tone?: "navy" | "paper";
  animated?: boolean;
}) {
  const ring = tone === "navy" ? "#0A2342" : "#FAFAF6";
  const dash = tone === "navy" ? "#5C7799" : "#5C7799";
  const point = tone === "navy" ? "#FF6B6B" : "#1FB8C3";

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(className)}
      aria-hidden="true"
      fill="none"
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={dash}
        strokeWidth="1.4"
        strokeDasharray="2 7"
        className={animated ? "origin-center motion-safe:animate-[spin_28s_linear_infinite]" : undefined}
        style={{ transformBox: "fill-box" }}
      />
      <circle cx="20" cy="20" r="11" stroke={ring} strokeWidth="2.2" />
      <circle cx="20" cy="20" r="4" fill={point} />
    </svg>
  );
}

import { cn } from "@/lib/utils";

/**
 * Editorial section marker — "§NN · Label" with a leading hairline rule.
 */
export function Marker({
  section,
  label,
  className,
  tone = "ink",
}: {
  section: string;
  label: string;
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <div
      className={cn(
        "marker",
        tone === "paper" && "text-paper/60 [&::before]:bg-paper/30",
        className,
      )}
    >
      <span className={cn("sec", tone === "paper" && "text-paper")}>§{section}</span>
      {label}
    </div>
  );
}

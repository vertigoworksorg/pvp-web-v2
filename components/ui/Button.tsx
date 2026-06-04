import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "coral" | "secondary" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-sm",
  md: "h-11 px-5 text-[0.9375rem] rounded-sm",
  lg: "h-12 px-6 text-base rounded-sm",
};

const variants: Record<Variant, string> = {
  // Navy = primary action
  primary: "bg-navy text-paper hover:bg-navy-900",
  // Coral = venture / momentum action
  coral: "bg-coral text-paper hover:bg-coral-deep",
  // Neutral
  secondary:
    "border border-hairline-2 text-ink bg-transparent hover:border-ink hover:bg-paper-raised",
  // Legacy alias for inner pages — same as secondary
  outline:
    "border border-hairline-2 text-ink bg-transparent hover:border-ink hover:bg-paper-raised",
  // Inline / tertiary — teal underline
  ghost:
    "text-teal border-b border-teal-bright rounded-none px-0 pb-1 h-auto hover:border-teal",
  onDark: "bg-paper text-navy hover:bg-navy-tint",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps & ComponentProps<"button"> & { href?: undefined };
type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    ...rest
  } = props;

  const classes = cn(base, variant !== "ghost" && sizes[size], variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as { href: string };
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {content}
    </button>
  );
}

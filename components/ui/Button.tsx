import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 " +
  "disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-900 text-paper hover:bg-teal-700 shadow-[0_8px_20px_-8px_rgba(26,91,100,0.55)] hover:shadow-[0_12px_28px_-10px_rgba(26,91,100,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-orange-600 text-paper hover:bg-orange-700 shadow-[0_8px_20px_-8px_rgba(233,119,36,0.55)] hover:shadow-[0_12px_28px_-10px_rgba(233,119,36,0.7)] hover:-translate-y-0.5",
  outline:
    "border-2 border-teal-900 text-teal-900 bg-paper hover:bg-teal-900 hover:text-paper",
  ghost: "text-teal-900 hover:bg-teal-50",
  onDark: "bg-paper text-teal-900 hover:bg-orange-50",
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

  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
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

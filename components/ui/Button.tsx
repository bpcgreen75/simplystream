import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-hover shadow-[0_8px_20px_-8px_var(--brand-primary)]",
  secondary: "bg-surface text-text border border-border hover:border-primary/50 hover:bg-surface-muted",
  inverse: "bg-white text-inverse hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base sm:text-[1.05rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  leadingIcon?: ReactNode;
  /** Full width below the `sm` breakpoint (mobile). */
  fullWidthMobile?: boolean;
  className?: string;
  children: ReactNode;
};

function classes({ variant = "primary", size = "md", fullWidthMobile, className = "" }: CommonProps) {
  return `${base} ${variants[variant]} ${sizes[size]} ${fullWidthMobile ? "w-full sm:w-auto" : ""} ${className}`;
}

function Content({ icon, leadingIcon, children }: CommonProps) {
  return (
    <>
      {leadingIcon}
      <span>{children}</span>
      {icon ? <Icon name={icon} size={18} /> : null}
    </>
  );
}

export function ButtonLink(props: CommonProps & { href: string } & Omit<ComponentProps<"a">, "href">) {
  const { href, variant, size, icon, leadingIcon, fullWidthMobile, className, children, ...rest } = props;
  const common = { variant, size, icon, leadingIcon, fullWidthMobile, className, children };
  return (
    <Link href={href} className={classes(common)} {...rest}>
      <Content {...common} />
    </Link>
  );
}

export function Button(props: CommonProps & ComponentProps<"button">) {
  const { variant, size, icon, leadingIcon, fullWidthMobile, className, children, type = "button", ...rest } = props;
  const common = { variant, size, icon, leadingIcon, fullWidthMobile, className, children };
  return (
    <button type={type} className={classes(common)} {...rest}>
      <Content {...common} />
    </button>
  );
}

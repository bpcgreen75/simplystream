import type { ReactNode } from "react";

type Props = {
  id?: string;
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({ id, kicker, title, description, align = "center", inverse }: Props) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {kicker ? (
        <p className={`text-sm font-bold uppercase tracking-[0.18em] ${inverse ? "text-accent" : "text-secondary"}`}>
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${inverse ? "text-white" : "text-text"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${inverse ? "text-white/80" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

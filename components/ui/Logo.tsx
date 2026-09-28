/**
 * Placeholder logo: an original geometric mark + text wordmark, driven entirely
 * by config/brand.ts. To use a final logo file later, replace the contents of
 * <LogoMark> (or render an <img>) and keep the same outer size so layout is unchanged.
 */
import Link from "next/link";
import { brand, type Brand } from "@/config/brand";

export function LogoMark({ size = 36, config = brand }: { size?: number; config?: Brand }) {
  const { variant, from, to } = config.logoMark;
  const gid = `logo-grad-${config.id}`;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      {variant === "layered" ? (
        <>
          <path d="M11 6.5 34 20 11 33.5Z" fill={`url(#${gid})`} stroke={`url(#${gid})`} strokeWidth="5" strokeLinejoin="round" />
          <path d="M7 14.5 20 21.5 7 28.5Z" fill="#fff" fillOpacity="0.28" stroke="#fff" strokeOpacity="0.28" strokeWidth="3" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M10 6.5 34 20 10 33.5Z" fill={to} stroke={to} strokeWidth="5" strokeLinejoin="round" />
          <path d="M10 6.5 34 20 10 22.5Z" fill={from} stroke={from} strokeWidth="5" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export function Logo({ className = "", inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} home`}
      className={`inline-flex items-center gap-2.5 rounded-lg ${className}`}
    >
      <LogoMark />
      <span className="text-[1.4rem] font-extrabold leading-none tracking-tight" aria-hidden="true">
        {brand.wordmark.map((part) => (
          <span
            key={part.text}
            className={
              inverse ? "text-white" : part.tone === "primary" ? "text-primary" : "text-text"
            }
          >
            {part.text}
          </span>
        ))}
      </span>
    </Link>
  );
}

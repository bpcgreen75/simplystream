/**
 * Minimal inline SVG icon set (no icon dependency).
 * Icons are decorative by default (aria-hidden). Pass `title` to make one meaningful.
 */
import type { SVGProps } from "react";

const paths = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  play: <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5Z" fill="currentColor" />,
  pause: <path d="M9 5v14M15 5v14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  layers: (
    <>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
    </>
  ),
  filter: <path d="M21 4H3l7 8.5V19l4 2v-8.5L21 4Z" />,
  sparkles: (
    <>
      <path d="m12 4 1.8 4.7L18.5 10.5l-4.7 1.8L12 17l-1.8-4.7-4.7-1.8 4.7-1.8L12 4Z" />
      <path d="M5 3v3M3.5 4.5h3M19 17v3M17.5 18.5h3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  chart: <path d="M4 4v16h16M8 16v-4M12.5 16V8M17 16v-6" />,
  trash: <path d="M4 7h16M9 7V4.5h6V7M18 7l-.9 12.1a2 2 0 0 1-2 1.9H8.9a2 2 0 0 1-2-1.9L6 7M10 11v6M14 11v6" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  home: <path d="M3 10.5 12 3l9 7.5M5.5 9v11.5h13V9M10 20.5v-6h4v6" />,
  wallet: (
    <>
      <path d="M17 7V5a1.5 1.5 0 0 0-1.5-1.5h-10A2.5 2.5 0 0 0 3 6" />
      <rect x="3" y="6" width="18" height="15" rx="2.5" />
      <path d="M16.5 13.5h.01" strokeWidth="3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.8-3.4 8-8 9-4.6-1-8-4.2-8-9V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4.5M12 8h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  tv: (
    <>
      <rect x="2.5" y="4.5" width="19" height="13" rx="2.5" />
      <path d="M8 21h8" />
    </>
  ),
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
} as const;

export type IconName = keyof typeof paths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName;
  size?: number;
  title?: string;
};

export function Icon({ name, size = 20, title, strokeWidth = 2, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

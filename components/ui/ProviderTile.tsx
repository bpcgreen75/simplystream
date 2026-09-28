/**
 * Reusable streaming-provider tile.
 * Renders a supplied logo (provider.logoSrc) when available, otherwise a
 * neutral text placeholder built from the provider's short label + colours.
 */
import Image from "next/image";
import type { Provider } from "@/data/providers";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; text: string; px: number }> = {
  sm: { box: "size-9 rounded-lg", text: "text-[0.7rem]", px: 36 },
  md: { box: "size-12 rounded-xl", text: "text-sm", px: 48 },
  lg: { box: "size-12 sm:size-16 rounded-2xl", text: "text-base", px: 64 },
};

type Props = {
  provider: Provider;
  size?: Size;
  /** Show the provider name as visible text below the tile. */
  showName?: boolean;
  /** Visually de-emphasise (e.g. a paused service). Always pair with a text label. */
  dimmed?: boolean;
  className?: string;
};

export function ProviderTile({ provider, size = "md", showName, dimmed, className = "" }: Props) {
  const s = sizes[size];
  const long = provider.label.length > 3;
  return (
    <figure className={`flex flex-col items-center gap-1.5 ${className}`}>
      <div
        className={`${s.box} relative grid shrink-0 place-items-center overflow-hidden font-extrabold tracking-tight ring-1 ring-black/5 shadow-sm ${dimmed ? "opacity-45 grayscale" : ""}`}
        style={{ backgroundColor: provider.bg, color: provider.fg }}
        role="img"
        aria-label={provider.name}
      >
        {provider.logoSrc ? (
          <Image src={provider.logoSrc} alt="" width={s.px} height={s.px} className="size-3/4 object-contain" />
        ) : (
          <span className={`${s.text} ${long ? "scale-90" : "scale-125"} leading-none`} aria-hidden="true">
            {provider.label}
          </span>
        )}
      </div>
      {showName ? (
        <figcaption className="text-xs font-medium text-muted">{provider.name}</figcaption>
      ) : null}
    </figure>
  );
}

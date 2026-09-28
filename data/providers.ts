/**
 * Placeholder streaming providers.
 *
 * Tiles render from name + short label + colours, so no copyrighted logo is
 * needed. To use an official logo later, drop the file in /public/logos/providers/
 * and set `logoSrc` (e.g. "/logos/providers/netflix.svg"). ProviderTile will
 * switch to the image automatically without any layout change.
 *
 * Colours are approximate, used only to make placeholders recognisable.
 */

export type ProviderId =
  | "netflix"
  | "disney"
  | "hulu"
  | "max"
  | "prime"
  | "peacock"
  | "paramount"
  | "appletv"
  | "youtube";

export type Provider = {
  id: ProviderId;
  name: string;
  /** Short text shown inside the tile when no logo is supplied. */
  label: string;
  bg: string;
  fg: string;
  logoSrc?: string;
};

export const providers: Record<ProviderId, Provider> = {
  netflix: { id: "netflix", name: "Netflix", label: "N", bg: "#141414", fg: "#E50914" },
  disney: { id: "disney", name: "Disney+", label: "D+", bg: "#0E2A6B", fg: "#FFFFFF" },
  hulu: { id: "hulu", name: "Hulu", label: "hulu", bg: "#0B1F17", fg: "#1CE783" },
  max: { id: "max", name: "Max", label: "max", bg: "#0A2BD9", fg: "#FFFFFF" },
  prime: { id: "prime", name: "Prime Video", label: "prime", bg: "#0F1B2D", fg: "#3DBEF2" },
  peacock: { id: "peacock", name: "Peacock", label: "P", bg: "#111111", fg: "#FFFFFF" },
  paramount: { id: "paramount", name: "Paramount+", label: "P+", bg: "#0064FF", fg: "#FFFFFF" },
  appletv: { id: "appletv", name: "Apple TV+", label: "tv+", bg: "#1D1D1F", fg: "#FFFFFF" },
  youtube: { id: "youtube", name: "YouTube", label: "▶", bg: "#FFFFFF", fg: "#E62117" },
};

export const getProvider = (id: ProviderId) => providers[id];

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import { brand, brandCssVariables } from "@/config/brand";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

// Plus Jakarta Sans (open-source, SIL OFL) self-hosted from app/fonts.
// No request to Google at build or run time; next/font handles preloading
// and fallback metrics so there's no layout shift.
const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: brand.meta.title, template: `%s | ${brand.name}` },
  description: brand.meta.description,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  icons: { icon: [{ url: brand.favicon, type: "image/svg+xml" }] },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: brand.meta.title,
    description: brand.meta.description,
    url: "/",
    images: [{ url: brand.ogImage, width: 1200, height: 630, alt: brand.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.meta.title,
    description: brand.meta.description,
    images: [brand.ogImage],
  },
  robots: site.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: brand.colors.background,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable} style={brandCssVariables() as CSSProperties}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-on-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

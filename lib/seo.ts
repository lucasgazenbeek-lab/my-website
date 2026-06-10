import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageSeo {
  /** Full document title, used as-is (bypasses the layout title template). */
  title: string;
  /** Meta description, ideally 140–160 characters. */
  description: string;
  /** Route path starting with "/", e.g. "/wat-wij-doen". */
  path: string;
}

/**
 * Builds per-page metadata with a unique title, description, canonical URL
 * and matching Open Graph / Twitter fields. The OG image comes from the
 * file convention in app/opengraph-image.tsx and is inherited automatically.
 *
 * Note: the NL/EN toggle is client-side only (no separate EN routes), so no
 * hreflang alternates are emitted — adding them would point search engines
 * at URLs that don't exist.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: siteConfig.company.name,
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

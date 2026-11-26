import type { Metadata } from "next";
import { getPage, getSite, SITE_URL } from "./content";

/** Heading tags the CMS "Hero Headline Tag (SEO)" select can store. */
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HEADING_TAGS: readonly string[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

/** The page's hero headline tag as set in the CMS (an unset or invalid value renders as h1). */
export function headingTag(value: string | null | undefined): HeadingTag {
  return (value && HEADING_TAGS.includes(value) ? value : "h1") as HeadingTag;
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

type SeoInput = {
  title: string | null;
  description: string | null;
  keywords?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean;
  path: string;
  /** Page's own share image; the global Open Graph image (SEO › Global) is used otherwise. */
  image?: string | null;
  type?: "website" | "article";
};

/**
 * Builds a page's metadata. Next.js replaces (does not merge) `openGraph` per page, so the
 * global share image is attached here rather than relying on the root layout.
 */
export async function buildMetadata(input: SeoInput): Promise<Metadata> {
  const site = await getSite();
  const url = input.canonicalUrl || absoluteUrl(input.path);
  const image = input.image || site.ogImage;
  const title = input.title || undefined;
  const description = input.description || undefined;
  return {
    title: title ? { absolute: title } : undefined,
    description,
    keywords: input.keywords ? input.keywords.split(",").map((k) => k.trim()).filter(Boolean) : undefined,
    alternates: { canonical: url },
    robots: input.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.type || "website",
      url,
      siteName: site.siteTitle,
      title,
      description,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

/** Home page: global SEO settings (SEO › Global). */
export async function homeMetadata(): Promise<Metadata> {
  const site = await getSite();
  return buildMetadata({ title: site.siteTitle, description: site.siteDescription, path: "/" });
}

/** Inner pages: per-page SEO (SEO › Pages › <page>). `path` is the website route. */
export async function pageMetadata(slug: string, path: string): Promise<Metadata> {
  const { seo } = await getPage(slug);
  return buildMetadata({
    title: seo?.metaTitle ?? null,
    description: seo?.metaDescription ?? null,
    keywords: seo?.targetKeywords,
    canonicalUrl: seo?.canonicalUrl,
    noIndex: seo?.noIndex,
    path,
  });
}

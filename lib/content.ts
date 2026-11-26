// Typed CMS fetchers. Every piece of website content comes from icci-cms; nothing is bundled here.
// Field names match the CMS models and section editors exactly (icci-cms/prisma/schema.prisma,
// icci-cms/src/app/static-pages/**). `cache()` dedupes calls within one render (layout + page).
import { cache } from "react";
import { cmsGet, CmsTag } from "./cms";

/** Public domain of the website (canonical URLs, Open Graph, sitemap). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

/** CMS long-text fields keep paragraphs separated by a blank line. */
export function paragraphs(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((p): p is string => typeof p === "string" && !!p.trim());
  if (typeof value !== "string") return [];
  return value.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

// ── Global settings (SEO › Global, Navigation › Social Media & Footer) ──

export type SocialLink = { key: string; label: string; href: string };

export type FooterContent = {
  headerBrandLine1: string;
  headerBrandLine2: string;
  logoAlt: string;
  logoMarkAlt: string;
  followUsLabel: string;
  quickLinksTitle: string;
  reachUsTitle: string;
  copyrightText: string;
};

export type SiteConfig = {
  siteTitle: string;
  siteDescription: string;
  favicon: string | null;
  logo: string | null;
  logoMark: string | null;
  logoMarkWhite: string | null;
  ogImage: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  googleAnalyticsId: string | null;
  gtmId: string | null;
  searchConsoleId: string | null;
  customHeaderScripts: string | null;
  customFooterScripts: string | null;
  socialLinks: SocialLink[] | null;
  footerContent: FooterContent | null;
  schema: string | null;
  headingOptions: string | null;
};

export const getSite = cache(async (): Promise<SiteConfig> => {
  const { data } = await cmsGet<{ data: SiteConfig | null }>("/seo/global", [CmsTag.site]);
  if (!data) throw new Error("[cms] Global settings have not been saved in the CMS (SEO › Global)");
  if (!data.footerContent) {
    throw new Error("[cms] Header & footer copy has not been saved in the CMS (Navigation › Social Media & Footer)");
  }
  return data;
});

// ── Navigation (Navigation › Menu Links) ──

export type NavLink = {
  id: string;
  label: string;
  href: string;
  description: string | null;
  image: string | null;
  children: NavLink[];
};

type CmsNavLink = {
  id: string;
  label: string;
  url: string;
  type: string;
  parent: string;
  description: string | null;
  image: string | null;
};

/** Top-level links (with their dropdown items) and the header action buttons ("Become a Member"). */
export const getNav = cache(async (): Promise<{ links: NavLink[]; actions: NavLink[] }> => {
  const { data } = await cmsGet<{ data: CmsNavLink[] }>("/nav-links", [CmsTag.site]);
  const toLink = (n: CmsNavLink): NavLink => ({
    id: n.id,
    label: n.label,
    href: n.url,
    description: n.description,
    image: n.image,
    children: data.filter((c) => c.parent === n.id).map(toLink),
  });
  const roots = data.filter((n) => n.parent === "-");
  return {
    links: roots.filter((n) => n.type !== "Action Button").map(toLink),
    actions: roots.filter((n) => n.type === "Action Button").map(toLink),
  };
});

// ── Static pages (Static Pages › <page>, SEO › Pages) ──

export type PageSeo = {
  metaTitle: string | null;
  metaDescription: string | null;
  targetKeywords: string | null;
  canonicalUrl: string | null;
  noIndex: boolean;
  schema: string | null;
  headingOptions: string | null;
};

// Section content is whatever the CMS section editor saved (see its `normalize`)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Sections = Record<string, any>;

export const getPage = cache(async (slug: string): Promise<{ sections: Sections; seo: PageSeo | null }> => {
  const json = await cmsGet<{ data: Sections; seo: PageSeo | null }>(`/pages/${slug}`, [CmsTag.page(slug)]);
  return { sections: json.data, seo: json.seo };
});

// ── Leaders (Leaders) ──

export type Person = {
  slug: string;
  name: string;
  role: string;
  org: string | null;
  photo: string | null;
  photoAlt: string | null;
  faceX: number;
  faceY: number;
  bio: string[];
  tier: "office-bearer" | "executive";
};

export const getLeaders = cache(async () => {
  const { data } = await cmsGet<{ data: Person[] }>("/leaders", [CmsTag.leaders]);
  return {
    officeBearers: data.filter((p) => p.tier === "office-bearer"),
    executive: data.filter((p) => p.tier === "executive"),
  };
});

// ── News & Articles (News) ──

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  img: string;
  imgAlt: string | null;
  excerpt: string;
  body: string[];
  metaTitle: string | null;
  metaDescription: string | null;
  updatedAt: string;
};

export const getNews = cache(async (): Promise<Article[]> => {
  const { data } = await cmsGet<{ data: Article[] }>("/news", [CmsTag.news]);
  return data;
});

// ── Events (Events) ──

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  text: string;
  isPast: boolean;
};

export const getEvents = cache(async (): Promise<Event[]> => {
  const { data } = await cmsGet<{ data: Event[] }>("/events", [CmsTag.events]);
  return data;
});

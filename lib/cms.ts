// Server-side client for icci-cms. All website content comes from the CMS; there is no bundled copy.
//
// Load: every response is stored in the Next.js data cache under a tag and reused by every visitor,
// so the CMS is only called again when it pings /api/revalidate after a save (plus an hourly safety
// refresh). Pages are prerendered and served from cache.
//
// Errors are thrown, never swallowed: during a background refresh Next.js then keeps serving the last
// good page instead of caching an empty one, and a build fails loudly when the CMS is unreachable.

const CMS_URL = (process.env.CMS_URL || "").replace(/\/$/, "");

/** Safety net only; content normally refreshes on demand when the CMS calls /api/revalidate. */
const REVALIDATE_SECONDS = 3600;

// Must match WebsiteTag in icci-cms/src/lib/revalidateWebsite.ts
export const CmsTag = {
  leaders: "leaders",
  news: "news",
  events: "events",
  site: "site", // global config, navigation, social & footer
  page: (slug: string) => `page:${slug}`,
};

async function cmsFetch(path: string, tags: string[]): Promise<Response> {
  if (!CMS_URL) throw new Error("[cms] CMS_URL is not set");
  const res = await fetch(`${CMS_URL}${path}`, {
    cache: "force-cache",
    next: { tags, revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok && res.status !== 404) throw new Error(`[cms] GET ${path} responded ${res.status}`);
  return res;
}

/** JSON API call (`/api<path>`); returns the full `{ success, data, ... }` body. */
export async function cmsGet<T>(path: string, tags: string[]): Promise<T> {
  const res = await cmsFetch(`/api${path}`, tags);
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(`[cms] GET /api${path} failed: ${json.error || res.status}`);
  return json as T;
}

/** Plain-text CMS route (robots.txt, sitemap.xml); null when the CMS has it switched off (404). */
export async function cmsText(path: string, tags: string[]): Promise<string | null> {
  const res = await cmsFetch(path, tags);
  return res.status === 404 ? null : res.text();
}

// Records a form submission in the CMS inbox; the CMS also emails the enquiry to the secretariat.
// Returns false when it wasn't saved.
export async function cmsPostSubmission(fields: Record<string, string | undefined>): Promise<boolean> {
  const secret = process.env.CMS_SHARED_SECRET;
  if (!CMS_URL || !secret) {
    console.error("[cms] CMS_URL and CMS_SHARED_SECRET must be set to receive form submissions");
    return false;
  }

  try {
    const res = await fetch(`${CMS_URL}/api/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-cms-secret": secret,
      },
      body: JSON.stringify(fields),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`responded ${res.status}`);
    const json = await res.json();
    return !!json.success;
  } catch (error) {
    console.error("[cms] Could not record submission in CMS:", error);
    return false;
  }
}

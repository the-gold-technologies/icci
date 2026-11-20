import { cmsText, CmsTag } from "@/lib/cms";

// Served from the CMS (SEO › Sitemap & Robots); cached until the global settings are saved again.
export async function GET() {
  const body = await cmsText("/robots.txt", [CmsTag.site]);
  if (body === null) throw new Error("[cms] robots.txt is missing in the CMS");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-cms-secret");
  const expectedSecret = process.env.CMS_SHARED_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const tags = Array.isArray(body?.tags) ? body.tags : [];

    for (const tag of tags) {
      if (typeof tag === "string" && tag.trim()) {
        try {
          // Next.js 16 revalidateTag accepts (tag, { expire: 0 }) for immediate expiration
          revalidateTag(tag.trim(), { expire: 0 });
        } catch (err) {
          console.warn(`[revalidate] Failed to revalidate tag "${tag}":`, err);
        }
      }
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("[revalidate] Webhook error:", error);
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

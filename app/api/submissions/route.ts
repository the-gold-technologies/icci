import { NextRequest, NextResponse } from "next/server";
import { cmsPostSubmission } from "@/lib/cms";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const ok = await cmsPostSubmission({
      formType: body.formType,
      fullName: body.fullName || body.name,
      email: body.email,
      phone: body.phone,
      organisation: body.organisation,
      membershipCategory: body.membershipCategory || body.category,
      state: body.state,
      subject: body.subject,
      message: body.message || body.suggestion,
    });

    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Failed to record submission in CMS" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[submissions] Submission error:", error);
    return NextResponse.json(
      { success: false, error: "Invalid submission request" },
      { status: 400 },
    );
  }
}

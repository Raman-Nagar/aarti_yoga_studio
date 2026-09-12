import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(request: NextRequest) {
  // Guard against oversized payloads
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength) > 10_000) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid form data", details: result.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: Connect a notification service before going live. Options:
  // 1. Email via Resend:       https://resend.com  (free tier: 3000 emails/month)
  // 2. Email via Nodemailer:   use with Gmail App Password or SMTP
  // 3. Google Sheets:          via Google Sheets API (free, no infra needed)
  // 4. WhatsApp notification:  via Twilio or Meta Cloud API
  // 5. Database:               Supabase free tier (postgres + REST API)
  //
  // Until connected, submissions are accepted but not delivered to Arti.
  // Add BOOKING_NOTIFICATION_EMAIL to .env.local when ready.

  return NextResponse.json(
    { success: true, message: "Booking request received" },
    { status: 200 }
  );
}

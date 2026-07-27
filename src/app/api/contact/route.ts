import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, budget } = body;

    // 1. Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.CONTACT_EMAIL || "dishant.inbox@gmail.com";

    // 2. Development Mode Fallback (if RESEND_API_KEY is not configured yet)
    if (!apiKey) {
      console.log("⚡ [API/CONTACT - DEV MODE LOG]:");
      console.log(`From: ${name} <${email}>`);
      console.log(`Budget: ${budget || "Not specified"}`);
      console.log(`Message: ${message}`);
      
      return NextResponse.json({
        success: true,
        mode: "development",
        message: "Message received cleanly in development mode. Add RESEND_API_KEY to .env.local for live inbox delivery.",
      });
    }

    // 3. Live Resend Email Delivery
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Danger Design Portfolio <onboarding@resend.dev>",
      to: [targetEmail],
      replyTo: email,
      subject: `🚨 [Portfolio Inquiry] New message from ${name}`,
      html: `
        <div style="font-family: monospace, sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 24px; border: 2px solid #27272a;">
          <h2 style="color: #f59e0b; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">
            // NEW PORTFOLIO CONTACT INQUIRY
          </h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
          <p><strong>Estimated Budget:</strong> ${budget || "Not specified"}</p>
          <div style="background-color: #18181b; padding: 16px; border-left: 3px solid #f59e0b; margin-top: 16px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #71717a; margin-top: 24px;">
            Sent from Danger Design Portfolio Contact Engine
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[API/CONTACT - RESEND ERROR]:", error);
      return NextResponse.json(
        { error: "Failed to dispatch email via Resend.", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("[API/CONTACT - SERVER ERROR]:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message || error },
      { status: 500 }
    );
  }
}

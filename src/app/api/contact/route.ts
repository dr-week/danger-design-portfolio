import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Danger Design <onboarding@resend.dev>",
      to: "your-real-email@example.com", // <-- Replace with your inbox email address
      subject: `New inquiry from ${name}`,
      replyTo: email,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ message: "Sent" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

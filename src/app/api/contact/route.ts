import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Contact API is ready" });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would integrate with Resend, SendGrid, etc.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'portfolio@dishantnaik.com',
    //   to: 'hello@dishantnaik.com',
    //   subject: `New inquiry from ${name}`,
    //   replyTo: email,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


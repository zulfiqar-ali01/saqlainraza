import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio Inquiry <onboarding@resend.dev>",
    to: "bhatti_sb@yahoo.com",
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Portfolio Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  console.log("Email sent successfully, id:", data?.id);
  return NextResponse.json({ success: true });
}

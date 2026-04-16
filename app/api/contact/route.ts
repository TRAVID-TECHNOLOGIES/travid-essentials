import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  mobile?: string;
  company?: string;
  message?: string;
};

const isValidField = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0;
const isValidMobile = (value: string) => /^\d{10,15}$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const mobile = body.mobile?.trim().replace(/\D/g, "") ?? "";
  const company = body.company?.trim() || "Not provided";
  const message = body.message?.trim();

  if (!isValidField(name) || !isValidField(email) || !isValidField(message)) {
    return NextResponse.json(
      { message: "Name, email, mobile number, and project details are required." },
      { status: 400 }
    );
  }
  if (!isValidMobile(mobile)) {
    return NextResponse.json(
      { message: "Please enter a valid mobile number (10 to 15 digits)." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "contact@travidtechnologies.in";
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
  const secure =
    process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (!smtpHost || !smtpUser || !smtpPass || !fromAddress) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FROM_EMAIL.",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `New Contact Form Submission - ${name}`;
    const text = [
      "New contact request received:",
      `Name: ${name}`,
      `Email: ${email}`,
      `Mobile: ${mobile}`,
      `Company: ${company}`,
      "",
      "Project Details:",
      message,
    ].join("\n");

    const html = `
      <h2>New contact request received</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Project Details:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: "Your details have been sent successfully." });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { message: "Failed to send your request. Please try again shortly." },
      { status: 500 }
    );
  }
}

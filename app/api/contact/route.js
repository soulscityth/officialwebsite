import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "รูปแบบข้อมูลไม่ถูกต้อง" }, { status: 400 });
  }

  const name = (body.name || "").toString().trim().slice(0, 200);
  const phone = (body.phone || "").toString().trim().slice(0, 50);
  const email = (body.email || "").toString().trim().slice(0, 200);
  const subject = (body.subject || "").toString().trim().slice(0, 300);
  const message = (body.message || "").toString().trim().slice(0, 5000);

  if (!name || !email || !message) {
    return Response.json({ error: "กรุณากรอกชื่อ อีเมล และข้อความให้ครบถ้วน" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "รูปแบบอีเมลไม่ถูกต้อง" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "เกิดข้อผิดพลาดของระบบ กรุณาลองใหม่ภายหลัง" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "SoulScity Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || siteConfig.email,
      replyTo: email,
      subject: subject ? `[เว็บไซต์] ${subject}` : `[เว็บไซต์] ข้อความใหม่จาก ${name}`,
      text: [
        `ชื่อ: ${name}`,
        `อีเมล: ${email}`,
        phone ? `เบอร์โทรศัพท์: ${phone}` : null,
        subject ? `หัวข้อ: ${subject}` : null,
        "",
        "ข้อความ:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ภายหลัง" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json({ error: "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ภายหลัง" }, { status: 500 });
  }
}

import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { activityTypes, learnerLevels } from "@/lib/data";

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

  // Project-intake fields. All optional; the two dropdowns are checked against
  // the same lists the form renders, so a hand-crafted POST cannot inject text.
  const clean = (v, max) => (v || "").toString().trim().slice(0, max);
  const oneOf = (v, allowed) => (allowed.includes(v) ? v : "");

  const activityType = oneOf(clean(body.activityType, 100), activityTypes);
  const learnerLevel = oneOf(clean(body.learnerLevel, 100), learnerLevels);
  const participants = clean(body.participants, 50);
  const durationDays = clean(body.durationDays, 50);
  const preferredPeriod = clean(body.preferredPeriod, 100);

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

  const hasProjectDetails = Boolean(
    activityType || learnerLevel || participants || durationDays || preferredPeriod
  );

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
        hasProjectDetails ? "" : null,
        hasProjectDetails ? "--- รายละเอียดโครงการ ---" : null,
        activityType ? `ประเภทกิจกรรม: ${activityType}` : null,
        learnerLevel ? `ระดับผู้เรียน: ${learnerLevel}` : null,
        participants ? `จำนวนผู้เข้าร่วม: ${participants}` : null,
        durationDays ? `จำนวนวัน: ${durationDays}` : null,
        preferredPeriod ? `ช่วงเวลาที่ต้องการจัด: ${preferredPeriod}` : null,
        "",
        "ข้อความ:",
        message,
      ]
        .filter((line) => line !== null)
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

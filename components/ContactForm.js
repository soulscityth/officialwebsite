"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { activityTypes, learnerLevels } from "@/lib/data";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ภายหลัง");
      }

      // Fires only on a confirmed send, so the GA4 count is real enquiries
      // rather than button presses.
      trackEvent(GA_EVENTS.formSubmit, { activity_type: data.activityType || "unspecified" });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ภายหลัง");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-slate-900">ส่งข้อความเรียบร้อยแล้ว!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับภายใน 1 วันทำการ
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          ส่งข้อความอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            ชื่อผู้ติดต่อ
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="กรอกชื่อของคุณ"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            เบอร์โทรศัพท์
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="08x-xxx-xxxx"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          อีเมล
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="input-field"
        />
      </div>

      {/* Project intake — every field optional so a general enquiry is never
          blocked, but answering any of them lets us reply with specifics
          instead of asking a second round of questions. */}
      <fieldset className="rounded-2xl bg-slate-50 p-5 ring-1 ring-inset ring-slate-100">
        <legend className="px-2 text-sm font-medium text-slate-700">
          เกี่ยวกับโครงการ <span className="font-normal text-slate-400">(ไม่บังคับ)</span>
        </legend>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="activityType" className="mb-1.5 block text-sm font-medium text-slate-700">
              ประเภทกิจกรรม
            </label>
            <select id="activityType" name="activityType" className="input-field" defaultValue="">
              <option value="">เลือกประเภท</option>
              {activityTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="learnerLevel" className="mb-1.5 block text-sm font-medium text-slate-700">
              ระดับผู้เรียน
            </label>
            <select id="learnerLevel" name="learnerLevel" className="input-field" defaultValue="">
              <option value="">เลือกระดับ</option>
              {learnerLevels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="participants" className="mb-1.5 block text-sm font-medium text-slate-700">
              จำนวนผู้เข้าร่วม
            </label>
            <input
              id="participants"
              name="participants"
              type="text"
              inputMode="numeric"
              placeholder="เช่น 120"
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="durationDays" className="mb-1.5 block text-sm font-medium text-slate-700">
              จำนวนวัน
            </label>
            <input
              id="durationDays"
              name="durationDays"
              type="text"
              inputMode="numeric"
              placeholder="เช่น 2"
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="preferredPeriod" className="mb-1.5 block text-sm font-medium text-slate-700">
              ช่วงเวลาที่ต้องการจัด
            </label>
            <input
              id="preferredPeriod"
              name="preferredPeriod"
              type="text"
              placeholder="เช่น ต.ค. 2569"
              className="input-field"
            />
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
          หัวข้อ
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="เช่น สอบถามจัดค่าย Design Thinking ให้โรงเรียน"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          ข้อความ
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="บอกเราเกี่ยวกับโครงการหรือความต้องการของคุณ"
          className="input-field resize-none"
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
        {loading ? "กำลังส่งข้อความ..." : "ส่งข้อความ"}
        {!loading && <Send className="h-4 w-4" />}
      </button>

      <p className="text-center text-sm text-slate-500">ทีมงานตอบกลับภายใน 1 วันทำการ</p>
    </form>
  );
}

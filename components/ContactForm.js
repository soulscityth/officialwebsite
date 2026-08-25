"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-slate-900">ส่งข้อความเรียบร้อยแล้ว!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          ขอบคุณที่ติดต่อเรา ทีมงานจะรีบติดต่อกลับโดยเร็วที่สุด ภายใน 1-2 วันทำการ
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
            ชื่อ-นามสกุล
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

      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70">
        {loading ? "กำลังส่งข้อความ..." : "ส่งข้อความ"}
        {!loading && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}

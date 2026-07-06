"use client";

import { useState } from "react";

const contacts = [
  {
    icon: "✉",
    label: "a0970699639@gmail.com",
    href: "mailto:a0970699639@gmail.com",
    size: "text-[17px]",
  },
  {
    icon: "GH",
    label: "github.com/oossccaa",
    href: "https://github.com/oossccaa",
    size: "text-[15px]",
  },
  {
    icon: "in",
    label: "linkedin.com/in/yu-hui-xiao",
    href: "https://www.linkedin.com/in/yu-hui-xiao-b52627188/",
    size: "text-[14px]",
  },
];

const inputClass =
  "w-full rounded-[7px] border border-border-input bg-input px-[18px] py-[15px] text-[16px] text-ink outline-none focus:border-accent";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [botcheck, setBotcheck] = useState(""); // honeypot — 真人不會填

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setError(
        "尚未設定表單金鑰，請在 .env.local 加入 NEXT_PUBLIC_WEB3FORMS_KEY。",
      );
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Tris Studio 新詢問 — ${name}`,
          from_name: "Tris Studio 網站",
          name,
          email,
          message,
          botcheck: botcheck.trim().length > 0, // true → Web3Forms 判為垃圾訊息
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "送出失敗，請稍後再試，或直接寄信給我。");
      }
    } catch {
      setError("網路連線異常，請稍後再試，或直接寄信給我。");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-container scroll-mt-[90px] px-6 pb-10 pt-24 sm:px-12 sm:pt-[104px]"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-[72px]">
        <div>
          <h2 className="m-0 font-display text-[44px] font-medium tracking-[-0.01em] sm:text-[64px]">
            一起合作吧。
          </h2>
          <p className="m-0 mt-[22px] text-[18px] leading-[1.6] text-ink-3">
            目前開放接案，歡迎網頁設計與開發的合作邀約。
            <br />
            留言後我會在 24 小時內回覆。
          </p>
          <div className="my-8 mb-10 h-px w-[240px] bg-accent" />

          {sent ? (
            <div className="rounded-lg border border-accent bg-[#EEF1E9] px-[30px] py-7">
              <p className="m-0 mb-2 font-display text-[24px]">
                訊息已送出，謝謝你！
              </p>
              <p className="m-0 text-[15.5px] text-ink-3">
                我會盡快回覆，通常在 24 小時內。
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex max-w-[640px] flex-col gap-[26px]"
            >
              {/* Honeypot — 螢幕外的隱藏欄位；真人看不到也不會填，機器人會 → 判為垃圾訊息 */}
              <input
                type="text"
                name="botcheck"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <label className="block">
                <span className="mb-[10px] block text-[15px] text-ink-2">
                  姓名
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="你的名字"
                  className={inputClass}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-[10px] block text-[15px] text-ink-2">
                  Email
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-[10px] block text-[15px] text-ink-2">
                  訊息
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="告訴我你的專案…"
                  className={`${inputClass} resize-y leading-[1.6]`}
                  required
                />
              </label>
              {error && (
                <p className="m-0 text-[15px] text-[#B4574A]" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-[10px] self-start rounded-[7px] bg-accent px-[34px] py-4 text-[17px] tracking-[0.02em] text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "送出中…" : "送出訊息"}{" "}
                <span className="font-display">→</span>
              </button>
            </form>
          )}
        </div>

        <div className="pt-2">
          <p className="m-0 mb-[26px] text-[13.5px] font-bold tracking-[0.14em] text-accent">
            其他聯絡方式
          </p>
          <div className="flex flex-col gap-6">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 text-[17px] text-[#2E2D28] no-underline hover:text-accent"
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent text-accent ${c.size}`}
                >
                  {c.icon}
                </span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

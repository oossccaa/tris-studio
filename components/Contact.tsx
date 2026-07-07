"use client";

import { useState } from "react";

const contacts = [
  { label: "a0970699639@gmail.com", href: "mailto:a0970699639@gmail.com" },
  { label: "GitHub / @oossccaa", href: "https://github.com/oossccaa" },
  {
    label: "LinkedIn / in/yu-hui-xiao",
    href: "https://www.linkedin.com/in/yu-hui-xiao-b52627188/",
  },
  { label: "LINE / oossccaa", href: "https://line.me/ti/p/~oossccaa" },
];

const inputClass =
  "w-full rounded-lg border border-border-pill bg-input px-[18px] py-[15px] text-[16px] text-ink outline-none transition-colors focus:border-accent";

const labelClass =
  "mb-[9px] block font-mono text-[12px] tracking-[0.04em] text-ink-4";

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
    <section id="contact" className="scroll-mt-20 px-6 pt-[110px] sm:px-8">
      <div className="rounded-2xl border border-border-strong bg-gradient-to-b from-surface to-bg p-7 sm:p-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
              {"// 一起合作"}
            </span>
            <h2 className="m-0 mt-[18px] font-display text-[clamp(40px,7vw,96px)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
              來聊聊
              <br />
              你的專案
            </h2>

            {sent ? (
              <div className="mt-10 rounded-[10px] border border-accent bg-accent/[0.06] p-[30px]">
                <p className="m-0 mb-[10px] font-mono text-[15px] text-accent">
                  &gt; MESSAGE_SENT ✓
                </p>
                <p className="m-0 text-[17px] text-ink-2">
                  收到了，謝謝你！我會在 24 小時內回覆。
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-10 flex max-w-[620px] flex-col gap-[22px]"
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
                  <span className={labelClass}>NAME / 姓名</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="你的名字"
                    className={inputClass}
                    required
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>EMAIL</span>
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
                  <span className={labelClass}>MESSAGE / 訊息</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="告訴我你的專案…"
                    className={`${inputClass} resize-y leading-[1.6]`}
                    required
                  />
                </label>
                {error && (
                  <p className="m-0 font-mono text-[14px] text-[#E0836F]" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-[10px] self-start rounded-lg bg-accent px-8 py-4 text-[16px] font-bold tracking-[0.02em] text-bg transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "送出中…" : "送出訊息"}{" "}
                  <span className="font-mono">→</span>
                </button>
              </form>
            )}
          </div>

          <div className="pt-2">
            <p className="m-0 mb-6 font-mono text-[12px] tracking-[0.06em] text-muted">
              DIRECT / 其他管道
            </p>
            <div className="flex flex-col">
              {contacts.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`flex items-center justify-between border-t border-border py-[18px] text-[16.5px] text-ink-2 no-underline transition-colors hover:text-accent ${
                    i === contacts.length - 1 ? "border-b" : ""
                  }`}
                >
                  {c.label}
                  <span className="font-mono text-muted">↗</span>
                </a>
              ))}
            </div>

            {/* LINE QR — 桌機使用者直接掃碼加好友 */}
            <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-[10px] border border-border-strong bg-surface p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/line-qr.png"
                alt="LINE QR code — 加入好友 oossccaa"
                className="h-[150px] w-[150px] rounded-md"
              />
              <span className="font-mono text-[12px] text-ink-4">
                掃碼加 LINE 好友
              </span>
            </div>

            <p className="m-0 mt-7 font-mono text-[12px] leading-[1.7] text-muted">
              STATUS:
              <br />
              <span className="text-accent">● 開放接案中</span> — 2026 Q3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

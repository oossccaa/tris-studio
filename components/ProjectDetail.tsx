"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProjectDetail as Detail } from "@/lib/projects";

export default function ProjectDetail({
  detail,
  title,
  num,
  image,
}: {
  detail: Detail;
  title: string;
  num: string; // 索引編號，如 "01"
  image?: string; // 專案截圖（有的話取代斜紋佔位）
}) {
  // 輪播圖清單：gallery 優先，否則退回單張 image
  const slides = detail.gallery ?? (image ? [image] : []);
  const [slide, setSlide] = useState(0);
  const total = slides.length;

  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  return (
    <main className="mx-auto max-w-reading animate-fadeUp px-6 pb-10 pt-10 sm:px-8">
      <Link
        href="/#work"
        className="mb-[34px] inline-flex items-center gap-2 p-0 font-mono text-[13px] text-ink-4 transition-colors hover:text-accent"
      >
        ← 返回索引
      </Link>

      <div className="flex items-baseline gap-5">
        <span className="font-mono text-[16px] text-accent">{num}</span>
        <h1 className="m-0 font-display text-[clamp(44px,9vw,110px)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          {title}
        </h1>
      </div>
      <p className="m-0 mt-4 font-mono text-[13px] tracking-[0.03em] text-muted">
        {detail.meta}
      </p>
      <p className="m-0 mt-[22px] max-w-[60ch] text-[19px] leading-[1.7] text-ink-3">
        {detail.overview}
      </p>
      <div className="mt-[26px] flex flex-wrap gap-[10px]">
        {detail.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border-pill px-4 py-2 font-mono text-[13px] text-ink-2"
          >
            {t}
          </span>
        ))}
      </div>

      {detail.liveUrl && (
        <a
          href={detail.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-[10px] rounded-lg bg-accent px-7 py-[14px] text-[16px] font-bold tracking-[0.02em] text-bg transition-opacity hover:opacity-85"
        >
          造訪網站 <span className="font-mono">↗</span>
        </a>
      )}

      {/* Browser chrome mock */}
      <div className="mt-11 overflow-hidden rounded-[14px] border border-border-strong bg-surface">
        <div className="flex items-center gap-2 border-b border-border px-[18px] py-[14px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#E0836F]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#E7C15B]" />
          <span className="h-[11px] w-[11px] rounded-full bg-accent" />
          <span className="flex-1 text-center font-mono text-[12px] text-muted">
            {detail.browserUrl}
          </span>
        </div>
        {total > 0 ? (
          <div className="relative">
            {detail.mobileShots ? (
              // 直式手機截圖：置中完整顯示
              <div className="flex justify-center bg-surface-alt py-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slides[slide]}
                  alt={`${detail.browserCaption} ${slide + 1}/${total}`}
                  className="h-[520px] w-auto rounded-[16px] shadow-lg"
                />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slides[slide]}
                alt={`${detail.browserCaption} ${slide + 1}/${total}`}
                className="block max-h-[560px] w-full object-cover object-top"
              />
            )}
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="上一張截圖"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[18px] text-ink backdrop-blur-sm transition-colors hover:bg-accent hover:text-bg"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="下一張截圖"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[18px] text-ink backdrop-blur-sm transition-colors hover:bg-accent hover:text-bg"
                >
                  →
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="dc-hatch-lg flex h-[420px] items-center justify-center">
            <span className="font-mono text-[13px] tracking-[0.04em] text-faint">
              {detail.browserCaption}
            </span>
          </div>
        )}
      </div>

      {/* 截圖換頁指示器 */}
      {total > 1 && (
        <div className="mt-[26px] flex items-center justify-between">
          <div className="flex gap-3">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setSlide(i)}
                aria-label={`第 ${i + 1} 張截圖`}
                className={
                  i === slide
                    ? "h-3 w-3 rounded-full bg-accent"
                    : "h-3 w-3 rounded-full border border-border-pill transition-colors hover:border-accent"
                }
              />
            ))}
          </div>
          <span className="font-mono text-[15px] text-muted">
            {String(slide + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      )}

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border-strong bg-surface p-8">
          <h3 className="m-0 mb-4 font-mono text-[13px] tracking-[0.06em] text-accent">
            {"// 挑戰"}
          </h3>
          <p className="m-0 text-[17px] leading-[1.75] text-ink-3">
            {detail.challenge}
          </p>
        </div>
        <div className="rounded-xl border border-border-strong bg-surface p-8">
          <h3 className="m-0 mb-4 font-mono text-[13px] tracking-[0.06em] text-accent">
            {"// 成果"}
          </h3>
          <p className="m-0 text-[17px] leading-[1.75] text-ink-3">
            {detail.outcome}
          </p>
        </div>
      </div>

      <Link
        href="/#contact"
        className="mt-10 inline-flex items-center gap-[10px] rounded-lg bg-accent px-8 py-4 text-[16px] font-bold text-bg transition-opacity hover:opacity-85"
      >
        有類似專案？聊聊 →
      </Link>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import type { ProjectDetail as Detail } from "@/lib/projects";

export default function ProjectDetail({
  detail,
  image,
}: {
  detail: Detail;
  image?: string; // 專案截圖（有的話取代斜紋佔位）
}) {
  // 輪播圖清單：gallery 優先，否則退回單張 image
  const slides = detail.gallery ?? (image ? [image] : []);
  const [slide, setSlide] = useState(0);
  const total = slides.length;

  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  return (
    <main className="mx-auto max-w-reading animate-fadeUp px-6 pb-10 pt-[60px] sm:px-12">
      <Link
        href="/#work"
        className="mb-[30px] inline-flex items-center gap-2 p-0 text-[15.5px] text-accent hover:text-accent-hover"
      >
        <span className="font-display">←</span> 返回作品
      </Link>

      <h1 className="m-0 font-display text-[40px] font-medium leading-[1.08] tracking-[-0.01em] sm:text-[62px]">
        {detail.headline}
      </h1>
      <p className="m-0 mt-5 text-[19px] text-ink-3">{detail.meta}</p>
      <div className="mt-6 flex flex-wrap gap-[14px]">
        {detail.tags.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-border-pill px-[18px] py-[9px] text-[15px]"
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
          className="mt-8 inline-flex items-center gap-[10px] rounded-[7px] bg-accent px-[28px] py-[14px] text-[16px] tracking-[0.02em] text-white transition-colors hover:bg-accent-hover"
        >
          造訪網站 <span className="font-display">↗</span>
        </a>
      )}

      {/* Browser chrome mock */}
      <div className="mt-10 overflow-hidden rounded-xl border border-border-strong bg-input">
        <div className="flex items-center gap-2 border-b border-[#E4DCCC] px-[18px] py-[14px]">
          <span className="h-3 w-3 rounded-full bg-[#E0836F]" />
          <span className="h-3 w-3 rounded-full bg-[#E7C15B]" />
          <span className="h-3 w-3 rounded-full bg-[#8FB176]" />
          <span className="flex-1 text-center font-mono text-[13px] text-muted">
            {detail.browserUrl}
          </span>
        </div>
        {total > 0 ? (
          <div className="relative">
            {detail.mobileShots ? (
              // 直式手機截圖：置中完整顯示
              <div className="flex justify-center bg-[#EFE8DA] py-8">
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
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-[18px] text-white backdrop-blur-sm transition-colors hover:bg-accent"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="下一張截圖"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-[18px] text-white backdrop-blur-sm transition-colors hover:bg-accent"
                >
                  →
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="dc-hatch-lg flex h-[380px] items-center justify-center">
            <span className="font-mono text-[13px] tracking-[0.04em] text-muted">
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
                    : "h-3 w-3 rounded-full border border-accent transition-colors hover:bg-accent/40"
                }
              />
            ))}
          </div>
          <span className="font-display text-[22px] text-ink-3">
            {String(slide + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      )}

      <h2 className="mb-0 mt-16 font-display text-[32px] font-medium sm:text-[40px]">
        專案概述
      </h2>
      <p className="m-0 mt-[22px] text-[18.5px] leading-[1.8] text-[#4E4C44]">
        {detail.overview}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-[10px] border border-border-strong bg-surface px-[30px] py-7">
          <h3 className="m-0 mb-3 font-display text-[26px] font-medium text-accent">
            挑戰
          </h3>
          <p className="m-0 text-[16.5px] leading-[1.7] text-ink-2">
            {detail.challenge}
          </p>
        </div>
        <div className="rounded-[10px] border border-border-strong bg-surface px-[30px] py-7">
          <h3 className="m-0 mb-3 font-display text-[26px] font-medium text-accent">
            成果
          </h3>
          <p className="m-0 text-[16.5px] leading-[1.7] text-ink-2">
            {detail.outcome}
          </p>
        </div>
      </div>
    </main>
  );
}

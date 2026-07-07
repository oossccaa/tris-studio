import Link from "next/link";

const stack = [
  "Vue",
  "Nuxt",
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Go",
  "UI/UX",
];

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden}
      className="font-display text-[34px] font-semibold uppercase tracking-[-0.01em]"
    >
      {stack.map((s) => (
        <span key={s}>
          {s}&nbsp;<span className="text-accent">✦</span>&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <>
      <section className="relative px-6 pt-[30px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-[14px] font-mono text-[12px] tracking-[0.06em] text-muted">
          <span>全端工程師 &amp; 網頁設計</span>
          <span>台灣 · 遠端接案 · 八年經驗</span>
        </div>

        <h1 className="m-0 mt-10 font-display text-[clamp(52px,12vw,176px)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          <span className="block">我打造</span>
          <span className="block">
            網頁<span className="text-accent">．</span>產品
          </span>
          <span className="block text-muted">
            與體驗
            <span className="ml-[0.12em] inline-block h-[0.82em] w-[0.5em] animate-blink bg-accent align-[-0.06em]" />
          </span>
        </h1>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-7">
          <p className="m-0 max-w-[44ch] text-[18px] leading-[1.55] text-ink-3 sm:text-[20px]">
            管理系統・形象網站・實用工具・電子化菜單——
            八年工程經驗，從需求訪談到上線維運，一次到位。
          </p>
          <Link
            href="/#work"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-border-hover px-[30px] py-4 text-[16px] tracking-[0.02em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            看看我做過什麼 <span className="font-mono">↓</span>
          </Link>
        </div>
      </section>

      {/* 技術跑馬燈 */}
      <div className="mt-16 overflow-hidden whitespace-nowrap border-y border-border py-[18px]">
        <div className="inline-flex animate-marquee will-change-transform">
          <MarqueeRow />
          <MarqueeRow ariaHidden />
        </div>
      </div>
    </>
  );
}

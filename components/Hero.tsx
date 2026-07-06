import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-container px-6 pb-10 pt-16 sm:px-12 sm:pt-24">
        <div className="flex flex-col items-start text-left">
          <h1 className="m-0 max-w-[15ch] font-display text-[40px] font-medium leading-[1.08] tracking-[-0.01em] sm:text-[74px]">
            把你的需求，<br />
            做成專業好用的網站
          </h1>
          <p className="m-0 mt-[26px] max-w-[42ch] text-[18px] leading-[1.5] text-ink-3 sm:text-[21px]">
            管理系統・形象網站・實用工具・電子化菜單——
            八年工程經驗，從需求訪談到上線維運，一次到位。
          </p>
          <Link
            href="/#work"
            className="mt-9 inline-flex items-center gap-[10px] rounded-md bg-accent px-[30px] py-4 text-[17px] tracking-[0.02em] text-white transition-colors hover:bg-accent-hover"
          >
            查看作品 <span className="font-display">→</span>
          </Link>
        </div>
      </section>

      <div className="mx-auto mt-10 max-w-container px-6 sm:px-12">
        <div className="h-px bg-border-strong" />
      </div>
    </>
  );
}

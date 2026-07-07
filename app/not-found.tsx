import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[50vh] max-w-reading flex-col items-start justify-center px-6 py-24 sm:px-8">
        <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
          {"// 404"}
        </span>
        <h1 className="m-0 mt-4 font-display text-[clamp(40px,7vw,80px)] font-bold uppercase tracking-[-0.03em]">
          找不到頁面
        </h1>
        <p className="m-0 mt-4 text-[18px] text-ink-3">
          這個連結可能已失效，或頁面尚未建立。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-[10px] rounded-lg bg-accent px-7 py-4 text-[16px] font-bold text-bg transition-opacity hover:opacity-85"
        >
          返回首頁 <span className="font-mono">→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}

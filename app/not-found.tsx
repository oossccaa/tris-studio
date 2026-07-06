import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[50vh] max-w-reading flex-col items-start justify-center px-6 py-24 sm:px-12">
        <h1 className="m-0 font-display text-[56px] font-medium tracking-[-0.01em]">
          找不到頁面
        </h1>
        <p className="m-0 mt-4 text-[18px] text-ink-3">
          這個連結可能已失效，或頁面尚未建立。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-[16px] text-white transition-colors hover:bg-accent-hover"
        >
          返回首頁 <span className="font-display">→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}

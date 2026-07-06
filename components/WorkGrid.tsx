import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkGrid() {
  return (
    <section
      id="work"
      className="mx-auto max-w-container scroll-mt-[90px] px-6 pb-5 pt-24 sm:px-12"
    >
      <h2 className="m-0 font-display text-[40px] font-medium tracking-[-0.01em] sm:text-[56px]">
        精選作品
      </h2>
      <p className="m-0 mt-[18px] max-w-[50ch] text-[18px] text-ink-3">
        從企業管理系統、互動網頁到自動化工具——都是實際打造、實際被使用的作品。
      </p>
      <div className="my-[34px] mb-10 h-px bg-divider" />

      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="block rounded-[10px] border border-border bg-surface p-[22px] transition-shadow hover:shadow-md"
          >
            {p.image ? (
              <div className="h-[170px] overflow-hidden rounded-md border border-[#E2DACB]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.thumbLabel}`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="dc-hatch flex h-[170px] items-center justify-center rounded-md">
                <span className="font-mono text-[12px] text-muted">
                  {p.thumbLabel}
                </span>
              </div>
            )}
            <h3 className="mb-3 mt-5 font-display text-[26px] font-medium">
              {p.title}
            </h3>
            <span className="inline-block rounded-[5px] border border-accent px-[11px] py-1 text-[13px] text-accent">
              {p.category}
            </span>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 text-[15px] text-accent">
                查看專案 <span className="font-display">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

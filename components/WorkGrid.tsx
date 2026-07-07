import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-20 px-6 pt-[90px] sm:px-8">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="m-0 font-display text-[clamp(34px,6vw,72px)] font-bold uppercase tracking-[-0.02em]">
          精選作品
        </h2>
        <span className="font-mono text-[13px] text-muted">
          [ {String(projects.length).padStart(2, "0")} 個專案 ]
        </span>
      </div>

      <div>
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group grid grid-cols-[44px_1fr_auto] items-center gap-4 border-t border-border px-2 py-[30px] no-underline transition-colors hover:bg-surface md:grid-cols-[80px_1.4fr_1fr_auto] md:gap-6"
          >
            <span className="font-mono text-[15px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="m-0 font-display text-[clamp(28px,4vw,52px)] font-semibold tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <span className="mt-1 block font-mono text-[12.5px] text-ink-4 md:hidden">
                {p.category} · {p.thumbLabel}
              </span>
            </div>
            <span className="hidden font-mono text-[13.5px] tracking-[0.02em] text-ink-4 md:block">
              {p.category} · {p.thumbLabel}
            </span>
            <span className="justify-self-end font-mono text-[20px] text-muted transition-colors group-hover:text-accent">
              ↗
            </span>
          </Link>
        ))}
      </div>
      <div className="border-t border-border" />
    </section>
  );
}

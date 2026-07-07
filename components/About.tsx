const skillGroups = [
  {
    label: "FRONTEND / 前端",
    pct: "95%",
    skills: ["Vue 3", "Nuxt", "Vite", "React", "Next.js", "TypeScript"],
  },
  {
    label: "BACKEND / 後端",
    pct: "90%",
    skills: ["NestJS", "Node.js", "PostgreSQL", "Go", "Docker", "REST APIs"],
  },
  {
    label: "SPECIALTIES / 專長領域",
    pct: "85%",
    skills: [
      "客戶需求分析",
      "企業流程電子化",
      "AI 輔助開發",
      "UI / UX 設計",
      "Git / GitHub",
      "Vercel / VPS 部署",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 pt-[100px] sm:px-8">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-[60px]">
        <div className="lg:sticky lg:top-[100px]">
          <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
            {"// 關於我"}
          </span>
          <h2 className="m-0 mt-5 font-display text-[clamp(38px,6vw,80px)] font-bold uppercase leading-[0.98] tracking-[-0.03em]">
            嗨，
            <br />
            我是 Tris
          </h2>
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-lg border border-border-strong">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="Tris 個人照"
              className="h-full w-full object-cover object-[center_22%]"
            />
          </div>
        </div>

        <div>
          <p className="m-0 text-[21px] leading-[1.7] text-ink-2">
            Tris Studio 主理人・資深全端工程師。八年前端工程資歷，三年全端獨立接案——
            從企業管理系統、互動網頁到自動化工具與遊戲，都做得樂在其中。
          </p>
          <p className="m-0 mt-[22px] text-[17px] leading-[1.8] text-ink-4">
            我擅長溝通、快速抓到客戶真正的需求，習慣大膽假設、勇敢前進。
            工作之外喜歡打排球和健身；答應的事，就會負責到底。
          </p>

          <div className="mt-12 flex flex-col">
            {skillGroups.map((g) => (
              <div key={g.label} className="border-t border-border py-[22px]">
                <div className="mb-[14px] flex items-baseline justify-between">
                  <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
                    {g.label}
                  </span>
                  <span className="font-mono text-[12px] text-muted">
                    {g.pct}
                  </span>
                </div>
                <div className="flex flex-wrap gap-[9px]">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border-pill px-4 py-2 text-[14.5px] text-ink-2"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

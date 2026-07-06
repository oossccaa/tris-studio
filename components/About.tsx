const skillGroups = [
  {
    label: "前端",
    skills: ["Vue 3", "Nuxt", "Vite", "React", "Next.js", "TypeScript"],
  },
  {
    label: "後端",
    skills: ["NestJS", "Node.js", "PostgreSQL", "Go", "Docker", "REST APIs"],
  },
  {
    label: "專長領域",
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

const proficiency = [
  { name: "Vue · Nuxt", value: 95 },
  { name: "NestJS · Node.js", value: 90 },
  { name: "React · Next.js", value: 75 },
  { name: "PostgreSQL · Docker", value: 80 },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border-pill px-4 py-[9px] text-[15px]">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-container scroll-mt-[90px] px-6 pb-5 pt-24 sm:px-12 sm:pt-[100px]"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h2 className="m-0 font-display text-[40px] font-medium tracking-[-0.01em] sm:text-[60px]">
            嗨，我是 Tris。
          </h2>
          <p className="m-0 mt-5 text-[20px] text-ink-2 sm:text-[22px]">
            Tris Studio 主理人 · 資深全端工程師。
          </p>
          <p className="m-0 mt-[26px] max-w-[46ch] text-[18px] leading-[1.75] text-ink-3">
            八年前端工程資歷，三年全端獨立接案。我擅長溝通、快速抓到客戶真正的需求，習慣大膽假設、勇敢前進——從企業管理系統、互動網頁到自動化工具與遊戲，都做得樂在其中。工作之外喜歡打排球和健身；答應的事，就會負責到底。
          </p>
          <div className="mt-[34px] h-[2px] w-[180px] bg-accent" />
        </div>
        <div className="dc-hatch-portrait flex aspect-square items-center justify-center rounded-[10px] border border-[#E0D8C8]">
          <span className="font-mono text-[13px] tracking-[0.04em] text-muted">
            個人照 / portrait
          </span>
        </div>
      </div>

      <div className="mt-[78px]">
        <h3 className="m-0 font-display text-[34px] font-medium">技能與技術棧</h3>
        <div className="mb-10 mt-[14px] h-[2px] w-[130px] bg-accent" />

        <div className="grid grid-cols-1 gap-11 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="m-0 mb-[18px] text-[13.5px] font-bold tracking-[0.14em] text-accent">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {g.skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[52px] grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-2">
          {proficiency.map((p) => (
            <div key={p.name}>
              <div className="mb-3 flex items-baseline justify-between">
                <span className="font-display text-[21px]">{p.name}</span>
                <span className="text-[15px] text-ink-3">{p.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-track">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${p.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

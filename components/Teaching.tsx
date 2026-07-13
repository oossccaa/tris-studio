import Link from "next/link";

const topics = [
  {
    num: "01",
    title: "Vibe Coding 入門",
    desc: "零基礎也能用 AI 把想法變成能上線的作品",
  },
  {
    num: "02",
    title: "工具實戰",
    desc: "Cursor・Claude Code・Codex 上手與心法",
  },
  {
    num: "03",
    title: "進階整合",
    desc: "Skill 與 MCP 的實務應用",
  },
  {
    num: "04",
    title: "上線部署",
    desc: "用雲端服務架好自己的網站／App",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="scroll-mt-20 px-6 pt-[100px] sm:px-8">
      <div className="rounded-2xl border border-border-strong bg-gradient-to-b from-surface to-bg p-7 sm:p-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
              {"// 新服務"}
            </span>
            <h2 className="m-0 mt-[18px] font-display text-[clamp(38px,6vw,80px)] font-bold uppercase leading-[0.98] tracking-[-0.03em]">
              雲林在地
              <br />
              AI 教學
            </h2>
            <p className="m-0 mt-7 max-w-[42ch] text-[19px] leading-[1.7] text-ink-3">
              零基礎，或只會寫 code？帶你進入 vibe coding
              的世界——讓 AI 成為你的開發團隊，做出真的能用、能上線的網站與 App。
              雲林（斗六、虎尾、斗南一帶）可面對面教學，遠端也行。
            </p>
            <Link
              href="/#contact"
              className="mt-9 inline-flex items-center gap-[10px] rounded-lg bg-accent px-8 py-4 text-[16px] font-bold tracking-[0.02em] text-bg transition-opacity hover:opacity-85"
            >
              有興趣？來聊聊 <span className="font-mono">→</span>
            </Link>
            <p className="m-0 mt-7 font-mono text-[12px] leading-[1.7] text-muted">
              LOCATION: 雲林 — 斗六・虎尾・斗南（遠端亦可）
              <br />
              一對一／小班皆可，內容依你的程度客製——詳細方案與時間，聊過再定。
            </p>
          </div>

          <div className="pt-2">
            <p className="m-0 mb-6 font-mono text-[12px] tracking-[0.06em] text-muted">
              CURRICULUM / 你會學到
            </p>
            <div className="flex flex-col">
              {topics.map((t, i) => (
                <div
                  key={t.num}
                  className={`border-t border-border py-5 ${
                    i === topics.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[14px] text-accent">
                      {t.num}
                    </span>
                    <div>
                      <h3 className="m-0 font-display text-[20px] font-semibold">
                        {t.title}
                      </h3>
                      <p className="m-0 mt-1 text-[15px] leading-[1.6] text-ink-4">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

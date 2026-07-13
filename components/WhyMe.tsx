const reasons = [
  {
    num: "01",
    title: "成本大幅降低",
    body: (
      <>
        全面導入 AI 輔助開發（vibe coding），效率數倍於傳統流程——專案報價常態只要
        <span className="font-bold text-accent">行情的 1/5</span>
        。同樣的預算，做出更多。
      </>
    ),
  },
  {
    num: "02",
    title: "八年前端經驗",
    body: (
      <>
        <span className="font-bold text-accent">八年前端功力</span>
        打底的專業視覺能力：像素級的介面堅持與 UI/UX
        敏銳度。AI 產得再快，最後把關畫面與體驗的，是人。
      </>
    ),
  },
  {
    num: "03",
    title: "彈性客製化",
    body: (
      <>
        不會因為「合約沒寫」就不給你加——
        <span className="font-bold text-accent">合理的需求都可以調整</span>
        。目標是交付真正好用的產品，不是照單結案。
      </>
    ),
  },
];

export default function WhyMe() {
  return (
    <section id="why" className="scroll-mt-20 px-6 pt-[100px] sm:px-8">
      <span className="font-mono text-[13px] tracking-[0.06em] text-accent">
        {"// 為什麼選我"}
      </span>
      <h2 className="m-0 mt-4 font-display text-[clamp(34px,6vw,72px)] font-bold uppercase tracking-[-0.02em]">
        合作的三個理由
      </h2>

      <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.num}
            className="rounded-xl border border-border-strong bg-surface p-8"
          >
            <span className="font-mono text-[15px] text-accent">{r.num}</span>
            <h3 className="m-0 mt-4 font-display text-[24px] font-semibold tracking-[-0.01em]">
              {r.title}
            </h3>
            <p className="m-0 mt-4 text-[16.5px] leading-[1.75] text-ink-3">
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

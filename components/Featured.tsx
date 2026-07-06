import Link from "next/link";

type Item = {
  title: string;
  subtitle: string;
  caption: string;
  image?: string;
  href?: string;
};

const items: Item[] = [
  {
    title: "T-ERP 進銷存系統",
    subtitle: "企業管理系統 · 已上線",
    caption: "系統截圖 · 庫存與報表",
    image: "/work/t-erp.png",
    href: "/work/t-erp",
  },
  {
    title: "你的靈魂調酒",
    subtitle: "互動測驗網頁",
    caption: "測驗頁截圖",
    image: "/work/soul-cocktail.png",
    href: "/work/soul-cocktail",
  },
  {
    title: "Pour Up",
    subtitle: "網頁小遊戲 · 已上線",
    caption: "遊戲畫面截圖",
    image: "/work/pour-up.png",
    href: "/work/pour-up",
  },
];

function Card({ item }: { item: Item }) {
  const inner = (
    <>
      {item.image ? (
        <div className="h-[200px] overflow-hidden rounded-md border border-[#E2DACB]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.caption}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="dc-hatch flex h-[200px] items-center justify-center rounded-md border border-[#E2DACB]">
          <span className="font-mono text-[12px] tracking-[0.04em] text-muted">
            {item.caption}
          </span>
        </div>
      )}
      <h3 className="mb-[6px] mt-[22px] font-display text-[25px] font-medium">
        {item.title}
      </h3>
      <p className="m-0 mb-[18px] text-[15px] text-ink-4">{item.subtitle}</p>
      <span className="inline-flex items-center gap-2 text-[15.5px] text-accent">
        查看專案 <span className="font-display">→</span>
      </span>
    </>
  );

  const base =
    "block rounded-[10px] border border-border bg-surface p-5 transition-shadow";

  return item.href ? (
    <Link href={item.href} className={`${base} hover:shadow-md`}>
      {inner}
    </Link>
  ) : (
    <article className={base}>{inner}</article>
  );
}

export default function Featured() {
  return (
    <section className="mx-auto max-w-container px-6 pb-5 pt-11 sm:px-12">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

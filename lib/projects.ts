export type Project = {
  slug: string;
  title: string;
  category: string; // pill label, e.g. 企業管理系統
  thumbLabel: string; // placeholder thumbnail caption
  image?: string; // /work/*.png 縮圖與細節頁截圖
  featured?: boolean;
  detail?: ProjectDetail;
};

export type ProjectDetail = {
  headline: string; // e.g. "T-ERP — 進銷存系統"
  meta: string; // e.g. "全端開發 · 已上線"
  tags: string[]; // role / status / stack pills
  browserUrl: string;
  browserCaption: string;
  gallery?: string[]; // 多張截圖 → 細節頁輪播；未提供時用 project.image 單圖
  liveUrl?: string; // 有公開網址的作品，細節頁會顯示「造訪網站」
  overview: string;
  challenge: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "t-erp",
    image: "/work/t-erp.png",
    title: "T-ERP",
    category: "企業管理系統",
    thumbLabel: "進銷存系統",
    featured: true,
    detail: {
      headline: "T-ERP — 進銷存系統",
      meta: "全端開發 · 已上線，客戶使用中",
      tags: ["角色：全端開發", "已上線", "Vue 3 · NestJS · PostgreSQL"],
      browserUrl: "🔒 客戶內部系統",
      browserCaption: "系統截圖 · 庫存與報表總覽",
      gallery: [
        "/work/t-erp.png",
        "/work/t-erp-2.png",
        "/work/t-erp-3.png",
        "/work/t-erp-4.png",
      ],
      overview:
        "為小型製造業與零件貿易商打造的雲端進銷存系統，涵蓋採購、銷售、庫存與報表。以 Monorepo 架構開發，雲端版透過 Docker 部署於 VPS 供多人同時使用，另有桌機版本可離線運作。",
      challenge:
        "把傳產工廠原本仰賴紙本與 Excel 的流程電子化——介面必須讓不熟悉軟體的第一線人員不看說明書也能上手。",
      outcome: "已正式上線，客戶日常營運使用中，持續依回饋迭代功能。",
    },
  },
  {
    slug: "soul-cocktail",
    image: "/work/soul-cocktail.png",
    title: "你的靈魂調酒",
    category: "互動網頁",
    thumbLabel: "心理測驗網頁",
    featured: true,
    detail: {
      headline: "你的靈魂調酒 — 互動測驗網頁",
      meta: "企劃 · 設計 · 開發",
      tags: ["角色：獨立開發", "品牌企劃", "已上線"],
      browserUrl: "oossccaa.github.io/enjoy",
      browserCaption: "測驗頁截圖 · 調酒結果",
      liveUrl: "https://oossccaa.github.io/enjoy/",
      overview:
        "以「測出你的靈魂調酒」為主題的互動測驗網頁，是 Tris Studio 的品牌推廣企劃。訪客回答一系列問題後，會得到一杯專屬於自己的調酒結果，適合分享到社群。",
      challenge:
        "在一個輕巧的靜態網站裡，做出流暢的測驗節奏與有記憶點的視覺，讓人玩完願意主動分享。",
      outcome:
        "成為工作室的活名片——用一個好玩的小網頁，示範小預算也能有高完成度。",
    },
  },
  {
    slug: "pour-up",
    image: "/work/pour-up.png",
    title: "Pour Up",
    category: "網頁小遊戲",
    thumbLabel: "派對小遊戲",
    featured: true,
    detail: {
      headline: "Pour Up — 喝酒小遊戲",
      meta: "設計 · 開發 · 已上線",
      tags: ["角色：獨立開發", "行動優先", "已上線"],
      browserUrl: "pour-up.vercel.app",
      browserCaption: "遊戲畫面截圖",
      liveUrl: "https://pour-up.vercel.app/",
      overview:
        "為聚會場景設計的喝酒小遊戲——不用下載 App，手機打開網頁就能玩，讓派對隨時多一個炒熱氣氛的選擇。",
      challenge:
        "手機優先的操作與節奏設計：第一次看到的人要在十秒內看懂、上手、笑出來。",
      outcome: "已公開上線，成為聚會裡即開即玩的小工具。",
    },
  },
  {
    slug: "troop",
    image: "/work/troop.png",
    title: "Troop",
    category: "活動報名系統",
    thumbLabel: "揪團管理工具",
    detail: {
      headline: "Troop — 活動表單系統",
      meta: "產品規劃 · 全端開發 · 開發中",
      tags: ["角色：獨立開發", "開發中", "Next.js · Supabase"],
      browserUrl: "🔒 開發環境",
      browserCaption: "報名頁原型 · 行動版",
      gallery: ["/work/troop.png", "/work/troop-2.png", "/work/troop-3.png"],
      overview:
        "為社群揪團主打造的報名管理工具：一條連結取代「Google 表單＋試算表＋手動私訊」的組合——收單自動整理、報名者可篩選、狀態變更自動通知。第一版即支援中英雙語。",
      challenge:
        "報名側零摩擦：九成報名來自手機，任何人點開連結都要能在 30 秒內完成報名，不被登入流程擋住。",
      outcome: "開發中——產品規劃與設計系統已完成，正朝第一版上線推進。",
    },
  },
  {
    slug: "crypto-engine",
    image: "/work/crypto-engine.png",
    title: "合約交易機器人",
    category: "自動化系統",
    thumbLabel: "交易儀表板",
    detail: {
      headline: "合約自動交易機器人",
      meta: "系統設計 · 後端開發",
      tags: ["角色：獨立開發", "Go · React", "自動化交易"],
      browserUrl: "🔒 私人系統",
      browserCaption: "儀表板截圖 · 部位監控",
      overview:
        "以 Go 打造的加密貨幣永續合約自動交易系統：內建 EMA、RSI、MACD 等技術指標與多種策略引擎，搭配 React 儀表板即時監控部位與績效，支援模擬盤與實盤環境。",
      challenge:
        "全自動交易的風控必須經得起 24 小時無人值守——策略訊號、倉位管理、異常處理，每一環都不能出錯。",
      outcome: "完成完整的策略與模擬盤驗證；目前依市場狀況停用中。",
    },
  },
  {
    slug: "red-packet-game",
    image: "/work/red-packet-game.png",
    title: "紅包小遊戲",
    category: "互動小遊戲",
    thumbLabel: "情侶互動遊戲",
    detail: {
      headline: "紅包小遊戲 — 情侶互動網頁",
      meta: "設計 · 開發",
      tags: ["角色：設計與開發", "React · Vite", "輕量客製"],
      browserUrl: "🔒 私人訂製",
      browserCaption: "遊戲畫面截圖（示範內容）",
      gallery: [
        "/work/red-packet-game.png",
        "/work/red-packet-2.png",
        "/work/red-packet-3.png",
        "/work/red-packet-4.png",
      ],
      overview:
        "一個為情侶打造的互動紅包小遊戲——把驚喜包進遊戲裡，完成挑戰才能拆開紅包，讓送禮多一層儀式感。",
      challenge:
        "用極小的開發規模，做出有儀式感、值得紀念的互動體驗——小專案更考驗取捨。",
      outcome:
        "示範型的輕量客製作品：想送另一半一個獨一無二的小系統？這種需求我們也接。",
    },
  },
  {
    slug: "ticket-checker",
    image: "/work/ticket-checker.png",
    title: "售票查詢通知",
    category: "自動化工具",
    thumbLabel: "票券監測工具",
    detail: {
      headline: "售票查詢通知系統",
      meta: "後端開發 · 自動化",
      tags: ["角色：獨立開發", "Go · 無頭瀏覽器", "Email 通知"],
      browserUrl: "ticket-checker — 執行紀錄",
      browserCaption: "終端機執行紀錄（示意）",
      overview:
        "因法規限制無法代購票券，改以自動化監測切入：以 Go 搭配無頭瀏覽器（headless Chrome）定時檢查售票頁面，一偵測到釋票立即寄出 Email 通知。",
      challenge:
        "售票頁面由 JavaScript 動態渲染，需以無頭瀏覽器可靠取得真實票況，並在長時間排程執行下保持穩定。",
      outcome: "穩定運行的自動化工具——錯過釋票的焦慮，從此交給程式。",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

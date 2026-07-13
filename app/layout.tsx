import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tris Studio — 雲林網頁設計、系統開發與 AI 教學工作室",
  description:
    "Tris Studio 是雲林在地的網頁設計與系統開發工作室，服務斗六、虎尾、斗南等地區（遠端亦可）。專注於管理系統、形象網站、實用工具與電子化菜單，並提供在地 AI 教學（vibe coding）。八年開發經驗，從需求訪談到上線維運，一次到位。",
  keywords: [
    "雲林 網頁設計",
    "斗六 網頁設計",
    "虎尾 網頁設計",
    "斗南 網頁設計",
    "雲林 網站架設",
    "雲林 系統開發",
    "雲林 AI 教學",
    "斗六 AI 教學",
    "vibe coding 教學",
    "Cursor 教學",
    "Claude Code 教學",
    "AI 輔助開發",
  ],
  openGraph: {
    title: "Tris Studio — 雲林網頁設計與 AI 教學",
    description:
      "雲林在地（斗六・虎尾・斗南）網頁設計與系統開發工作室——管理系統、形象網站、實用工具、電子化菜單，以及 vibe coding AI 教學。",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

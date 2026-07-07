import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tris Studio — 專業網頁設計與系統開發工作室",
  description:
    "Tris Studio 專注於管理系統、形象網站、實用工具與電子化菜單。八年工程經驗，從需求訪談到上線維運，一次到位。",
  openGraph: {
    title: "Tris Studio",
    description:
      "專業網頁設計與系統開發工作室——管理系統、形象網站、實用工具、電子化菜單。",
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

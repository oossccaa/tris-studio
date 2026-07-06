# Tris Studio

全端工程師 ＆ 網頁設計工作室的個人作品集網站。以 **Next.js (App Router) + Tailwind CSS** 打造，實作自 `Tris Studio.dc.html` 設計稿與 `Tris_Studio_Design_System_Spec.md` 設計系統。

## 開發

```bash
npm install
npm run dev      # http://localhost:3000
```

## 聯絡表單（Web3Forms）

聯絡表單透過 [Web3Forms](https://web3forms.com) 寄信，不需自架後端：

1. 到 web3forms.com 填入你的 email，取得 access key
2. 複製 `.env.local.example` 為 `.env.local`，填入你的 key：
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=你的access_key
   ```
3. 重新啟動 `npm run dev`

未設定金鑰時，表單會顯示提示訊息而不會送出。

## 建置

```bash
npm run build
npm run start
```

## 結構

```
app/
  layout.tsx            # 全站 <head>、字型、metadata
  page.tsx             # 首頁（Hero / 精選 / 作品 / 關於 / 聯絡）
  work/[slug]/page.tsx # 專案細節頁（T-ERP、靈魂調酒等 7 個專案）
  not-found.tsx
  globals.css          # Tailwind 基礎 + 設計 token
components/
  Nav · Hero · Featured · WorkGrid · About · Contact · ProjectDetail · Footer
lib/
  projects.ts          # 專案資料
tailwind.config.ts     # 色彩、字型、間距 token
```

## 設計 token

| 用途 | 值 |
| --- | --- |
| 頁面底色 | `#F4EFE4` |
| 卡片底色 | `#F7F3EA` |
| 主色（Accent） | `#7B9070`（可於 `globals.css` 的 `--accent` 更換） |
| 標題字體 | Newsreader / Noto Serif TC |
| 內文字體 | Noto Sans TC |

主色可切換為 `#8A8F6B`、`#6E8BA0`、`#A08466`（對應原設計稿的 accent 選項），只需修改 `app/globals.css` 中的 `--accent`。

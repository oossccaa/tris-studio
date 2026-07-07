export default function Footer() {
  return (
    <footer className="mt-[100px] border-t border-border">
      <div className="mx-auto flex max-w-container flex-col items-start gap-3 px-6 py-[30px] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-mono text-[13px] font-bold tracking-[0.04em]">
          TRIS_STUDIO
        </span>
        <span className="font-mono text-[12px] text-muted">
          © 2026 Tris Studio — 台灣製造，細心打磨
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";

const links = [
  { href: "/#work", label: "/作品" },
  { href: "/#teaching", label: "/教學" },
  { href: "/#about", label: "/關於" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-bg/[0.72] px-4 py-[18px] backdrop-blur-md sm:px-8">
      <Link href="/" className="flex shrink-0 items-center gap-[9px] text-ink no-underline">
        <span className="inline-block h-[13px] w-[13px] rounded-[3px] bg-accent" />
        <span className="font-mono text-[14px] font-bold tracking-[0.04em] sm:text-[15px]">
          TRIS_STUDIO
        </span>
      </Link>
      <nav className="flex items-center gap-0 sm:gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="whitespace-nowrap px-2 py-2 font-mono text-[13px] tracking-[0.03em] text-[#B7B6AE] transition-colors hover:text-accent sm:px-[14px]"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="ml-2 whitespace-nowrap rounded bg-accent px-3 py-[9px] font-mono text-[13px] font-bold tracking-[0.03em] text-bg transition-opacity hover:opacity-85 sm:px-4"
        >
          聯絡 →
        </Link>
      </nav>
    </header>
  );
}

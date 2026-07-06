import Link from "next/link";

const links = [
  { href: "/#work", label: "作品" },
  { href: "/#about", label: "關於" },
  { href: "/#contact", label: "聯絡" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-accent bg-bg/[0.82] px-6 py-[22px] backdrop-blur-md sm:px-12">
      <Link
        href="/"
        className="font-display text-[27px] font-medium tracking-[0.01em] text-ink"
      >
        Tris Studio
      </Link>
      <nav className="flex items-center gap-6 sm:gap-11">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[16.5px] tracking-[0.02em] text-ink-2 transition-colors hover:text-accent"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

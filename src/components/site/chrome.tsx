import type { CSSProperties } from "react";

export const label = "font-mono text-xs uppercase tracking-[0.16em] text-graphite";

export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Wordmark({
  className,
  dotClassName,
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-display tracking-[-0.03em] ${className ?? ""}`}
    >
      <span className="font-black">STA</span>
      <span className="font-light">CK</span>
      <span className="font-extrabold">42</span>
      <span
        className={`animate-pop-in shrink-0 rounded-full bg-signal ${dotClassName ?? ""}`}
        style={delay(450)}
      />
    </span>
  );
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-hairline bg-paper/95 pl-4 backdrop-blur-sm sm:pl-8">
      <div className="flex items-center gap-6 sm:gap-10">
        <a href="/" aria-label="stack42 home">
          <Wordmark className="text-xl" dotClassName="ml-0.5 h-[5px] w-[5px]" />
        </a>
        <div className="flex gap-4 font-mono text-xs tracking-[0.14em] text-graphite sm:gap-8">
          <a href="/#products" className="bg-ink px-2 py-1 text-paper hover:opacity-80">
            PRODUCTS
          </a>
          <a href="/#contact" className="py-1 transition-colors hover:text-ink">
            CONTACT
          </a>
        </div>
      </div>
      <a
        href="https://github.com/stack-42"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full items-center bg-ink px-4 font-mono text-xs font-medium tracking-[0.14em] text-paper hover:opacity-80 sm:px-7"
      >
        GITHUB ↗
      </a>
    </nav>
  );
}

export function SectionBar({ left, right }: { left: string; right: string }) {
  return (
    <div
      className={`flex justify-between gap-4 border-b border-hairline px-4 py-3 sm:px-8 ${label}`}
    >
      <span>{left}</span>
      <span className="text-right">{right}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-hairline px-4 py-5 font-mono text-xs text-graphite sm:px-8"
    >
      <a
        href="https://github.com/stack-42"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-ink"
      >
        stack42 · github.com/stack-42
      </a>
      <div className="flex gap-6">
        <a href="/terms" className="transition-colors hover:text-ink">
          TERMS
        </a>
        <a href="/privacy" className="transition-colors hover:text-ink">
          PRIVACY
        </a>
        <span>2026</span>
      </div>
    </footer>
  );
}

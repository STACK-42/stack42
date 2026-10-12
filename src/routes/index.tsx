import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "stack42 — a small lab" },
      {
        name: "description",
        content: "A small group of people who build things and put them out into the world.",
      },
      { property: "og:title", content: "stack42" },
      {
        property: "og:description",
        content: "A small lab. We build tools and ship them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Product = {
  name: string;
  // Wordmark split: `head` in ink, `tail` in the product's accent.
  head: string;
  tail: string;
  category: string;
  // Accent for light and dark themes (dark needs a brighter tone to read on #111).
  accent: string;
  accentDark: string;
  tags: string[];
  description: string;
  link: string;
  link_label: string;
  icon: string;
  // Some icons have padding baked in; scale them up to fill the tile.
  iconScale?: number;
  screenshot: string;
};

const products: Product[] = [
  {
    name: "csdecoded",
    head: "cs",
    tail: "decoded",
    category: "CS REFERENCE",
    accent: "#0b7fc0",
    accentDark: "#1fa8f2",
    tags: ["WEB"],
    description: "Notes and reference for computer science topics.",
    link: "http://csdecoded.stack42.tech/",
    link_label: "csdecoded.stack42.tech",
    icon: "/apps/csdecoded/icon.svg",
    screenshot: "/apps/csdecoded/screenshot.jpg",
  },
  {
    name: "schoolers",
    head: "school",
    tail: "ers",
    category: "ALUMNI NETWORK",
    accent: "#a8432b",
    accentDark: "#e0663f",
    tags: ["WEB"],
    description:
      "Alumni directory and community network for FMSI and School of Mathematical Sciences & Informatics graduates.",
    link: "https://schoolers.space/",
    link_label: "schoolers.space",
    icon: "/apps/schoolers/icon.png",
    screenshot: "/apps/schoolers/screenshot.jpg",
  },
  {
    name: "aeset",
    head: "ae",
    tail: "set",
    category: "MOTION DESIGN CLI",
    accent: "#b8700f",
    accentDark: "#f0a02c",
    tags: ["CLI", "AFTER EFFECTS"],
    description:
      "After Effects project scaffolding tool. CLI for setting up motion design projects with studio-standard folder structure.",
    link: "http://aeset.stack42.tech/",
    link_label: "aeset.stack42.tech",
    icon: "/apps/aeset/icon.png",
    screenshot: "/apps/aeset/screenshot.jpg",
  },
  {
    name: "peeko",
    head: "pee",
    tail: "ko",
    category: "MENU BAR APP",
    accent: "#2f8f3a",
    accentDark: "#82de88",
    tags: ["MACOS", "LOCAL-FIRST"],
    description:
      "The to-do list that checks itself. A local-first macOS menu bar app that ticks off your daily habits (reading, focus, code, sleep, writing) when it sees the evidence.",
    link: "https://peeko.stack42.tech/",
    link_label: "peeko.stack42.tech",
    icon: "/apps/peeko/icon.png",
    iconScale: 1.25,
    screenshot: "/apps/peeko/screenshot.jpg",
  },
];

const label = "font-mono text-xs uppercase tracking-[0.16em] text-graphite";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-signal/20">
      <div className="mx-auto max-w-[1200px] border-x border-hairline">
        <Nav />
        <SectionBar
          left="[01] THE LAB"
          right={`${products.length} THINGS SHIPPED · MORE COOKING`}
        />
        <Hero />
        <SectionBar left="[02] SHIPPED" right="ALL LIVE · ALL OPEN TO TRY" />
        <Lineup />
        <WhatWeDo />
        <Footer />
      </div>
    </div>
  );
}

function Wordmark({ className, dotClassName }: { className?: string; dotClassName?: string }) {
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

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-hairline bg-paper/95 pl-4 backdrop-blur-sm sm:pl-8">
      <div className="flex items-center gap-6 sm:gap-10">
        <a href="/" aria-label="stack42 home">
          <Wordmark className="text-xl" dotClassName="ml-0.5 h-[5px] w-[5px]" />
        </a>
        <div className="flex gap-4 font-mono text-xs tracking-[0.14em] text-graphite sm:gap-8">
          <a href="#products" className="bg-ink px-2 py-1 text-paper hover:opacity-80">
            PRODUCTS
          </a>
          <a href="#contact" className="py-1 transition-colors hover:text-ink">
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

function SectionBar({ left, right }: { left: string; right: string }) {
  return (
    <div
      className={`flex justify-between gap-4 border-b border-hairline px-4 py-3 sm:px-8 ${label}`}
    >
      <span>{left}</span>
      <span className="text-right">{right}</span>
    </div>
  );
}

function AppIcon({ product, className }: { product: Product; className: string }) {
  return (
    <span className={`block overflow-hidden bg-[#141414] ring-1 ring-white/10 ${className}`}>
      <img
        src={product.icon}
        alt={product.name}
        className="h-full w-full object-cover"
        style={product.iconScale ? { transform: `scale(${product.iconScale})` } : undefined}
      />
    </span>
  );
}

function Hero() {
  return (
    <section className="grid items-end gap-10 border-b border-hairline px-4 pb-16 pt-16 sm:px-8 sm:pb-[72px] sm:pt-20 lg:grid-cols-[1fr_420px] lg:gap-12">
      <h1 className="animate-fade-up text-[64px] leading-[0.9] sm:text-[96px] lg:text-[112px]">
        <Wordmark
          className="tracking-[-0.04em]"
          dotClassName="ml-1.5 h-3 w-3 sm:h-[18px] sm:w-[18px] lg:h-5 lg:w-5"
        />
      </h1>
      <div className="flex flex-col items-start gap-5">
        <p className="animate-fade-up text-xl leading-[1.45] text-graphite" style={delay(120)}>
          A small lab. We build tools and ship them.
        </p>
        <div
          style={delay(200)}
          className="flex gap-2 animate-fade-up rounded-3xl border border-hairline bg-[var(--surface)] p-2 sm:gap-3 sm:p-3"
        >
          {products.map((product, i) => (
            <a
              key={product.name}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              title={product.name}
              className="animate-pop-in block transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110"
              style={delay(320 + i * 70)}
            >
              <AppIcon
                product={product}
                className="h-14 w-14 rounded-[13px] sm:h-16 sm:w-16 sm:rounded-[15px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section id="products" className="grid scroll-mt-16 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, i) => (
        <article
          key={product.name}
          className="accent-scope group relative flex animate-fade-up flex-col border-b border-hairline transition-colors duration-300 hover:bg-[var(--hover)] sm:border-r lg:border-b-0 lg:last:border-r-0"
          style={
            {
              "--accent-light": product.accent,
              "--accent-dark": product.accentDark,
              "--delay": `${500 + i * 110}ms`,
            } as CSSProperties
          }
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 bg-[var(--accent)] transition-[height] duration-300 group-hover:h-1"
          />
          <div className="flex items-center justify-between gap-3 px-6 py-5">
            <span className="bg-[var(--accent)] px-2 py-1 font-mono text-xs font-medium text-paper">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-right font-mono text-[11px] tracking-[0.14em] text-graphite">
              {product.category}
            </span>
          </div>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            className="relative mb-11 block h-[200px] bg-[var(--well)]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={product.screenshot}
                alt={`${product.name} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <EdgeBlur side="top" />
              <EdgeBlur side="bottom" />
            </div>
            <AppIcon
              product={product}
              className="absolute -bottom-9 left-6 h-[72px] w-[72px] rounded-[17px] shadow-[0_8px_22px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-3"
            />
          </a>
          <div className="flex flex-1 flex-col gap-4 px-6 pb-7 pt-4">
            <h3 className="font-display text-[34px] font-extrabold leading-none tracking-[-0.03em]">
              {product.head}
              <span className="text-[var(--accent)]">{product.tail}</span>
            </h3>
            <p className="flex-1 text-[15px] leading-[1.55] text-graphite">{product.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--chip)] px-[7px] py-[3px] font-mono text-[11px] tracking-[0.1em] text-graphite"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 pt-2 font-mono text-xs tracking-[0.14em] text-ink transition-colors hover:text-[var(--accent)]"
            >
              {product.link_label.toUpperCase()}
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

// Progressive blur: stacked backdrop-blur layers, each masked to a band closer to the
// edge, so the blur ramps up smoothly instead of ending in a hard line.
const blurSteps = [
  { blur: 1, from: 0, to: 45 },
  { blur: 3, from: 0, to: 30 },
  { blur: 8, from: 0, to: 18 },
];

function EdgeBlur({ side }: { side: "top" | "bottom" }) {
  const direction = side === "top" ? "to bottom" : "to top";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 h-1/2 ${side === "top" ? "top-0" : "bottom-0"}`}
    >
      {blurSteps.map(({ blur, from, to }) => {
        const mask = `linear-gradient(${direction}, black ${from}%, transparent ${to * 2}%)`;
        return (
          <div
            key={blur}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${direction}, color-mix(in srgb, var(--paper) 35%, transparent), transparent 40%)`,
        }}
      />
    </div>
  );
}

function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="grid gap-6 border-t border-hairline px-4 py-16 sm:px-8 md:grid-cols-[240px_1fr] md:gap-10"
    >
      <h2 className={label}>[03] WHO WE ARE</h2>
      <div className="max-w-[720px] space-y-4 [text-wrap:pretty]">
        <p className="font-display text-[26px] font-extrabold leading-[1.25] tracking-[-0.02em]">
          stack42 is our experimental playground.
        </p>
        <p className="text-[19px] leading-[1.6]">
          We're a band of undergrad freshers and one &ldquo;wise&rdquo; recent grad who are still
          figuring things out. This organization is where we test our apps and collaborate on
          projects.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="flex justify-between border-t border-hairline px-4 py-5 font-mono text-xs text-graphite sm:px-8"
    >
      <a
        href="https://github.com/stack-42"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-ink"
      >
        stack42 · github.com/stack-42
      </a>
      <span>2026</span>
    </footer>
  );
}

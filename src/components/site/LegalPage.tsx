import type { ReactNode } from "react";

import { Footer, Nav, SectionBar, delay, label } from "@/components/site/chrome";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

// Shared shell for /terms and /privacy: same frame as the landing page, a numbered
// table of contents on wide screens, and prose sections below.
export function LegalPage({
  tag,
  title,
  intro,
  updated,
  sections,
}: {
  tag: string;
  title: string;
  intro: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-signal/20">
      <div className="mx-auto max-w-[1200px] border-x border-hairline">
        <Nav />
        <SectionBar left={tag} right={`LAST UPDATED · ${updated}`} />
        <header className="border-b border-hairline px-4 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
          <h1 className="animate-fade-up font-display text-[48px] font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-[72px]">
            {title}
            <span className="text-signal">.</span>
          </h1>
          <div
            className="mt-6 max-w-[640px] animate-fade-up text-lg leading-[1.55] text-graphite [text-wrap:pretty]"
            style={delay(120)}
          >
            {intro}
          </div>
        </header>
        <div className="grid gap-10 px-4 py-14 sm:px-8 md:grid-cols-[240px_1fr] md:gap-10">
          <nav aria-label="Sections" className="md:sticky md:top-[84px] md:self-start">
            <p className={`mb-4 ${label}`}>Contents</p>
            <ol className="space-y-2 font-mono text-xs tracking-[0.06em] text-graphite">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="transition-colors hover:text-ink">
                    {String(i + 1).padStart(2, "0")} {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-[720px] space-y-12">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-20">
                <h2 className="mb-4 flex items-baseline gap-3 font-display text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em]">
                  <span className="font-mono text-xs font-normal text-graphite">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-4 text-[17px] leading-[1.65] [text-wrap:pretty]">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Inline link styled for body copy.
export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="underline decoration-hairline underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-graphite">{children}</ul>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "stack42 — a small lab" },
      {
        name: "description",
        content:
          "A small group of people who build things and put them out into the world.",
      },
      { property: "og:title", content: "stack42" },
      {
        property: "og:description",
        content: "A small lab. We build tools and ship them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "csdecoded",
    description: "Notes and reference for computer science topics.",
    status: "live",
    link: "http://csdecoded.stack42.tech/",
    link_label: "csdecoded.stack42.tech",
  },
  {
    name: "schoolers",
    description: "Alumni directory and community network for FMSI and School of Mathematical Sciences & Informatics graduates.",
    status: "live",
    link: "https://schoolers.space/",
    link_label: "schoolers.space",
  },
  {
    name: "aeset",
    description: "After Effects project scaffolding tool. CLI for setting up motion design projects with studio-standard folder structure.",
    status: "live",
    link: "http://aeset.stack42.tech/",
    link_label: "aeset.stack42.tech",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-signal/20">
      <Nav />
      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-24">
        <Hero />
        <hr className="my-16 border-hairline" />
        <WhatWeDo />
        <hr className="my-16 border-hairline" />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[760px] items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="stack42"
            className="h-8 w-auto"
            width="138"
            height="32"
          />
        </a>
        <div className="flex items-center gap-6 text-sm text-graphite">
          <a
            href="#products"
            className="transition-colors hover:text-signal"
          >
            Products
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-signal"
          >
            Contact
          </a>
          <a
            href="https://github.com/stack-42"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-signal"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-mono text-[42px] leading-[1.1] tracking-tight text-ink sm:text-[56px]">
        stack42
      </h1>
      <p className="mt-4 font-sans text-lg text-graphite">
        A small lab. We build tools and ship them.
      </p>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-graphite">
        What we do
      </h2>
      <div className="space-y-4 text-[17px] leading-[1.65] text-ink">
        <p>
          Welcome to Stack42, the proving/experimental playground for our
          hackathon adventures! We're a band of undergrad freshers and one
          &ldquo;wise&rdquo; recent grad who are still figuring things out.
        </p>
        <p>
          This organization is where we test our apps and collaborate on
          projects. Join us in exploring the future of development, one project
          at a time.
        </p>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-graphite">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded border border-hairline p-4 transition-colors hover:border-signal"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-base font-medium text-ink">
                {product.name}
              </span>
              <StatusDot status={product.status} />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-graphite">
              {product.description}
            </p>
            <div className="flex flex-nowrap items-center gap-1.5 font-mono text-xs text-signal">
              <span>&rarr;</span>
              <span className="min-w-0 whitespace-nowrap">{product.link_label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function StatusDot({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    live: "bg-signal",
    building: "bg-amber-500",
  };
  const color = colorMap[status] || "bg-hairline";
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${color}`}
      aria-label={status}
      title={status}
    />
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline">
      <div className="mx-auto flex h-16 max-w-[760px] items-center justify-between px-6 text-sm text-graphite">
        <div className="flex items-center gap-3">
          <span>stack42</span>
          <span className="text-hairline">·</span>
          <a
            href="https://github.com/stack-42"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-signal"
          >
            github.com/stack-42
          </a>
        </div>
        <span>2026</span>
      </div>
    </footer>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

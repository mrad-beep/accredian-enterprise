"use client";

import { useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Talk to us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full seal-ring text-brass-deep font-display text-sm">
            A
          </span>
          <span className="font-display text-lg tracking-tight">
            Accredian <span className="italic text-brass-deep">Enterprise</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.slice(0, -1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={links[links.length - 1].href}
            className="rounded-full bg-ink px-5 py-2 text-sm text-paper transition-colors hover:bg-brass-deep"
          >
            {links[links.length - 1].label}
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t hairline bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

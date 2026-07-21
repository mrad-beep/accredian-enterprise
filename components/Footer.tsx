const columns = [
  {
    title: "Programs",
    links: ["Data Science", "Applied AI", "Product Management", "Leadership"],
  },
  {
    title: "Company",
    links: ["About", "Academic partners", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "ROI calculator", "Curriculum guide", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full seal-ring text-brass-deep font-display text-sm">
                A
              </span>
              <span className="font-display text-lg tracking-tight">
                Accredian <span className="italic text-brass-deep">Enterprise</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate">
              An original, partial recreation built for a Full Stack
              Developer Intern assignment. Not affiliated with Accredian.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-wide text-slate">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-ink/80 transition-colors hover:text-brass-deep"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t hairline pt-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Accredian Enterprise Clone. Educational project.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-ink">Privacy</a>
            <a href="#top" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

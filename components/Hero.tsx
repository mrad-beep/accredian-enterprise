const stats = [
  { value: "500+", label: "Enterprise partners" },
  { value: "94%", label: "Cohort completion" },
  { value: "40%", label: "Median velocity gain" },
  { value: "12", label: "Academic partners" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-seal">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pt-28">
        <div>
          <p className="eyebrow text-brass-deep">Accredited enterprise learning</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            The transcript for how your{" "}
            <span className="italic text-brass-deep">workforce</span> gets smarter.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            We pair your teams with faculty from India&rsquo;s top institutes,
            structure every cohort like a real academic term, and hand your
            L&amp;D leads a transcript of outcomes instead of a vanity
            completion certificate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3 text-sm text-paper transition-colors hover:bg-brass-deep"
            >
              Request a proposal
            </a>
            <a
              href="#programs"
              className="rounded-full border hairline px-7 py-3 text-sm text-ink transition-colors hover:border-brass-deep"
            >
              See the curriculum
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border hairline bg-paper/80 p-6 shadow-[0_20px_60px_-30px_rgba(14,20,36,0.3)]">
            <p className="eyebrow text-slate">Cohort transcript &middot; Q3</p>
            <div className="mt-4 space-y-4">
              {[
                { label: "Applied ML for Product Teams", detail: "38 learners &middot; live" },
                { label: "Leadership for Technical Managers", detail: "24 learners &middot; live" },
                { label: "Data Storytelling Foundations", detail: "51 learners &middot; graded" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between border-b hairline pb-3 last:border-0"
                >
                  <div>
                    <p className="text-sm text-ink">{row.label}</p>
                    <p
                      className="mt-1 text-xs text-slate"
                      dangerouslySetInnerHTML={{ __html: row.detail }}
                    />
                  </div>
                  <span className="font-mono text-xs text-brass-deep">A</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-y hairline bg-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-2xl text-paper md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-paper/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

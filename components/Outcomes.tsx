const metrics = [
  { label: "Assessment score, avg.", value: 88, suffix: "/100" },
  { label: "On-time module completion", value: 94, suffix: "%" },
  { label: "Manager-rated skill lift", value: 76, suffix: "%" },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-brass-deep">Reporting</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
            One dashboard your CHRO will actually open.
          </h2>
          <p className="mt-4 text-slate">
            Attendance, graded assessments, and mentor notes roll up into a
            single report per cohort &mdash; exportable for your quarterly
            business review, no manual chasing required.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-deep" />
              Cohort-level and individual transcripts, exported on demand.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-deep" />
              Monthly review calls with your assigned academic consultant.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-deep" />
              ROI framed against the business goals set at kickoff.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border hairline p-6">
          <p className="eyebrow text-slate">Live cohort report</p>
          <div className="mt-6 space-y-6">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-ink">{m.label}</span>
                  <span className="font-mono text-sm text-brass-deep">
                    {m.value}
                    {m.suffix}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-line">
                  <div
                    className="h-1.5 rounded-full bg-brass-deep"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    term: "Diagnose",
    detail:
      "Our academic consultants audit skill gaps against your roadmap, not a generic competency matrix.",
  },
  {
    term: "Design",
    detail:
      "Faculty and your subject-matter experts co-author the syllabus, so every module cites your own systems.",
  },
  {
    term: "Deploy",
    detail:
      "Cohorts launch with platform access, a named mentor, and a syllabus your managers can actually read.",
  },
  {
    term: "Document",
    detail:
      "Every learner leaves with a graded transcript &mdash; attendance, assessments, and project outcomes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y hairline bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">How an engagement runs</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Read it like a syllabus, not a sales funnel.
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-paper/15 border-t border-paper/15">
          {steps.map((s, i) => (
            <div
              key={s.term}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <dt className="font-mono text-xs text-brass">
                {String(i + 1).padStart(2, "0")}
              </dt>
              <dd className="font-display text-lg italic text-paper">
                {s.term}
              </dd>
              <dd
                className="text-sm leading-relaxed text-paper/60 sm:col-start-2 sm:col-end-4"
                dangerouslySetInnerHTML={{ __html: s.detail }}
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

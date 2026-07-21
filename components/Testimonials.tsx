const quotes = [
  {
    quote:
      "Our data engineering team stopped treating this as a training budget line and started treating it as a hiring alternative.",
    name: "VP of Engineering",
    org: "A distributed fintech platform",
  },
  {
    quote:
      "The transcript model meant I could show my board exactly what each rupee of L&D spend produced.",
    name: "Head of Learning &amp; Development",
    org: "A national logistics company",
  },
  {
    quote:
      "Mentors actually reviewed our team's real project work instead of teaching a generic syllabus.",
    name: "Director of Product",
    org: "An enterprise SaaS provider",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t hairline bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-brass-deep">In their own words</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          L&amp;D leaders who moved the needle.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col justify-between rounded-2xl border hairline p-6"
            >
              <blockquote className="font-display text-lg italic leading-relaxed text-ink">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t hairline pt-4 text-sm">
                <p className="text-ink">{q.name}</p>
                <p
                  className="mt-0.5 text-slate"
                  dangerouslySetInnerHTML={{ __html: q.org }}
                />
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate/70">
          Illustrative client feedback compiled for this recreation project;
          not verbatim quotes from any named company.
        </p>
      </div>
    </section>
  );
}

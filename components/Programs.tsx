type Program = {
  code: string;
  title: string;
  description: string;
  duration: string;
};

const programs: Program[] = [
  {
    code: "DS-201",
    title: "Data Science &amp; Analytics",
    description:
      "From statistical foundations to production ML pipelines, taught by practitioners who ship models for a living.",
    duration: "12 weeks &middot; live cohort",
  },
  {
    code: "AI-310",
    title: "Applied AI &amp; GenAI",
    description:
      "Prompt design, retrieval systems, and responsible deployment patterns for teams shipping AI features.",
    duration: "10 weeks &middot; live cohort",
  },
  {
    code: "PM-150",
    title: "Product Management",
    description:
      "Discovery, roadmapping, and stakeholder alignment frameworks built around real product reviews.",
    duration: "8 weeks &middot; live cohort",
  },
  {
    code: "LD-402",
    title: "Leadership for Technical Managers",
    description:
      "Coaching, delegation, and org design for engineers and analysts stepping into people management.",
    duration: "6 weeks &middot; live cohort",
  },
];

function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border hairline bg-white p-6 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-brass-deep">
      <div>
        <p className="eyebrow text-brass-deep">{program.code}</p>

        <h3
          className="mt-3 font-display text-xl text-ink transition-colors duration-300 group-hover:text-brass-deep"
          dangerouslySetInnerHTML={{ __html: program.title }}
        />

        <p
          className="mt-3 text-sm leading-relaxed text-slate transition-colors duration-300 group-hover:text-ink"
          dangerouslySetInnerHTML={{ __html: program.description }}
        />
      </div>

      <p
        className="mt-6 text-xs text-slate transition-colors duration-300 group-hover:text-ink"
        dangerouslySetInnerHTML={{ __html: program.duration }}
      />
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-brass-deep">The curriculum</p>

        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
          Four domains, one academic standard.
        </h2>

        <p className="mt-4 text-slate">
          Every program is scoped with your L&amp;D team first, then built
          into a graded, cohort-based course &mdash; not a self-paced video
          library.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <ProgramCard key={p.code} program={p} />
        ))}
      </div>
    </section>
  );
}

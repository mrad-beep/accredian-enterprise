import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t hairline bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow text-brass">Get started</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Tell us the skill gap. We&rsquo;ll bring the syllabus.
          </h2>
          <p className="mt-4 max-w-md text-paper/60">
            Share a few details and an academic consultant will follow up
            with a proposal scoped to your team &mdash; usually within one
            business day.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

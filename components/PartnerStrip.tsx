const partners = [
  "Institute of Technology, Delhi",
  "School of Management, Ahmedabad",
  "National Law University",
  "Institute of Science, Bangalore",
  "School of Business, Mumbai",
  "Global University Partners",
];

export default function PartnerStrip() {
  return (
    <section className="border-b hairline bg-paper py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-center text-slate">
          Curriculum co-designed with
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="font-display text-sm italic text-ink/50 sm:text-base"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

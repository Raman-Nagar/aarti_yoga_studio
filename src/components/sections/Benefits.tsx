import { benefits } from "@/data/benefits";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBenefitIcon } from "@/components/ui/Icons";

export function Benefits() {
  const primary = benefits.slice(0, 4);
  const secondary = benefits.slice(4);

  return (
    <section
      id="benefits"
      className="section bg-[var(--color-surface)] scroll-mt-20"
      aria-label="Benefits of yoga practice"
    >
      <div className="ys-container">
        <SectionHeader
          label="Why Yoga"
          title="What consistent practice can do for you."
          subtitle="Yoga is a long-term investment in your wellbeing. Here is what students commonly experience."
          align="center"
          className="mb-12"
        />

        {/* Primary 4 — prominent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
          {primary.map((benefit) => (
            <div
              key={benefit.id}
              className="reveal group p-6 bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/25 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/14 transition-colors duration-200">
                {getBenefitIcon(benefit.icon)}
              </div>
              <h3 className="font-display text-base font-semibold text-[var(--color-text)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary 4 — lighter horizontal list */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3">
          {secondary.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center flex-shrink-0">
                {getBenefitIcon(benefit.icon, "!w-4 !h-4")}
              </div>
              <span className="text-xs font-medium text-[var(--color-text-2)] leading-snug">
                {benefit.title}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-text-faint)] max-w-lg mx-auto">
          Yoga is a wellness practice and is not a substitute for medical treatment.
        </p>
      </div>
    </section>
  );
}

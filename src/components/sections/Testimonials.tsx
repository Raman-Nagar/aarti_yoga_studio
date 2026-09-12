import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Check if we have real testimonials (not placeholders)
const hasRealTestimonials = testimonials.some(
  (t) => !t.text.includes("will appear here")
);

export function Testimonials() {
  if (!hasRealTestimonials) {
    return (
      <section
        id="testimonials"
        className="section bg-[var(--color-bg)] scroll-mt-20"
        aria-label="Student testimonials"
      >
        <div className="ys-container">
          <div className="reveal max-w-lg mx-auto text-center">
            <p className="section-label-center justify-center mb-4">Student Stories</p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[var(--color-text)] leading-tight mb-4">
              What students say.
            </h2>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8">
              Real testimonials from students will be shared here as they are collected. Arti&apos;s teaching speaks through her students&apos; experiences.
            </p>
            {/* Decorative placeholder lines */}
            <div className="space-y-3 max-w-sm mx-auto" aria-hidden="true">
              {[80, 60, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-[var(--color-border)]"
                  style={{ width: `${w}%`, margin: "0 auto" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="section bg-[var(--color-bg)] scroll-mt-20"
      aria-label="Student testimonials"
    >
      <div className="ys-container">
        <SectionHeader
          label="Student Stories"
          title="What students say."
          subtitle="Real experiences from people who practice with Arti."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="reveal bg-white rounded-2xl border border-[var(--color-border)] p-7 flex flex-col"
            >
              <span
                className="text-4xl leading-none text-[var(--color-primary)]/15 font-serif mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="flex-1">
                <p className="text-sm text-[var(--color-text-2)] leading-relaxed italic">
                  {t.text}
                </p>
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

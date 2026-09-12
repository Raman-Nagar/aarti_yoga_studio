import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Choose Your Session",
    description:
      "Decide between a group yoga class or a personal home-visit session based on your preference and goals.",
  },
  {
    number: "02",
    title: "Connect With Arti",
    description:
      "Reach out via the booking form or WhatsApp. Arti will get back to you to understand your goals and requirements.",
  },
  {
    number: "03",
    title: "Choose Your Schedule",
    description:
      "Find a day and time that works for you. Arti offers flexible scheduling to fit around your routine.",
  },
  {
    number: "04",
    title: "Start Your Practice",
    description:
      "Show up, breathe and begin. Your yoga journey starts exactly where you are — no experience needed.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section bg-[var(--color-bg)] scroll-mt-20"
      aria-label="How to get started"
    >
      <div className="ys-container">
        <SectionHeader
          label="Getting Started"
          title="Simple steps to begin."
          subtitle="Starting your yoga practice with Arti is straightforward. Here is how it works."
          align="center"
          className="mb-12"
        />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connector — aligns with center of step circles (left-7 = 28px = half of w-14) */}
          <div
            className="absolute left-7 top-10 bottom-10 w-px bg-[var(--color-border)] hidden md:block"
            aria-hidden="true"
          />

          <ol className="space-y-6 md:space-y-8" aria-label="Steps to get started">
            {steps.map((step) => (
              <li key={step.number} className="reveal flex gap-5 md:gap-8">
                {/* Step circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="font-display w-14 h-14 rounded-full flex items-center justify-center border-2 font-semibold text-sm bg-[var(--color-bg)] border-[var(--color-primary)]/35 text-[var(--color-primary)]">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3 pb-2 border-l border-[var(--color-border)] pl-5 md:border-0 md:pl-0 flex-1">
                  <h3 className="font-display text-base font-semibold text-[var(--color-text)] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-12">
          <Button href="#contact" variant="primary" size="lg">
            Book Your Session
          </Button>
        </div>
      </div>
    </section>
  );
}

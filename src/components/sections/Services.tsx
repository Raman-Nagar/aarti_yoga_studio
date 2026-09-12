import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section
      id="services"
      className="section bg-[var(--color-surface)] scroll-mt-20"
      aria-label="Yoga classes and sessions"
    >
      <div className="ys-container">
        <SectionHeader
          label="Classes & Sessions"
          title="Find the right practice for you."
          subtitle="Whether you prefer the energy of a group or the focus of a personal session, Arti offers flexible options designed around your life."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service) => (
            <article
              key={service.id}
              className={cn(
                "relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 reveal",
                service.highlight
                  ? "bg-[var(--color-primary)] border-[var(--color-primary-dark)] shadow-xl ring-1 ring-[var(--color-primary-dark)]/20 lg:-mt-4 lg:-mb-4"
                  : "bg-white border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-border-2)]",
                service.comingSoon && "opacity-70"
              )}
              aria-label={service.title}
            >
              {/* Top accent strip for highlighted card */}
              {service.highlight && (
                <div className="h-1 bg-white/30" aria-hidden="true" />
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Subtitle + badge row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p
                    className={cn(
                      "text-xs font-semibold tracking-[0.1em] uppercase",
                      service.highlight
                        ? "text-white/60"
                        : "text-[var(--color-primary)]"
                    )}
                  >
                    {service.subtitle}
                  </p>
                  {service.highlight && (
                    <span className="px-2.5 py-1 bg-white/20 text-white text-[10px] font-semibold rounded-full flex-shrink-0">
                      Recommended
                    </span>
                  )}
                  {service.comingSoon && (
                    <span className="px-2.5 py-1 bg-[var(--color-surface-2)] text-[var(--color-text-muted)] text-[10px] font-semibold rounded-full border border-[var(--color-border)] flex-shrink-0">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={cn(
                    "font-display font-semibold mb-3",
                    service.highlight
                      ? "text-white text-2xl"
                      : "text-[var(--color-text)] text-xl"
                  )}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    "text-sm leading-relaxed mb-6",
                    service.highlight
                      ? "text-white/75"
                      : "text-[var(--color-text-muted)]"
                  )}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1" aria-label={`${service.title} features`}>
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                          service.highlight
                            ? "bg-white/20"
                            : "bg-[var(--color-primary)]/10"
                        )}
                      >
                        <IconCheck
                          size={9}
                          className={
                            service.highlight
                              ? "text-white"
                              : "text-[var(--color-primary)]"
                          }
                        />
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          service.highlight
                            ? "text-white/80"
                            : "text-[var(--color-text-2)]"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Location note */}
                {service.available && !service.comingSoon && (
                  <p
                    className={cn(
                      "text-xs mb-5 pb-5 border-b",
                      service.highlight
                        ? "text-white/50 border-white/20"
                        : "text-[var(--color-text-faint)] border-[var(--color-border)]"
                    )}
                  >
                    {service.id === "group"
                      ? "📍 Location shared after registration"
                      : "🏠 Arti visits your home"}
                  </p>
                )}

                {/* CTA */}
                <Button
                  href={service.ctaHref}
                  variant={
                    service.comingSoon
                      ? "secondary"
                      : service.highlight
                      ? "secondary"
                      : "primary"
                  }
                  size="md"
                  className={cn(
                    "w-full",
                    service.highlight &&
                      "bg-white text-[var(--color-primary)] hover:bg-white/90 font-semibold"
                  )}
                  disabled={service.comingSoon}
                  aria-describedby={service.comingSoon ? `${service.id}-coming-soon` : undefined}
                >
                  {service.cta}
                </Button>
                {service.comingSoon && (
                  <p id={`${service.id}-coming-soon`} className="sr-only">
                    This service is not yet available
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="reveal text-center text-xs text-[var(--color-text-faint)] mt-10">
          Not sure which session is right for you? Use the guide below to find out.
        </p>
      </div>
    </section>
  );
}

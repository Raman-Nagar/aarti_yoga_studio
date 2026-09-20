import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const trustBadges = [
  { value: `${siteConfig.experience} Yrs`, label: "Experience" },
  { value: "Group", label: "Classes" },
  { value: "1:1", label: "Home Visits" },
];

const HERO_IMAGE = "/images/arti-hero.webp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center pt-16 overflow-hidden bg-[var(--color-bg)]"
      style={{ minHeight: "min(100svh, 900px)" }}
      aria-label="Introduction"
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm accent blob — right side */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[700px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top right, var(--color-accent) 0%, transparent 65%)",
          opacity: 0.07,
        }}
      />

      <div className="ys-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          {/* Text content */}
          <div className="order-1">
            <p className="section-label mb-5">Yoga with Arti</p>

            <h1 className="font-display font-semibold leading-[1.08] text-[var(--color-text)] mb-5">
              Yoga that fits
              <br />
              <em className="not-italic text-[var(--color-primary)]">
                into your life.
              </em>
            </h1>

            <p className="text-base md:text-lg text-[var(--color-text-2)] leading-relaxed max-w-[460px] mb-7">
              {siteConfig.subTagline}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-9">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full"
                >
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    {badge.value}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                Book a Session
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Classes
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] mx-auto lg:mx-0 lg:max-w-[400px] mt-6 lg:mt-0 px-6 lg:px-0">
              {/* Offset accent block behind image */}
              <div
                className="absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 w-full h-full rounded-2xl"
                style={{ background: "var(--color-accent)", opacity: 0.12 }}
                aria-hidden="true"
              />

              {/* Image frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-surface-2)]">
                <Image
                  src={HERO_IMAGE}
                  alt="Arti — professional yoga teacher"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoKAAoABUB8JYgCdADbAOKAAPlhbnltMK9yfAzO8TSXiGG9iqzdrVNbKIJJ9kyvH8gAAA=="
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 360px, 400px"
                />
              </div>

              {/* Floating experience card */}
              <div
                className="absolute bottom-4 -left-3 lg:-left-5 bg-white rounded-xl px-4 py-3 shadow-md border border-[var(--color-border)]"
                style={{ zIndex: 10 }}
              >
                <p className="font-display text-xl font-semibold text-[var(--color-primary)] leading-none">
                  {siteConfig.experience}
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  Years Teaching
                </p>
              </div>

              {/* Floating sessions card */}
              <div
                className="absolute top-4 -right-3 lg:-right-5 bg-[var(--color-primary)] rounded-xl px-4 py-3 shadow-md"
                style={{ zIndex: 10 }}
              >
                <p className="text-[11px] font-medium text-white/70 mb-0.5">
                  Available for
                </p>
                <p className="text-xs font-semibold text-white leading-snug">
                  Group &amp;
                  <br />
                  Home Visits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
          Scroll
        </span>
        <div className="w-px h-8 bg-[var(--color-text-muted)]" />
      </div>
    </section>
  );
}

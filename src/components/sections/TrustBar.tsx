import { siteConfig } from "@/config/site";

const stats = [
  {
    value: `${siteConfig.experience}+`,
    label: "Years Teaching",
    description: "Dedicated to helping students build a consistent practice",
  },
  {
    value: "Group",
    label: "Yoga Classes",
    description: "Welcoming offline sessions in a supportive environment",
  },
  {
    value: "Home",
    label: "Visit Sessions",
    description: "Arti comes to you — fully tailored to your goals",
  },
  {
    value: "All",
    label: "Levels Welcome",
    description: "Complete beginners to experienced practitioners",
  },
];

export function TrustBar() {
  return (
    <section
      className="bg-[var(--color-surface)] border-y border-[var(--color-border)]"
      aria-label="About Arti's experience"
    >
      <div className="ys-container py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal text-center px-4 ${
                i < stats.length - 1
                  ? "md:border-r md:border-[var(--color-border)]"
                  : ""
              }`}
            >
              <p className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-primary)] leading-none mb-1.5">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-[var(--color-text)] mb-1 tracking-wide">
                {stat.label}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed hidden md:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

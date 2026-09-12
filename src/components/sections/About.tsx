import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icons";

const highlights = [
  `${siteConfig.experience} years of dedicated teaching experience`,
  "Beginner-friendly — no prior experience needed",
  "Personalized attention in every session",
  "Focus on alignment, breathing and mindful movement",
  "Flexible scheduling for group and personal sessions",
];

export function About() {
  return (
    <section id="about" className="section bg-[var(--color-bg)] scroll-mt-20">
      <div className="ys-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface-2)]">
              <Image
                src="/images/arti-about.jpeg"
                alt="Arti — yoga teacher"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Accent block — outside overflow container so it's visible on mobile */}
            <div
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-40 h-40 lg:w-48 lg:h-48 rounded-2xl -z-10 opacity-20"
              style={{ background: "var(--color-accent)" }}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              label="Meet Arti"
              title="Yoga is not just about flexibility."
              subtitle="It is about creating a healthier relationship between your body, breath and mind."
            />

            <div className="reveal mt-8 space-y-4 text-[var(--color-text-2)]">
              <p>
                Arti has been teaching yoga for over {siteConfig.experience} years, working with students of all backgrounds — from complete beginners to those looking to deepen an existing practice.
              </p>
              <p>
                Her approach is grounded, practical and deeply personal. She believes that yoga should fit into your life, not the other way around — which is why she offers both group classes and home-visit sessions designed around your schedule and goals.
              </p>
            </div>

            {/* Highlights */}
            <ul className="reveal mt-7 space-y-2.5" aria-label="Arti's teaching highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <IconCheck size={10} className="text-[var(--color-primary)]" />
                  </span>
                  <span className="text-sm text-[var(--color-text-2)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-9">
              <Button href="#contact" variant="primary" size="md">
                Book a Session with Arti
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

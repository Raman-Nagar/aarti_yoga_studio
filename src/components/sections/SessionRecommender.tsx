"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Option = {
  id: string;
  label: string;
  recommendation: "group" | "personal";
};

const options: Option[] = [
  { id: "new", label: "I'm completely new to yoga", recommendation: "personal" },
  { id: "group", label: "I want regular group classes", recommendation: "group" },
  { id: "attention", label: "I prefer personal attention", recommendation: "personal" },
  { id: "home", label: "I want yoga at home", recommendation: "personal" },
  { id: "flexibility", label: "I want to improve flexibility", recommendation: "group" },
  { id: "stress", label: "I want relaxation & stress relief", recommendation: "group" },
];

const recommendations = {
  group: {
    title: "Group Yoga Classes",
    description:
      "A group class would be a great fit for you. You'll benefit from the energy of practicing with others, a consistent schedule and Arti's guidance in a welcoming environment.",
    cta: "Join a Group Class",
  },
  personal: {
    title: "Personal Home Session",
    description:
      "A personal session would suit you best. Arti will visit your home and create a practice designed entirely around your goals, pace and comfort.",
    cta: "Book Personal Session",
  },
};

export function SessionRecommender() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedOption = options.find((o) => o.id === selected);
  const result = selectedOption
    ? recommendations[selectedOption.recommendation]
    : null;

  return (
    <section
      id="recommendation"
      className="section bg-[var(--color-bg)]"
      aria-label="Find the right session for you"
    >
      <div className="ys-container">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            label="Find Your Session"
            title="Which yoga experience is right for you?"
            subtitle="Select what you're looking for and we'll point you in the right direction."
            align="center"
            className="mb-10"
          />

          {/* Options */}
          <div
            role="group"
            aria-label="What are you looking for?"
            className="mt-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    setSelected(selected === option.id ? null : option.id)
                  }
                  aria-pressed={selected === option.id}
                  className={cn(
                    "text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2",
                    selected === option.id
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-md"
                      : "bg-white border-[var(--color-border)] text-[var(--color-text-2)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {result && (
            <div
              className="mt-8 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl"
              role="status"
              aria-live="polite"
              aria-label="Session recommendation"
            >
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-primary)] mb-2">
                Our Recommendation
              </p>
              <h3
                className="font-display text-xl font-semibold text-[var(--color-text)] mb-3"
              >
                {result.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                {result.description}
              </p>
              <Button href="#contact" variant="primary" size="md">
                {result.cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

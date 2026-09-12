"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconChevronDown } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

function FAQItem({ faq, isOpen, onToggle }: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-answer-${faq.id}`;

  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 rounded-sm"
      >
        <span className="text-sm font-semibold text-[var(--color-text)] pr-4">
          {faq.question}
        </span>
        <IconChevronDown
          size={18}
          className={cn(
            "flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        id={id}
        role="region"
        aria-label={faq.question}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[800px] pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="section bg-[var(--color-surface)] scroll-mt-20"
      aria-label="Frequently asked questions"
    >
      <div className="ys-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <SectionHeader
            label="FAQ"
            title="Common questions answered."
            subtitle="Everything you need to know before getting started. Can't find your answer? Reach out to Arti directly."
          />

          <div className="reveal">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

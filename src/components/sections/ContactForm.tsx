"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingSchema } from "@/lib/validations";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconWhatsApp, IconPhone, IconCheck } from "@/components/ui/Icons";
import { buildWhatsAppUrl, buildCallUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

function Field({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[var(--color-text)]"
      >
        {label}
        {required && (
          <span className="text-[var(--color-accent)] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError?: boolean) =>
  cn(
    // text-base (16px) prevents iOS Safari auto-zoom on focus
    "w-full px-4 py-3 rounded-lg border text-base text-[var(--color-text)] bg-white placeholder:text-[var(--color-text-faint)] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]",
    hasError
      ? "border-red-400 focus:ring-red-200"
      : "border-[var(--color-border)] hover:border-[var(--color-border-2)]",
  );

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      sessionType: undefined,
      experienceLevel: undefined,
    },
  });

  const onSubmit = (data: BookingSchema) => {
    setSubmitting(true);

    const sessionLabels: Record<string, string> = {
      group: "Group Yoga Class",
      personal: "Personal Home Visit",
      other: "Other / Not Sure",
    };
    const levelLabels: Record<string, string> = {
      beginner: "Complete Beginner",
      some: "Some Experience",
      intermediate: "Intermediate",
      advanced: "Advanced",
    };

    const lines = [
      "🙏 *New Session Request*",
      "",
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      `*Session:* ${sessionLabels[data.sessionType] ?? data.sessionType}`,
      `*Level:* ${levelLabels[data.experienceLevel] ?? data.experienceLevel}`,
      ...(data.preferredDate ? [`*Date:* ${data.preferredDate}`] : []),
      ...(data.preferredTime ? [`*Time:* ${data.preferredTime}`] : []),
      ...(data.message ? ["", `*Message:* ${data.message}`] : []),
    ];

    const url = buildWhatsAppUrl(
      siteConfig.contact.whatsapp,
      lines.join("\n"),
    );

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
    setSubmitting(false);
  };

  const whatsappUrl = buildWhatsAppUrl(siteConfig.contact.whatsapp);
  const callUrl = buildCallUrl(siteConfig.contact.phone);

  return (
    <section
      id="contact"
      className="section bg-[var(--color-bg)] scroll-mt-20 "
      aria-label="Book a session or get in touch"
    >
      <div className="ys-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <div className="reveal">
            <SectionHeader
              label="Get in Touch"
              title="Ready to start your practice?"
              subtitle="Fill in the form and Arti will get back to you to discuss your goals and find the best session for you."
            />

            <div className="mt-10 space-y-3">
              {siteConfig.contact.whatsapp && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[#25D366] hover:shadow-md transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                  aria-label="Chat with Arti on WhatsApp"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/12 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/22 transition-colors">
                    <IconWhatsApp size={22} className="text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[var(--color-text)]">
                      WhatsApp Arti
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                      Quick response via WhatsApp
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-border-2)] group-hover:text-[#25D366] transition-colors flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              )}

              {siteConfig.contact.phone && (
                <a
                  href={callUrl}
                  className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                  aria-label={`Call Arti at ${siteConfig.contact.phone}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/18 transition-colors">
                    <IconPhone
                      size={22}
                      className="text-[var(--color-primary)]"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[var(--color-text)]">
                      Call Arti
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-border-2)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              )}

              {!siteConfig.contact.whatsapp && !siteConfig.contact.phone && (
                <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Contact details will be available soon. Please use the form
                    to send an inquiry.
                  </p>
                </div>
              )}
            </div>

            {/* Location note */}
            <div className="mt-6 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-4">
                Where Are Classes Held?
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed">
                    <strong className="text-[var(--color-text)] font-semibold">
                      Group Classes
                    </strong>{" "}
                    — Location shared after registration, based on the batch and
                    schedule.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed">
                    <strong className="text-[var(--color-text)] font-semibold">
                      Personal Sessions
                    </strong>{" "}
                    — Arti visits your home. Available in selected areas.
                  </p>
                </div>
                {siteConfig.serviceAreas.length > 0 && (
                  <div className="pt-3 mt-1 border-t border-[var(--color-border)]">
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Currently serving:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {siteConfig.serviceAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 text-xs font-medium bg-white border border-[var(--color-border)] rounded-full text-[var(--color-text-2)]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-5">
                  <IconCheck
                    size={28}
                    className="text-[var(--color-primary)]"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)] mb-3">
                  Request Received!
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
                  Thank you! Your request has been received. Arti will get in
                  touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[var(--color-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-white rounded-xl border border-[var(--color-border)] shadow-md p-8 space-y-5"
                aria-label="Session booking form"
              >
                <div className="pb-4 border-b border-[var(--color-border)]">
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">
                    Request a Session
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1.5">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Your Name"
                    id="name"
                    required
                    error={errors.name?.message}
                  >
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClass(!!errors.name)}
                      {...register("name")}
                    />
                  </Field>

                  <Field
                    label="Phone Number"
                    id="phone"
                    required
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 92438 63365"
                      className={inputClass(!!errors.phone)}
                      {...register("phone")}
                    />
                  </Field>
                </div>

                <Field
                  label="Email Address"
                  id="email"
                  required
                  error={errors.email?.message}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className={inputClass(!!errors.email)}
                    {...register("email")}
                  />
                </Field>

                <Field
                  label="Session Type"
                  id="sessionType"
                  required
                  error={errors.sessionType?.message}
                >
                  <select
                    id="sessionType"
                    className={inputClass(!!errors.sessionType)}
                    {...register("sessionType")}
                  >
                    <option value="" disabled>
                      Select a session type
                    </option>
                    <option value="group">Group Yoga Class</option>
                    <option value="personal">Personal Home Visit</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </Field>

                <Field
                  label="Your Experience Level"
                  id="experienceLevel"
                  required
                  error={errors.experienceLevel?.message}
                >
                  <select
                    id="experienceLevel"
                    className={inputClass(!!errors.experienceLevel)}
                    {...register("experienceLevel")}
                  >
                    <option value="" disabled>
                      Select your experience
                    </option>
                    <option value="beginner">
                      Complete Beginner — never done yoga
                    </option>
                    <option value="some">
                      Some Experience — tried a few classes
                    </option>
                    <option value="intermediate">
                      Intermediate — practice regularly
                    </option>
                    <option value="advanced">
                      Advanced — experienced practitioner
                    </option>
                  </select>
                </Field>

                <details className="group">
                  <summary className="text-sm font-medium text-[var(--color-text-muted)] cursor-pointer select-none list-none flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors py-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-open:rotate-90"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Add preferred date &amp; time (optional)
                  </summary>
                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                        <Field
                          label="Preferred Date"
                          id="preferredDate"
                          error={errors.preferredDate?.message}
                        >
                          <input
                            id="preferredDate"
                            type="date"
                            className={inputClass(!!errors.preferredDate)}
                            {...register("preferredDate")}
                          />
                        </Field>
                        <Field
                          label="Preferred Time"
                          id="preferredTime"
                          error={errors.preferredTime?.message}
                        >
                          <input
                            id="preferredTime"
                            type="time"
                            className={inputClass(!!errors.preferredTime)}
                            {...register("preferredTime")}
                          />
                        </Field>
                      </div>
                    </div>
                  </div>
                </details>

                <Field
                  label="Message"
                  id="message"
                  error={errors.message?.message}
                >
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Any specific goals, questions or requirements..."
                    className={cn(inputClass(!!errors.message), "resize-none")}
                    {...register("message")}
                  />
                </Field>

<Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Request a Session"}
                </Button>

                <p className="text-xs text-center text-[var(--color-text-faint)] leading-relaxed">
                  🔒 Your information is kept private and will only be used to
                  respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

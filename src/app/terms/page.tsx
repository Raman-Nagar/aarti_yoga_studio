import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Arti Yoga Studio — please read before using our website or booking a session.",
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Arti Yoga Studio website (${siteConfig.url}), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.`,
  },
  {
    title: "Services Offered",
    content: `Arti Yoga Studio offers the following services:

• Group yoga classes held at selected locations in Indore
• Personal one-on-one home-visit yoga sessions
• Online yoga classes (coming soon)

All services are subject to availability and may be modified or discontinued at any time.`,
  },
  {
    title: "Booking and Payments",
    content: `Session bookings are made through the contact form on this website or directly via WhatsApp. A booking is confirmed only after direct confirmation from Arti.

Payment terms, session fees and cancellation policies are communicated directly at the time of booking. We reserve the right to update pricing at any time.`,
  },
  {
    title: "Health and Safety",
    content: `Yoga is a physical activity. By booking a session, you confirm that:

• You are physically capable of participating in yoga activities
• You have disclosed any relevant medical conditions, injuries or limitations to Arti before the session
• You understand that yoga involves physical movement and accept the associated risks
• You will inform Arti immediately if you experience pain or discomfort during a session

Arti Yoga Studio is not liable for any injury that occurs as a result of failure to disclose medical conditions or failure to follow instructor guidance.`,
  },
  {
    title: "Cancellation Policy",
    content: `Please provide at least 24 hours notice if you need to cancel or reschedule a session. Late cancellations or no-shows may result in the session being charged. Specific cancellation terms are communicated at the time of booking.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, images, videos, logos and design — is the property of Arti Yoga Studio and is protected by applicable copyright laws. You may not reproduce, distribute or use any content from this website without prior written permission.`,
  },
  {
    title: "Third-Party Links and Embeds",
    content: `This website contains links to and embeds from third-party platforms including YouTube, Instagram and WhatsApp. We are not responsible for the content, privacy practices or terms of these external platforms.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `This website and its content are provided on an "as is" basis without warranties of any kind. We do not guarantee that the website will be error-free, uninterrupted or free of viruses or other harmful components.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, Arti Yoga Studio shall not be liable for any indirect, incidental, special or consequential damages arising from your use of this website or our services.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of the courts in Indore, Madhya Pradesh, India.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "Contact",
    content: `For any questions regarding these Terms of Service, please contact us:

Email: ${siteConfig.contact.email}
Phone: ${siteConfig.contact.phone}
Website: ${siteConfig.url}`,
  },
];

export default function Terms() {
  const lastUpdated = "September 2026";

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="ys-container py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </Link>
          <p className="section-label mb-3">Legal</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
            Terms of Service
          </h1>
          <p className="text-[var(--color-text-muted)] mt-2 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="ys-container py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-[var(--color-text-2)] leading-relaxed mb-10">
            Please read these Terms of Service carefully before using the Arti Yoga Studio website or booking any sessions. These terms govern your use of our website and services.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-semibold text-[var(--color-text)] mb-3">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-[var(--color-text-2)] leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <Link
              href="/"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              ← Return to Arti Yoga Studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

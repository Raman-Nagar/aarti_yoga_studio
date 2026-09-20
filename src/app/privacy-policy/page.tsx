import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Arti Yoga Studio — how we collect, use and protect your personal information.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Information We Collect",
    content: `When you use our website or fill out the booking form, we may collect the following information:
    
• Your name, phone number and email address
• Your preferred session type and experience level
• Any message or notes you provide
• Basic usage data such as pages visited and time spent on the site (via analytics tools)`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information you provide solely to:

• Respond to your session booking requests
• Contact you to confirm appointments and share session details
• Send you relevant updates about classes, schedules or offers (only if you have opted in)
• Improve our website and services

We do not sell, rent or share your personal information with any third party for marketing purposes.`,
  },
  {
    title: "WhatsApp Communication",
    content: `When you submit the booking form, your information is sent directly to Arti via WhatsApp. By submitting the form, you consent to being contacted on WhatsApp at the number you provide. Standard WhatsApp privacy policies apply to messages sent through their platform.`,
  },
  {
    title: "Cookies and Analytics",
    content: `Our website may use cookies and third-party analytics tools (such as Google Analytics) to understand how visitors use the site. These tools collect anonymised data including pages visited, time on site and general location. You can disable cookies in your browser settings at any time.

We also use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalised advertising by visiting Google's Ads Settings.`,
  },
  {
    title: "Third-Party Services",
    content: `Our website embeds content from third-party platforms including:

• YouTube (video embeds) — governed by Google's Privacy Policy
• Instagram (reel embeds) — governed by Meta's Privacy Policy
• WhatsApp (booking and contact) — governed by Meta's Privacy Policy

We are not responsible for the privacy practices of these third-party services.`,
  },
  {
    title: "Data Security",
    content: `We take reasonable precautions to protect your personal information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of data transmitted to us.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:

• Request access to the personal information we hold about you
• Request correction or deletion of your personal information
• Withdraw consent for us to contact you at any time

To exercise any of these rights, please contact us at ${siteConfig.contact.email}`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us:

Email: ${siteConfig.contact.email}
Phone: ${siteConfig.contact.phone}
Website: ${siteConfig.url}`,
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            At Arti Yoga Studio, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use and safeguard your personal information when you visit our website at{" "}
            <a href={siteConfig.url} className="text-[var(--color-primary)] hover:underline">
              {siteConfig.url}
            </a>{" "}
            or interact with us through our booking form.
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

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  IconInstagram,
  IconYouTube,
  IconFacebook,
  IconWhatsApp,
} from "@/components/ui/Icons";
import { buildWhatsAppUrl } from "@/lib/utils";

const footerLinks = [
  { label: "About Arti", href: "#about" },
  { label: "Group Classes", href: "#services" },
  { label: "Personal Sessions", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: IconInstagram,
    show: !!siteConfig.social.instagram,
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: IconYouTube,
    show: !!siteConfig.social.youtube,
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: IconFacebook,
    show: !!siteConfig.social.facebook,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(siteConfig.contact.whatsapp);

  return (
    <footer
      className="bg-[var(--color-text)] text-[var(--color-text-faint)]"
      aria-label="Site footer"
    >
      <div className="ys-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col leading-none mb-4 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
              aria-label="Arti Yoga Studio — Home"
            >
              <span
                className="font-display text-2xl font-semibold text-white"
              >
                Arti
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/50 mt-0.5">
                Yoga Studio
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-[240px]">
              Personalized yoga guidance and group classes designed to help you
              move better, breathe deeper and feel more balanced.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks
                .filter((s) => s.show)
                .map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.label}`}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <social.icon size={16} />
                  </Link>
                ))}
              {siteConfig.contact.whatsapp && (
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#25D366] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                >
                  <IconWhatsApp size={16} />
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.12em] uppercase text-white/40 mb-5"
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.12em] uppercase text-white/40 mb-5"
            >
              Get in Touch
            </h3>
            <div className="space-y-3">
              {siteConfig.contact.email && (
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block text-sm text-white/50 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded-sm"
                >
                  {siteConfig.contact.email}
                </Link>
              )}
              {siteConfig.contact.phone && (
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="block text-sm text-white/50 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded-sm"
                >
                  {siteConfig.contact.phone}
                </Link>
              )}
              {siteConfig.social.instagram && (
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/50 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded-sm"
                >
                  Instagram: {siteConfig.social.instagramHandle}
                </Link>
              )}
              {!siteConfig.contact.email &&
                !siteConfig.contact.phone && (
                  <p className="text-sm text-white/30 italic">
                    Contact details coming soon
                  </p>
                )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} Arti Yoga Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Yoga with Arti — Group Classes & Personal Sessions
          </p>
        </div>
      </div>
    </footer>
  );
}

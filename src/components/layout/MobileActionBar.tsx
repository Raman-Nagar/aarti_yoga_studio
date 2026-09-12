"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconWhatsApp } from "@/components/ui/Icons";
import { buildWhatsAppUrl } from "@/lib/utils";

export function MobileActionBar() {
  const whatsappUrl = buildWhatsAppUrl(siteConfig.contact.whatsapp);
  const hasWhatsApp = !!siteConfig.contact.whatsapp;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      aria-label="Quick actions"
    >
      {/* Safe area padding for iOS */}
      <div className="bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg pb-safe-area">
        <div className="flex items-stretch h-14">
          {hasWhatsApp ? (
            <>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1ebe5d] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                aria-label="Chat with Arti on WhatsApp"
              >
                <IconWhatsApp size={18} />
                <span>WhatsApp</span>
              </Link>
              <div className="w-px bg-white/20" aria-hidden="true" />
              <Link
                href="#contact"
                className="flex-1 flex items-center justify-center bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                aria-label="Book a yoga session"
              >
                Book Session
              </Link>
            </>
          ) : (
            <Link
              href="#contact"
              className="flex-1 flex items-center justify-center bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
              aria-label="Book a yoga session"
            >
              Book a Session
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

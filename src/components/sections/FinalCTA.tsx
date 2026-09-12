import { Button } from "@/components/ui/Button";
import { IconWhatsApp } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(siteConfig.contact.whatsapp);

  return (
    <section
      className="relative bg-[var(--color-primary)] overflow-hidden"
      aria-label="Start your yoga journey"
    >
      {/* Subtle top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="ys-container relative z-10 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
            Begin Your Practice
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-tight mb-6">
            Start where you are.
            <br />
            <span className="text-white/70">Practice with Arti.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md mx-auto">
            Whether you are a complete beginner or returning to your practice, Arti will meet you exactly where you are.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-white/90 font-semibold"
            >
              Book a Session
            </Button>

            {siteConfig.contact.whatsapp && (
              <Button
                href={whatsappUrl}
                variant="ghost"
                size="lg"
                external
                className="text-white hover:bg-white/10 flex items-center gap-2 border border-white/20"
              >
                <IconWhatsApp size={18} />
                WhatsApp Arti
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { reels } from "@/data/reels";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconInstagram, IconPlay } from "@/components/ui/Icons";

function ReelCard({ reel }: { reel: (typeof reels)[0] }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `https://www.instagram.com/reel/${reel.reelId}/embed/`;
  const thumbUrl = `https://www.instagram.com/p/${reel.reelId}/media/?size=l`;

  return (
    <div className="rounded-xl overflow-hidden bg-[var(--color-surface-2)] border border-[var(--color-border)]">
      <div className="aspect-[9/16] relative">
        {playing ? (
          <iframe
            src={embedUrl}
            title={`Instagram Reel`}
            allowFullScreen
            scrolling="no"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            aria-label="Play Instagram Reel"
          >
            {/* Instagram embed as static preview */}
            <iframe
              src={`${embedUrl}?cr=1&v=14&wp=320&rd=https%3A%2F%2Fartiyogastudio.com`}
              title="Reel preview"
              scrolling="no"
              className="absolute inset-0 w-full h-full pointer-events-none"
              loading="lazy"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <IconPlay size={20} className="text-[var(--color-primary)] ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="section bg-[var(--color-surface)] scroll-mt-20"
      aria-label="Follow on Instagram"
    >
      <div className="ys-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            label="Follow Along"
            title="Yoga reels from Arti's practice."
            subtitle="Short, practical yoga content posted regularly on Instagram."
          />
          <Button
            href={siteConfig.social.instagram}
            variant="outline"
            size="md"
            external
            className="flex-shrink-0 flex items-center gap-2"
          >
            <IconInstagram size={16} />
            Follow {siteConfig.social.instagramHandle}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel) => (
            <div key={reel.id} className="reveal">
              <ReelCard reel={reel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

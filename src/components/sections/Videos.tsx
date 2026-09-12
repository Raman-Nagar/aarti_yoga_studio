"use client";

import { useState } from "react";
import Image from "next/image";
import { videos } from "@/data/videos";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconPlay, IconYouTube } from "@/components/ui/Icons";

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const [playing, setPlaying] = useState(false);
  const [thumbQuality, setThumbQuality] = useState<"maxresdefault" | "hqdefault">("maxresdefault");
  const hasVideo = !!video.youtubeId;

  if (!hasVideo) {
    return (
      <div className="rounded-xl overflow-hidden bg-[var(--color-surface-2)] border border-[var(--color-border)]">
        <div className="aspect-video flex flex-col items-center justify-center gap-2 bg-[var(--color-surface-2)]">
          <div className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center">
            <IconPlay size={14} className="text-[var(--color-text-faint)] ml-0.5" />
          </div>
          <p className="text-[11px] text-[var(--color-text-faint)] tracking-wide uppercase font-medium">
            Coming Soon
          </p>
        </div>
        <div className="px-4 py-3 border-t border-[var(--color-border)]">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            {video.title}
          </p>
          {video.description && (
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              {video.description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden bg-[var(--color-surface-2)] border border-[var(--color-border)]">
      <div className="aspect-video relative">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${video.youtubeId}/${thumbQuality}.jpg`}
              alt={`Thumbnail for ${video.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={() => setThumbQuality("hqdefault")}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <IconPlay size={20} className="text-[var(--color-primary)] ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-[var(--color-text)]">
          {video.title}
        </p>
        {video.description && (
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function Videos() {
  const hasYouTube = !!siteConfig.social.youtube;
  const configuredVideos = videos.filter((v) => !!v.youtubeId);
  const hasVideos = configuredVideos.length > 0;

  // Don't render the section if there's no content at all
  if (!hasVideos && !hasYouTube) return null;

  return (
    <section
      id="videos"
      className="section bg-[var(--color-surface)] scroll-mt-20"
      aria-label="Yoga videos"
    >
      <div className="ys-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            label="Practice With Arti"
            title="Yoga videos to guide your practice."
            subtitle="Watch selected videos from Arti's YouTube channel."
          />
          {hasYouTube && (
            <Button
              href={siteConfig.social.youtube}
              variant="outline"
              size="md"
              external
              className="flex-shrink-0 flex items-center gap-2"
            >
              <IconYouTube size={16} />
              Watch More on YouTube
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {configuredVideos.map((video) => (
            <div key={video.id} className="reveal">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

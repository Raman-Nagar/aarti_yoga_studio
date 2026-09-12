import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Detect whether real images are available (not placeholder paths)
const realImages = galleryImages.filter(
  (img) => !img.src.includes("/placeholder/")
);
const hasRealImages = realImages.length > 0;

const rowSpans = [2, 1, 1, 1, 2, 1];

export function Gallery() {
  if (!hasRealImages) {
    return (
      <section
        id="gallery"
        className="section bg-[var(--color-bg)] scroll-mt-20"
        aria-label="Photo gallery"
      >
        <div className="ys-container">
          <div className="reveal max-w-lg mx-auto text-center">
            <p className="section-label-center mb-4">Gallery</p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[var(--color-text)] leading-tight mb-4">
              From the practice.
            </h2>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
              Photographs from Arti&apos;s classes and sessions will be shared here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="section bg-[var(--color-bg)] scroll-mt-20"
      aria-label="Photo gallery"
    >
      <div className="ys-container">
        <SectionHeader
          label="Gallery"
          title="From the practice."
          subtitle="A glimpse into Arti's classes and sessions."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 gallery-grid">
          {realImages.map((image, index) => (
            <div
              key={image.id}
              className="reveal rounded-xl overflow-hidden bg-[var(--color-surface-2)] border border-[var(--color-border)]"
              style={{ minHeight: "160px" }}
              data-span={rowSpans[index % rowSpans.length]}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .gallery-grid { grid-auto-rows: 180px; }
          .gallery-grid > [data-span="2"] { grid-row: span 2; }
          .gallery-grid > [data-span="1"] { grid-row: span 1; }
        }
      `}</style>
    </section>
  );
}

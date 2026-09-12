import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";

const realImages = galleryImages.filter(
  (img) => !img.src.includes("/placeholder/")
);
const hasRealImages = realImages.length > 0;

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

  // Split images into 3 columns for masonry layout
  const col1 = realImages.filter((_, i) => i % 3 === 0);
  const col2 = realImages.filter((_, i) => i % 3 === 1);
  const col3 = realImages.filter((_, i) => i % 3 === 2);

  const GalleryImage = ({ image, index }: { image: (typeof realImages)[0]; index: number }) => {
    const isPortrait = image.height > image.width;
    return (
      <div
        className="reveal group relative rounded-2xl overflow-hidden bg-[var(--color-surface-2)] shadow-sm hover:shadow-lg transition-shadow duration-300"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/8 transition-colors duration-300 rounded-2xl" />
      </div>
    );
  };

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

        {/* Desktop: 3-column masonry | Mobile: 2-column masonry */}
        <div className="hidden md:grid grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-4">
            {col1.map((img, i) => <GalleryImage key={img.id} image={img} index={i * 3} />)}
          </div>
          <div className="flex flex-col gap-4 mt-8">
            {col2.map((img, i) => <GalleryImage key={img.id} image={img} index={i * 3 + 1} />)}
          </div>
          <div className="flex flex-col gap-4">
            {col3.map((img, i) => <GalleryImage key={img.id} image={img} index={i * 3 + 2} />)}
          </div>
        </div>

        {/* Mobile: 2-column masonry */}
        <div className="grid md:hidden grid-cols-2 gap-3 items-start">
          <div className="flex flex-col gap-3">
            {realImages.filter((_, i) => i % 2 === 0).map((img, i) => (
              <GalleryImage key={img.id} image={img} index={i * 2} />
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-6">
            {realImages.filter((_, i) => i % 2 === 1).map((img, i) => (
              <GalleryImage key={img.id} image={img} index={i * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Video } from 'lucide-react';

type GalleryItem =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; label: string };

const items: GalleryItem[] = [
  { kind: 'image', src: '/images/buntu.jpg',   alt: 'Paving work' },
  { kind: 'image', src: '/images/buntu1.jpg',  alt: 'Project site 1' },
  { kind: 'image', src: '/images/buntu2.jpg',  alt: 'Project site 2' },
  { kind: 'image', src: '/images/buntu3.jpg',  alt: 'Project site 3' },
  { kind: 'image', src: '/images/buntu4.jpg',  alt: 'Welding project' },
  { kind: 'image', src: '/images/buntu5.jpg',  alt: 'Kitchen design' },
  { kind: 'image', src: '/images/buntu6.jpg',  alt: 'Project site 6' },
  { kind: 'image', src: '/images/buntu7.jpg',  alt: 'Project site 7' },
  { kind: 'image', src: '/images/buntu8.jpg',  alt: 'Drywall work' },
  { kind: 'image', src: '/images/buntu9.jpg',  alt: 'Tile fixing' },
  { kind: 'image', src: '/images/buntu10.jpg', alt: 'Spray painting' },
  { kind: 'image', src: '/images/buntu11.jpg', alt: 'Spray painting 2' },
  { kind: 'image', src: '/images/bu.jpg',      alt: 'Roof work' },
  { kind: 'video', src: '/videos/buvid2.mov',  label: 'Site Video 1' },
  { kind: 'video', src: '/videos/buvid3.mov',  label: 'Site Video 2' },
];

// Only image items can open in the lightbox
const imageItems = items.filter((i): i is Extract<GalleryItem, { kind: 'image' }> => i.kind === 'image');

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (imgIndex: number) => {
    setLightboxIndex(imgIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % imageItems.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + imageItems.length) % imageItems.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % imageItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + imageItems.length) % imageItems.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  // Track per-image index for lightbox
  let imgCounter = -1;

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Our Recent Work
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of our craftsmanship across residential and commercial projects in Johannesburg.
          </p>
        </motion.div>

        {/* Uniform grid — every cell is the same size */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((item, index) => {
            if (item.kind === 'image') {
              imgCounter++;
              const currentImg = imgCounter;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm"
                  onClick={() => openLightbox(currentImg)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                </motion.div>
              );
            }

            // Video item
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
                className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-sm"
              >
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                  aria-label={item.label}
                />
                {/* Placeholder shown when video file is absent */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-900/80 text-white/60">
                  <Video className="h-10 w-10" />
                  <span className="text-xs font-medium tracking-wide uppercase">{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox — images only */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black sm:right-8 sm:top-8"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.img
              key={lightboxIndex}
              src={imageItems[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              alt={imageItems[lightboxIndex].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-sm object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={next}
              className="absolute right-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-white hover:text-black sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-medium text-white/80">
              {lightboxIndex + 1} / {imageItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

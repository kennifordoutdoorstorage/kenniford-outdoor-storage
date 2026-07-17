"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const photos = [
  { src: "/photos/img_2941.jpg", alt: "Wide view of the Kenniford Outdoor Storage site with hardstanding pitches", featured: true },
  { src: "/photos/img_2944.jpg", alt: "Row of caravans lined up along the oak-tree perimeter" },
  { src: "/photos/img_2942.jpg", alt: "Entrance to the site with automatic gate and warning signage" },
  { src: "/photos/img_2946.jpg", alt: "Storage site under a clear blue sky, oak trees at the perimeter" },
  { src: "/photos/img_2945.jpg", alt: "Row of caravans on hardstanding pitches" },
  { src: "/photos/img_2943.jpg", alt: "View down the site access track" },
  { src: "/photos/img_2939.jpg", alt: "Caravan pitched on hardstanding beneath a mature oak tree" },
  { src: "/photos/img_2940.jpg", alt: "Access track and hardstanding pitches with wide open sky" },
  { src: "/photos/img_2947.jpg", alt: "Automatic gate entry with signage — key fob required" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    // Prevent background scroll while lightbox is open.
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <section id="gallery" className="border-t border-[var(--border)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
              The site
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              A look around Kenniford.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
              Photos from the site — the hardstanding pitches, the automatic gates,
              and the setting we call home. Tap any photo to enlarge.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Enlarge photo: ${photo.alt}`}
                className={`group relative overflow-hidden rounded-2xl bg-[var(--logo-bg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-[var(--foreground)]/0 transition-colors group-hover:bg-[var(--foreground)]/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          photo={photos[activeIndex]}
          index={activeIndex}
          total={photos.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  photo: (typeof photos)[number];
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-white">
        <span className="text-sm">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="relative h-full w-full max-w-5xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <p className="p-4 text-center text-sm text-white/70">{photo.alt}</p>
    </div>
  );
}

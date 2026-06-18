"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { ProjectGalleryImage } from "@/features/projects/project-detail.types";

type Props = { gallery: ProjectGalleryImage[] };

export function ProjectGallery({ gallery }: Props) {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;

  const prev = useCallback(() => {
    setStartIdx((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setStartIdx((i) => Math.min(gallery.length - visibleCount, i + 1));
  }, [gallery.length]);

  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="section-title text-2xl font-black text-[#061B3A] sm:text-3xl">
            Hình ảnh thực tế và phối cảnh
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={startIdx === 0}
              aria-label="Lùi về trước"
              className="grid size-10 place-items-center rounded-full border border-[#E8DDC8] bg-white text-[#061B3A] transition hover:border-[#C89B3C] hover:text-[#C89B3C] disabled:opacity-40"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={startIdx >= gallery.length - visibleCount}
              aria-label="Tiếp theo"
              className="grid size-10 place-items-center rounded-full border border-[#E8DDC8] bg-white text-[#061B3A] transition hover:border-[#C89B3C] hover:text-[#C89B3C] disabled:opacity-40"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <Reveal>
          <div className="no-scrollbar flex gap-4 overflow-x-auto lg:overflow-hidden">
            {gallery.slice(startIdx, startIdx + visibleCount).map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] w-[280px] shrink-0 overflow-hidden rounded-[18px] shadow-[0_4px_16px_rgba(6,27,58,0.06)] lg:w-auto lg:flex-1"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 280px, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

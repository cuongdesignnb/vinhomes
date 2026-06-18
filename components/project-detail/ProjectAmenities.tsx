"use client";

import Image from "next/image";
import { TreePine, Waves, GraduationCap, ShoppingBag, Droplets, Dumbbell } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import type { ProjectAmenity } from "@/features/projects/project-detail.types";

const iconMap: Record<string, React.ElementType> = {
  TreePine, Waves, GraduationCap, ShoppingBag, Droplets, Dumbbell,
};

type Props = { amenities: ProjectAmenity[] };

export function ProjectAmenities({ amenities }: Props) {
  return (
    <section id="tien-ich" className="scroll-mt-28 bg-[#FAF8F3] py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Hệ tiện ích chuẩn sống Vinhomes
        </h2>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => {
            const Icon = amenity.icon ? iconMap[amenity.icon] : TreePine;
            return (
              <StaggerItem key={amenity.id}>
                <div className="group relative overflow-hidden rounded-[18px] shadow-[0_4px_20px_rgba(6,27,58,0.06)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2.5 p-4">
                    {Icon && (
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#C89B3C]/90 text-white">
                        <Icon className="size-4.5" aria-hidden />
                      </div>
                    )}
                    <h3 className="text-sm font-bold text-white">{amenity.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

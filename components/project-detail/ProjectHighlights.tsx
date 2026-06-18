"use client";

import { MapPin, Star, Users, TrendingUp } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import type { ProjectHighlight } from "@/features/projects/project-detail.types";

const iconMap: Record<string, React.ElementType> = { MapPin, Star, Users, TrendingUp };

type Props = { highlights: ProjectHighlight[] };

export function ProjectHighlights({ highlights }: Props) {
  return (
    <section className="bg-[#FAF8F3] py-12 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => {
            const Icon = h.icon ? iconMap[h.icon] : Star;
            return (
              <StaggerItem key={h.id}>
                <div className="group rounded-[18px] border border-[#E8DDC8] bg-white p-5 shadow-[0_4px_16px_rgba(6,27,58,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(6,27,58,0.10)]">
                  <div className="grid size-11 place-items-center rounded-xl bg-[#F8F5EF] text-[#C89B3C]">
                    {Icon && <Icon className="size-5" aria-hidden />}
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-[#061B3A]">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#65758B]">{h.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

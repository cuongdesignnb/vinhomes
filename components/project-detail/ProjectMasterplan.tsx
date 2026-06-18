import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { ProjectDetail } from "@/features/projects/project-detail.types";

type Props = { project: ProjectDetail };

export function ProjectMasterplan({ project }: Props) {
  return (
    <section id="mat-bang" className="scroll-mt-28 bg-[#FAF8F3] py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Mặt bằng tổng thể
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Masterplan image + legend */}
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(6,27,58,0.10)]">
              <Image
                src={project.masterplanImage}
                alt={project.masterplanImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              {/* Legend markers on image */}
              {project.masterplanLegend.slice(0, 5).map((_, idx) => {
                const positions = [
                  "top-[20%] left-[25%]",
                  "top-[15%] left-[55%]",
                  "top-[50%] left-[40%]",
                  "top-[40%] left-[70%]",
                  "top-[65%] left-[30%]",
                ];
                return (
                  <div
                    key={idx}
                    className={`absolute ${positions[idx]} grid size-8 place-items-center rounded-full bg-[#C89B3C] text-sm font-black text-white shadow-lg`}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>

            {/* Legend list */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {project.masterplanLegend.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg border border-[#E8DDC8] bg-white px-3 py-2"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#C89B3C] text-xs font-black text-white">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-medium text-[#10233F]">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Typical layout card */}
          <Reveal delay={0.15}>
            <div className="rounded-[20px] border border-[#E8DDC8] bg-white overflow-hidden shadow-[0_4px_20px_rgba(6,27,58,0.06)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.typicalLayoutImage}
                  alt={project.typicalLayoutAlt}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#061B3A]">Mặt bằng điển hình</h3>
                <p className="mt-1 text-sm text-[#65758B]">Layout căn hộ 2PN + 1</p>
                <button
                  type="button"
                  className="mt-3 flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition hover:text-[#061B3A]"
                >
                  Xem chi tiết
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

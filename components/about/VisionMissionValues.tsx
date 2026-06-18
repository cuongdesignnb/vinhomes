import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { visionMissionValues } from "@/data/about";
import { Gem, Target, Telescope } from "lucide-react";

const icons = { telescope: Telescope, target: Target, gem: Gem };

export function VisionMissionValues() {
  return (
    <section className="bg-[#FAF8F3] py-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Tầm nhìn, sứ mệnh & giá trị cốt lõi" />
        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {visionMissionValues.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-[0_10px_30px_rgba(6,27,58,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,27,58,0.1)]">
                  <Icon aria-hidden className="size-14 text-[#C89B3C]" />
                  <h3 className="mt-4 text-xl font-black text-[#061B3A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65758B]">{item.description}</p>
                  {item.chips ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-[#E8DDC8] bg-[#FAF8F3] px-3 py-1 text-xs font-bold text-[#65758B]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

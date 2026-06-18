import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { achievementStats } from "@/data/about";
import { Award, Building2, Trophy, Users } from "lucide-react";

const icons = [Building2, Award, Users, Trophy];

export function AchievementStats() {
  return (
    <section className="bg-[#FAF8F3] py-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Dấu ấn nổi bật" />
        <Stagger className="mt-8 grid overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_12px_34px_rgba(6,27,58,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={stat.label}>
                <div className={`flex items-center gap-4 p-6 ${index > 0 ? "border-t border-[#E8DDC8] sm:border-l sm:border-t-0" : ""}`}>
                  <span className="grid size-14 place-items-center rounded-full border border-[#E8DDC8] bg-[#FAF8F3] text-[#C89B3C]">
                    <Icon aria-hidden className="size-7" />
                  </span>
                  <span>
                    <strong className="block text-2xl font-black text-[#061B3A]">{stat.value}</strong>
                    <span className="text-sm font-medium text-[#65758B]">{stat.label}</span>
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

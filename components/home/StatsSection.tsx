import { Reveal } from "@/components/site/Reveal";
import { Building2, MapPinned, Users } from "lucide-react";

const stats = [
  { icon: MapPinned, value: "30+", label: "Dự án trên toàn quốc" },
  { icon: Building2, value: "10.000+", label: "Sản phẩm đa dạng" },
  { icon: Users, value: "200+", label: "Chuyên viên tư vấn" },
];

export function StatsSection() {
  return (
    <section className="relative z-10 bg-[#FAF8F3] px-4 pb-8 sm:px-6">
      <Reveal className="mx-auto -mt-1 max-w-[980px]">
        <div className="grid overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_18px_55px_rgba(6,27,58,0.08)] sm:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-4 px-6 py-6 ${
                  index > 0 ? "border-t border-[#E8DDC8] sm:border-l sm:border-t-0" : ""
                }`}
              >
                <span className="grid size-12 place-items-center rounded-full border border-[#E8DDC8] bg-[#FAF8F3] text-[#C89B3C]">
                  <Icon aria-hidden className="size-6" />
                </span>
                <span>
                  <strong className="block text-3xl font-black text-[#061B3A]">{stat.value}</strong>
                  <span className="text-sm font-medium text-[#65758B]">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

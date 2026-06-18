import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Compass, MapPin, Route, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

const points = [
  {
    icon: MapPin,
    title: "Vị trí chiến lược",
    text: "Kết nối thuận tiện đến trung tâm và các khu vực trọng điểm.",
  },
  {
    icon: Route,
    title: "Hạ tầng đồng bộ",
    text: "Hệ thống giao thông, tiện ích và dịch vụ hiện đại.",
  },
  {
    icon: ShieldCheck,
    title: "Cộng đồng văn minh",
    text: "Môi trường sống xanh - sạch - an toàn, chuẩn quốc tế.",
  },
  {
    icon: TrendingUp,
    title: "Tiềm năng tăng giá",
    text: "Gia tăng giá trị bền vững cùng sự phát triển của khu vực.",
  },
];

export function MasterplanSection() {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Quy hoạch & vị trí dự án" align="left" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_18px_48px_rgba(6,27,58,0.1)]">
            <Image
              src="/images/masterplan.jpg"
              alt="Bản đồ quy hoạch vị trí dự án Vinhomes"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            {[
              "left-[24%] top-[32%]",
              "left-[58%] top-[28%]",
              "left-[42%] top-[58%]",
              "left-[78%] top-[52%]",
            ].map((position) => (
              <span
                key={position}
                className={`absolute ${position} grid size-9 place-items-center rounded-full border-2 border-white bg-[#D8B15A] text-[#061B3A] shadow-lg`}
              >
                <MapPin aria-hidden className="size-5" />
              </span>
            ))}
            <button type="button" className="btn-navy absolute bottom-5 left-5 h-11 px-5">
              Xem toàn bộ quy hoạch
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="flex gap-4 rounded-2xl border border-[#E8DDC8] bg-white p-5 shadow-[0_10px_30px_rgba(6,27,58,0.05)]">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#FAF8F3] text-[#C89B3C]">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-black text-[#061B3A]">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#65758B]">{point.text}</p>
                  </div>
                </article>
              );
            })}
            <div className="hidden items-center gap-3 rounded-2xl bg-[#061B3A] p-5 text-white lg:flex">
              <Compass aria-hidden className="size-8 text-[#D8B15A]" />
              <p className="text-sm leading-6 text-white/78">
                Quy hoạch được thiết kế theo trục tiện ích, cảnh quan và khả năng kết nối dài hạn.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

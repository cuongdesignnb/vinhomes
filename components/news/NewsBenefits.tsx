"use client";

import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { BarChart3, ShieldCheck, Users, Zap } from "lucide-react";
import type { ElementType } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Benefit = {
  icon: ElementType;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Thông tin chuẩn xác",
    description:
      "Nguồn tin tin cậy từ Vinhomes, được kiểm chứng rõ ràng.",
  },
  {
    icon: BarChart3,
    title: "Phân tích chuyên sâu",
    description:
      "Góc nhìn chuyên gia, dữ liệu phân tích toàn diện.",
  },
  {
    icon: Zap,
    title: "Cập nhật nhanh",
    description:
      "Tin tức mới nhất về thị trường, dự án và chính sách.",
  },
  {
    icon: Users,
    title: "Tư vấn chuyên gia",
    description:
      "Đội ngũ chuyên gia đồng hành cùng bạn trên hành trình đầu tư.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function NewsBenefits() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-6 text-center shadow-[0_4px_20px_rgba(6,27,58,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,27,58,0.10)]">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#F8F5EF]">
                    <Icon aria-hidden className="size-6 text-[#C89B3C]" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#10233F]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#65758B]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

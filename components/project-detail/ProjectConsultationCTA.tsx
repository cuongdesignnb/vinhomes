"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProjectLeadForm } from "@/components/forms/ProjectLeadForm";

const benefits = [
  "Tư vấn chi tiết, miễn phí 24/7",
  "Bảng giá và chính sách mới nhất",
  "Chọn căn đẹp, ưu đãi tốt nhất",
  "Hỗ trợ tham quan dự án thực tế",
];

export function ProjectConsultationCTA() {
  return (
    <section id="lien-he" className="scroll-mt-28 bg-gradient-to-br from-[#061B3A] via-[#08254D] to-[#03152F] py-14 sm:py-16">
      <Reveal>
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <div className="text-white">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Nhận tư vấn dự án{" "}
              <span className="text-[#D8B15A]">phù hợp ngay hôm nay</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#D8B15A]" aria-hidden />
                  <span className="text-sm leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-[18px] lg:block">
              <Image
                src="/images/projects/detail/cta-city.jpg"
                alt="Tư vấn dự án Vinhomes"
                fill
                sizes="500px"
                className="object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <ProjectLeadForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

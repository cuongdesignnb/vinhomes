"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactMiniLeadForm } from "@/components/forms/ContactMiniLeadForm";

const bullets = [
  "Tư vấn miễn phí, không ràng buộc",
  "Thông tin chính xác từ chủ đầu tư",
  "Hỗ trợ tham quan và chọn căn ưng ý",
];

type Props = { ctaImage: string; ctaImageAlt: string };

export function ContactConsultationCTA({ ctaImage, ctaImageAlt }: Props) {
  return (
    <section className="bg-gradient-to-br from-[#061B3A] via-[#08254D] to-[#03152F] py-14 sm:py-16">
      <Reveal>
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[380px_1fr] lg:gap-14">
          <div className="text-white">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Nhận tư vấn dự án{" "}
              <span className="text-[#D8B15A]">phù hợp ngay hôm nay</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#D8B15A]" aria-hidden />
                  <span className="text-sm leading-relaxed text-white/85">{b}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-[18px] lg:block">
              <Image src={ctaImage} alt={ctaImageAlt} fill sizes="380px" className="object-cover opacity-80" />
            </div>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <ContactMiniLeadForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

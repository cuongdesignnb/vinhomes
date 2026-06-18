import { AboutConsultForm } from "@/components/forms/AboutConsultForm";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

const bullets = [
  "Tư vấn miễn phí 24/7 từ chuyên gia",
  "Thông tin dự án chính xác, minh bạch",
  "Hỗ trợ chọn dự án phù hợp nhu cầu",
  "Cơ hội đầu tư sinh lời bền vững",
];

export function AboutConsultationCTA() {
  return (
    <section id="about-consultation" className="relative overflow-hidden bg-[#061B3A]">
      <Phone aria-hidden className="absolute -right-10 top-8 size-52 text-white/5" />
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 text-white sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="grid gap-6 sm:grid-cols-[220px_1fr] lg:grid-cols-1">
          <div className="relative min-h-[170px] overflow-hidden rounded-2xl border border-[#D8B15A]/40">
            <Image src="/images/about/cta-city.jpg" alt="Skyline Vinhomes" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8B15A]">Tư vấn dự án</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Nhận tư vấn dự án phù hợp ngay hôm nay</h2>
            <ul className="mt-5 grid gap-2 text-sm text-white/82">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-[#D8B15A]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="rounded-2xl border border-white/12 bg-white/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
          <AboutConsultForm />
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchPanel } from "./SearchPanel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-vinhomes-clean.jpg"
          alt="Toàn cảnh đô thị cao cấp Vinhomes bên sông"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.72)_42%,rgba(6,27,58,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[590px] max-w-[1240px] items-center px-4 pb-24 pt-16 sm:px-6 lg:min-h-[620px] lg:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-[#D8B15A]/40 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F3DEAA] backdrop-blur">
              Bất động sản cao cấp
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[64px]">
              Tổng hợp các dự án{" "}
              <span className="block text-[#D8B15A]">Vinhomes đẳng cấp</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Khám phá các dự án căn hộ, biệt thự, shophouse chất lượng cao cùng cơ hội đầu tư sinh lời bền vững.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#du-an" className="btn-gold h-12 px-6">
              Khám phá dự án
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link href="#consultation" className="btn-outline-light h-12 px-6">
              <PhoneCall aria-hidden className="size-4" />
              Nhận tư vấn ngay
            </Link>
          </Reveal>
        </div>
      </div>
      <SearchPanel />
    </section>
  );
}

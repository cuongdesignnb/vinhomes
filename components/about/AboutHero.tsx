import { aboutStats } from "@/data/about";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { ArrowRight, Building2, Home, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const statIcons = [Building2, Home, Users];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      <div className="absolute inset-0">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Đại đô thị Vinhomes về đêm"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,58,0.94)_0%,rgba(6,27,58,0.72)_42%,rgba(6,27,58,0.18)_100%)]" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-4 pb-20 pt-8 sm:px-6 lg:pb-24 lg:pt-10">
        <Reveal>
          <div className="text-sm font-medium text-white/76">
            Trang chủ <span className="mx-2 text-[#D8B15A]">/</span> Giới thiệu
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[56px]">
            Giới thiệu về <span className="text-[#D8B15A]">Vinhomes</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/84">
            Vinhomes là thương hiệu bất động sản hàng đầu Việt Nam, tiên phong kiến tạo những không gian sống đẳng cấp,
            cộng đồng văn minh và giá trị đầu tư bền vững theo thời gian.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/du-an" className="btn-gold h-12 px-6">
              Khám phá dự án
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link href="#about-consultation" className="btn-outline-light h-12 px-6">
              Liên hệ tư vấn
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="relative z-10 mx-auto -mt-11 max-w-[720px] px-4 sm:px-6">
        <Stagger className="grid overflow-hidden rounded-2xl border border-[#D8B15A]/45 bg-[#061B3A]/95 shadow-[0_22px_60px_rgba(6,27,58,0.25)] backdrop-blur sm:grid-cols-3">
          {aboutStats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <StaggerItem key={stat.label}>
                <div className={`flex items-center gap-4 px-6 py-5 text-white ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
                  <span className="grid size-12 place-items-center rounded-full border border-[#D8B15A]/50 text-[#D8B15A]">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span>
                    <strong className="block text-3xl font-black">{stat.value}</strong>
                    <span className="text-sm text-white/76">{stat.label}</span>
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

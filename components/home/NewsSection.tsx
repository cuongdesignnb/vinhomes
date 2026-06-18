import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { newsItems } from "@/data/news";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NewsSection() {
  return (
    <section id="tin-tuc" className="bg-[#FAF8F3] py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Tin tức & phân tích thị trường" />
        <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_12px_34px_rgba(6,27,58,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(6,27,58,0.12)]">
                <Link href={item.href} className="grid h-full sm:grid-cols-[180px_1fr] lg:grid-cols-1">
                  <div className="relative min-h-[190px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs font-bold text-[#65758B]">
                      <span className="rounded-full bg-[#FAF8F3] px-3 py-1 uppercase text-[#C89B3C]">{item.tag}</span>
                      <time dateTime={item.date}>{item.date}</time>
                    </div>
                    <h3 className="mt-3 text-lg font-black leading-snug text-[#061B3A]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#65758B]">{item.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#C89B3C]">
                      Xem chi tiết
                      <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

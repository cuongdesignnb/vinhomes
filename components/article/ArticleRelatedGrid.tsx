"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";
import { categoryColorMap } from "@/data/newsCategories";
import type { RelatedArticle } from "@/features/articles/article.types";

type Props = { articles: RelatedArticle[] };

export function ArticleRelatedGrid({ articles }: Props) {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-8 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Bài viết liên quan
        </h2>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const colors = categoryColorMap[article.category] ?? {
              bg: "bg-[#061B3A]",
              text: "text-white",
            };
            return (
              <StaggerItem key={article.id}>
                <Link
                  href={article.href}
                  className="group block h-full overflow-hidden rounded-[20px] border border-[#E8DDC8] bg-white shadow-[0_4px_24px_rgba(6,27,58,0.06)] transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,27,58,0.12)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-lg px-3 py-1 text-xs font-black uppercase tracking-wide",
                        colors.bg,
                        colors.text
                      )}
                    >
                      {article.categoryLabel}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#10233F] transition group-hover:text-[#C89B3C]">
                      {article.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-3 text-xs text-[#65758B]">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" aria-hidden />
                        {article.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" aria-hidden />
                        {article.readingTime}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition group-hover:text-[#061B3A]">
                      Xem chi tiết
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

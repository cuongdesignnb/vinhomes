"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { fadeUp, revealTransition } from "@/lib/motion";
import { categoryColorMap } from "@/data/newsCategories";
import type { NewsArticle } from "@/features/news/news.types";

type NewsCardProps = {
  article: NewsArticle;
  index?: number;
};

export function NewsCard({ article, index = 0 }: NewsCardProps) {
  const categoryColors = categoryColorMap[article.category] || {
    bg: "bg-[#061B3A]",
    text: "text-white",
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        ...revealTransition,
        delay: index * 0.08,
      }}
    >
      <Link
        href={article.href}
        className="group block h-full rounded-[20px] border border-[#E8DDC8] bg-white overflow-hidden shadow-[0_4px_24px_rgba(6,27,58,0.06)] transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,27,58,0.12)]"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <span
            className={cn(
              "absolute left-3 top-3 rounded-lg px-3 py-1 text-xs font-black uppercase tracking-wide",
              categoryColors.bg,
              categoryColors.text
            )}
          >
            {article.categoryLabel}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs text-[#65758B]">
            <Calendar className="size-3.5" />
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
          </div>

          <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-[#10233F]">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#65758B]">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-[#65758B]">{article.author}</span>
            <span className="flex items-center gap-1 text-xs text-[#65758B]">
              <Clock className="size-3.5" />
              {article.readingTime}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition-colors duration-200 group-hover:text-[#061B3A]">
            Xem chi tiết
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, Eye } from "lucide-react";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";
import { categoryColorMap } from "@/data/newsCategories";
import { cn } from "@/lib/cn";
import { ArticleShare } from "./ArticleShare";
import type { Article } from "@/features/articles/article.types";

type Props = { article: Article };

export function ArticleHero({ article }: Props) {
  const colors = categoryColorMap[article.category] ?? {
    bg: "bg-[#061B3A]",
    text: "text-white",
  };

  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      <div className="absolute inset-0">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.65)_100%)]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[380px] max-w-[1240px] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:min-h-[480px]"
      >
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0 }}
        >
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-white/70 transition hover:text-[#D8B15A]">
                Trang chủ
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <Link href="/tin-tuc" className="text-white/70 transition hover:text-[#D8B15A]">
                Tin tức
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="font-bold text-[#D8B15A]">Chi tiết bài viết</li>
          </ol>
        </motion.nav>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="mx-auto mt-5 max-w-[820px] text-2xl font-black leading-tight text-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.25]"
        >
          {article.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.2 }}
          className="mx-auto mt-4 max-w-[680px] text-sm leading-relaxed text-white/75 sm:text-base"
        >
          {article.excerpt}
        </motion.p>

        {/* Meta Row */}
        <motion.div
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <span
            className={cn(
              "rounded-lg px-3 py-1 text-xs font-black uppercase tracking-wide",
              colors.bg,
              colors.text
            )}
          >
            {article.categoryLabel}
          </span>

          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <Calendar className="size-3.5" aria-hidden />
            <time>{article.publishedAt}</time>
          </span>

          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <User className="size-3.5" aria-hidden />
            {article.author.name}
          </span>

          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <Clock className="size-3.5" aria-hidden />
            {article.readingTime}
          </span>

          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <Eye className="size-3.5" aria-hidden />
            {article.viewCount.toLocaleString("vi-VN")} lượt xem
          </span>

          <div className="flex items-center gap-1.5 text-xs text-white/70">
            <span>Chia sẻ</span>
            <ArticleShare title={article.title} slug={article.slug} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

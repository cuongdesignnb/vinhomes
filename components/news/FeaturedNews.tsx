"use client";

import { motion } from "framer-motion";
import { fadeUp, revealTransition } from "@/lib/motion";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { cn } from "@/lib/cn";
import { categoryColorMap } from "@/data/newsCategories";
import type { NewsArticle } from "@/features/news/news.types";
import { Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FeaturedNewsProps = {
  articles: NewsArticle[];
};

export function FeaturedNews({ articles }: FeaturedNewsProps) {
  const featured = articles.filter((a) => a.isFeatured).length >= 3
    ? articles.filter((a) => a.isFeatured).slice(0, 3)
    : articles.slice(0, 3);

  if (featured.length === 0) return null;

  const main = featured[0];
  const side = featured.slice(1, 3);
  const mainColors = categoryColorMap[main.category] ?? {
    bg: "bg-[#061B3A]",
    text: "text-white",
  };

  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Left: Large featured card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
          >
            <Link
              href={main.href}
              className="group relative block h-[420px] overflow-hidden rounded-[22px] shadow-[0_16px_48px_rgba(6,27,58,0.12)] transition-shadow duration-500 hover:shadow-[0_24px_64px_rgba(6,27,58,0.22)] lg:h-full lg:min-h-[420px]"
            >
              <Image
                src={main.image}
                alt={main.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.45)_50%,rgba(6,27,58,0.10)_100%)]" />

              {/* Badges */}
              <div className="absolute left-5 top-5 flex flex-col gap-2">
                <span className="inline-block rounded-lg bg-[#C89B3C] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#061B3A]">
                  Nổi bật
                </span>
                <span
                  className={cn(
                    "inline-block rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide",
                    mainColors.bg,
                    mainColors.text
                  )}
                >
                  {main.categoryLabel}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-xl font-black leading-snug text-white line-clamp-3 sm:text-2xl">
                  {main.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 line-clamp-2">
                  {main.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <User aria-hidden className="size-3.5" />
                    {main.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock aria-hidden className="size-3.5" />
                    {main.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right: 2 smaller cards stacked */}
          <Stagger className="grid gap-5">
            {side.map((article) => {
              const colors = categoryColorMap[article.category] ?? {
                bg: "bg-[#061B3A]",
                text: "text-white",
              };
              return (
                <StaggerItem key={article.id}>
                  <Link
                    href={article.href}
                    className="group flex overflow-hidden rounded-[18px] border border-[#E8DDC8] bg-white shadow-[0_10px_30px_rgba(6,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(6,27,58,0.14)]"
                  >
                    {/* Image */}
                    <div className="relative hidden w-[180px] flex-shrink-0 overflow-hidden sm:block">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        sizes="180px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-xs">
                        <span
                          className={cn(
                            "rounded-md px-2.5 py-1 font-bold uppercase tracking-wide",
                            colors.bg,
                            colors.text
                          )}
                        >
                          {article.categoryLabel}
                        </span>
                        <time
                          dateTime={article.publishedAt}
                          className="text-[#65758B]"
                        >
                          {article.publishedAt}
                        </time>
                      </div>
                      <h3 className="mt-3 text-base font-bold leading-snug text-[#10233F] line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-4 text-xs text-[#65758B]">
                        <span className="flex items-center gap-1.5">
                          <User aria-hidden className="size-3.5" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock aria-hidden className="size-3.5" />
                          {article.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

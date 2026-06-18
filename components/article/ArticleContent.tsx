"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ArticleQuoteBox } from "./ArticleQuoteBox";
import { ArticleStatCards } from "./ArticleStatCards";
import { ArticleTags } from "./ArticleTags";
import { ArticleAuthorBox } from "./ArticleAuthorBox";
import type { Article } from "@/features/articles/article.types";

type Props = { article: Article };

export function ArticleContent({ article }: Props) {
  return (
    <article className="min-w-0">
      {/* Featured Image */}
      <Reveal>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(6,27,58,0.10)]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      {/* Lead Box */}
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-[18px] border border-[#E8DDC8] bg-[#F8F5EF] p-5 sm:p-6 lg:p-7">
          <div className="flex gap-3">
            <Quote
              className="mt-0.5 size-8 shrink-0 text-[#C89B3C] opacity-50"
              aria-hidden
            />
            <p className="text-base leading-[1.85] text-[#10233F] sm:text-lg">
              {article.lead}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Article Sections */}
      {article.sections.map((section, idx) => (
        <Reveal key={section.id} delay={0.05}>
          <section id={section.id} className="mt-10 scroll-mt-24">
            <h2 className="mb-4 text-xl font-bold text-[#061B3A] sm:text-2xl">
              {idx + 1}. {section.heading}
            </h2>

            {section.content.map((para, pIdx) => (
              <p
                key={pIdx}
                className="mb-4 text-[#10233F] leading-[1.85]"
              >
                {para}
              </p>
            ))}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="mb-4 space-y-2.5 pl-1">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#C89B3C]" />
                    <span className="text-[#10233F] leading-[1.75]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Section image (appears after xu-huong section) */}
            {section.image && (
              <div className="my-6">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] shadow-[0_4px_20px_rgba(6,27,58,0.08)]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                {section.image.caption && (
                  <p className="mt-3 text-center text-sm text-[#65758B]">
                    {section.image.caption}
                  </p>
                )}
              </div>
            )}
          </section>
        </Reveal>
      ))}

      {/* Quote Box */}
      {article.quote && (
        <Reveal>
          <div className="mt-10">
            <ArticleQuoteBox quote={article.quote} />
          </div>
        </Reveal>
      )}

      {/* Stat Cards */}
      {article.stats && article.stats.length > 0 && (
        <div className="mt-10">
          <ArticleStatCards stats={article.stats} />
        </div>
      )}

      {/* Tags */}
      <div className="mt-10">
        <ArticleTags tags={article.tags} />
      </div>

      {/* Author Box */}
      <ArticleAuthorBox author={article.author} />
    </article>
  );
}

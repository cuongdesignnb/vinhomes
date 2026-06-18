"use client";

import { Reveal } from "@/components/site/Reveal";
import { ArticleTableOfContents } from "./ArticleTableOfContents";
import { ArticleRelatedSidebar } from "./ArticleRelatedSidebar";
import { ArticleCategoriesBox } from "./ArticleCategoriesBox";
import { ArticleDownloadGuide } from "./ArticleDownloadGuide";
import { ArticleQuickConsult } from "./ArticleQuickConsult";
import type { Article, RelatedArticle } from "@/features/articles/article.types";

type Props = {
  article: Article;
  sidebarRelated: RelatedArticle[];
};

export function ArticleSidebar({ article, sidebarRelated }: Props) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-[90px] lg:self-start">
      <Reveal delay={0}>
        <ArticleTableOfContents sections={article.sections} />
      </Reveal>
      <Reveal delay={0.08}>
        <ArticleRelatedSidebar articles={sidebarRelated} />
      </Reveal>
      <Reveal delay={0.16}>
        <ArticleCategoriesBox />
      </Reveal>
      <Reveal delay={0.24}>
        <ArticleDownloadGuide />
      </Reveal>
      <Reveal delay={0.32}>
        <ArticleQuickConsult />
      </Reveal>
    </aside>
  );
}

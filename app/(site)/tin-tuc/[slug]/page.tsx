import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
  getAllArticleSlugs,
} from "@/features/articles/article.api";
import { getMockSidebarRelated } from "@/data/articles.mock";
import { buildArticleSchema } from "@/lib/article-schema";

import { ArticleHero } from "@/components/article/ArticleHero";
import { ArticleContent } from "@/components/article/ArticleContent";
import { ArticleSidebar } from "@/components/article/ArticleSidebar";
import { ArticleRelatedGrid } from "@/components/article/ArticleRelatedGrid";
import { ArticleNewsletterStrip } from "@/components/article/ArticleNewsletterStrip";
import { ArticleConsultationCTA } from "@/components/article/ArticleConsultationCTA";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata                                                   */
/* ------------------------------------------------------------------ */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Không tìm thấy bài viết | Vinhomes",
      description:
        "Bài viết không tồn tại hoặc đã được cập nhật.",
    };
  }

  return {
    title: article.seoTitle || `${article.title} | Vinhomes`,
    description: article.seoDescription || article.excerpt,
    keywords: [
      "tin tức Vinhomes",
      "thị trường bất động sản 2026",
      "đầu tư bất động sản",
      "dự án Vinhomes",
      "chính sách bán hàng Vinhomes",
      "Vinhomes Ocean Park",
      "Vinhomes Royal Island",
    ],
    alternates: {
      canonical: article.canonical || `/tin-tuc/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      url: `/tin-tuc/${article.slug}`,
      type: "article",
      locale: "vi_VN",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [article.image],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const [relatedArticles, sidebarRelated] = await Promise.all([
    getRelatedArticles(slug),
    Promise.resolve(getMockSidebarRelated(slug)),
  ]);

  const schema = buildArticleSchema(article);

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <ArticleHero article={article} />

      {/* Main layout: Content + Sidebar */}
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ArticleContent article={article} />
        <ArticleSidebar
          article={article}
          sidebarRelated={sidebarRelated}
        />
      </div>

      {/* Related Articles */}
      <ArticleRelatedGrid articles={relatedArticles} />

      {/* Newsletter */}
      <ArticleNewsletterStrip />

      {/* Final CTA */}
      <ArticleConsultationCTA />
    </main>
  );
}

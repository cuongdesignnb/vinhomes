import type { Article, RelatedArticle } from "./article.types";
import {
  getMockArticleBySlug,
  getMockRelatedArticles,
  getAllMockArticleSlugs,
} from "@/data/articles.mock";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  if (!API_BASE_URL) {
    return getMockArticleBySlug(slug);
  }

  const res = await fetch(`${API_BASE_URL}/news/${slug}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error("Không thể tải bài viết");
  }

  return res.json();
}

export async function getRelatedArticles(
  slug: string
): Promise<RelatedArticle[]> {
  if (!API_BASE_URL) {
    return getMockRelatedArticles(slug);
  }

  const res = await fetch(`${API_BASE_URL}/news/${slug}/related`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  return res.json();
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  if (!API_BASE_URL) {
    return getAllMockArticleSlugs();
  }

  const res = await fetch(`${API_BASE_URL}/news/slugs`);
  if (!res.ok) return [];
  return res.json();
}

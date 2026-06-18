import type { Article, RelatedArticle } from "./article.types";
import {
  getMockArticleBySlug,
  getMockRelatedArticles,
  getAllMockArticleSlugs,
} from "@/data/articles.mock";
import { unwrapApiResponse } from "@/lib/api/http-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getArticleBySlug(
  slug: string
): Promise<Article | null> {
  if (!API_BASE_URL) {
    return getMockArticleBySlug(slug);
  }

  try {
    const res = await fetch(`${API_BASE_URL}/news/${slug}`, {
      next: { revalidate: 60 },
    });

    if (res.status === 404) return null;
    if (!res.ok) return getMockArticleBySlug(slug);

    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn(`API base URL configured but news slug ${slug} not reachable. Falling back to mock data.`, error);
    return getMockArticleBySlug(slug);
  }
}

export async function getRelatedArticles(
  slug: string
): Promise<RelatedArticle[]> {
  if (!API_BASE_URL) {
    return getMockRelatedArticles(slug);
  }

  try {
    const res = await fetch(`${API_BASE_URL}/news/${slug}/related`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return getMockRelatedArticles(slug);

    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn(`API base URL configured but news related for ${slug} not reachable. Falling back to mock data.`, error);
    return getMockRelatedArticles(slug);
  }
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  if (!API_BASE_URL) {
    return getAllMockArticleSlugs();
  }

  try {
    const res = await fetch(`${API_BASE_URL}/news/slugs`);
    if (!res.ok) return getAllMockArticleSlugs();
    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn("API base URL configured but news slugs not reachable. Falling back to mock data.", error);
    return getAllMockArticleSlugs();
  }
}

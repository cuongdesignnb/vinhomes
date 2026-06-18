import type { NewsFilters, NewsListResponse } from "./news.types";
import { getMockNewsArticles } from "@/data/news.mock";
import { unwrapApiMeta, unwrapApiResponse } from "@/lib/api/http-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getNewsArticles(
  filters: NewsFilters
): Promise<NewsListResponse> {
  if (!API_BASE_URL) {
    return getMockNewsArticles(filters);
  }

  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });

  try {
    const res = await fetch(`${API_BASE_URL}/news?${params.toString()}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return getMockNewsArticles(filters);
    }

    const payload = await res.json();
    const data = unwrapApiResponse<NewsListResponse["data"]>(payload);
    const meta = unwrapApiMeta(payload);

    if (Array.isArray(data)) {
      return {
        data,
        total: Number(meta?.total ?? data.length),
        page: Number(meta?.page ?? filters.page ?? 1),
        limit: Number(meta?.limit ?? filters.limit ?? data.length),
        totalPages: Number(meta?.totalPages ?? 1),
      };
    }

    return data as NewsListResponse;
  } catch (error) {
    console.warn("API base URL is configured but news endpoint is not reachable. Falling back to mock data.", error);
    return getMockNewsArticles(filters);
  }
}

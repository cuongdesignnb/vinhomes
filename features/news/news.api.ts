import type { NewsFilters, NewsListResponse } from "./news.types";
import { getMockNewsArticles } from "@/data/news.mock";

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

  const res = await fetch(`${API_BASE_URL}/news?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  return res.json();
}

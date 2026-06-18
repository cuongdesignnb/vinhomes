"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { NewsArticle, NewsListResponse } from "@/features/news/news.types";
import { getMockNewsArticles } from "@/data/news.mock";
import { NewsToolbar } from "@/components/news/NewsToolbar";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { NewsPagination } from "@/components/news/NewsPagination";

interface NewsContentSectionProps {
  initialData: NewsListResponse;
}

export function NewsContentSection({ initialData }: NewsContentSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [data, setData] = useState<NewsListResponse>(initialData);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSort = searchParams.get("sort") || "newest";
  const currentCategory = searchParams.get("category") || "";
  const currentKeyword = searchParams.get("keyword") || "";
  const currentRegion = searchParams.get("region") || "";
  const currentTopic = searchParams.get("topic") || "";

  const fetchData = useCallback(() => {
    setIsLoading(true);
    const result = getMockNewsArticles({
      keyword: currentKeyword || undefined,
      category: currentCategory || undefined,
      region: currentRegion || undefined,
      topic: currentTopic || undefined,
      sort: currentSort,
      page: currentPage,
      limit: 12,
    });
    setData(result);
    setIsLoading(false);
  }, [currentKeyword, currentCategory, currentRegion, currentTopic, currentSort, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      router.push(`/tin-tuc?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleSortChange = useCallback(
    (sort: string) => {
      updateParams({ sort, page: "" });
    },
    [updateParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateParams({ page: page === 1 ? "" : String(page) });
      window.scrollTo({ top: 600, behavior: "smooth" });
    },
    [updateParams]
  );

  const handleReset = useCallback(() => {
    router.push("/tin-tuc", { scroll: false });
  }, [router]);

  const popularArticles = initialData.data
    .filter((a: NewsArticle) => a.isPopular)
    .slice(0, 5);

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-10 sm:px-6 sm:pb-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <NewsToolbar
            total={data.total}
            sort={currentSort}
            view={view}
            onSortChange={handleSortChange}
            onViewChange={setView}
          />

          <div className="mt-6">
            <NewsGrid
              articles={data.data}
              isLoading={isLoading}
              error={null}
              onReset={handleReset}
            />
          </div>

          {data.totalPages > 1 ? (
            <div className="mt-10">
              <NewsPagination
                currentPage={data.page}
                totalPages={data.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          ) : null}
        </div>

        <aside className="hidden lg:block">
          <NewsSidebar popularArticles={popularArticles} />
        </aside>
      </div>

      <div className="mt-10 lg:hidden">
        <NewsSidebar popularArticles={popularArticles} />
      </div>
    </section>
  );
}

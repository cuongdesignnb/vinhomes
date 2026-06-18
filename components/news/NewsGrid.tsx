"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import type { NewsArticle } from "@/features/news/news.types";
import { NewsCard } from "./NewsCard";
import { NewsCardSkeleton } from "./NewsCardSkeleton";
import { NewsEmptyState } from "./NewsEmptyState";
import { NewsErrorState } from "./NewsErrorState";

type NewsGridProps = {
  articles: NewsArticle[];
  isLoading?: boolean;
  error?: string | null;
  onReset?: () => void;
  onRetry?: () => void;
};

export function NewsGrid({ articles, isLoading, error, onReset, onRetry }: NewsGridProps) {
  if (isLoading) {
    return <NewsCardSkeleton />;
  }

  if (error) {
    return <NewsErrorState onRetry={onRetry} />;
  }

  if (articles.length === 0) {
    return <NewsEmptyState onReset={onReset} />;
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {articles.map((article, index) => (
        <NewsCard key={article.id} article={article} index={index} />
      ))}
    </motion.div>
  );
}


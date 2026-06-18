"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
}

export function NewsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: NewsPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Phân trang" className="flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn(
          "flex h-10 items-center gap-1.5 rounded-xl border border-[#E8DDC8] px-4 text-sm font-bold text-[#10233F] transition-colors duration-200",
          currentPage <= 1
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-[#F8F5EF] hover:text-[#C89B3C]"
        )}
      >
        <ChevronLeft className="size-4" />
        <span className="hidden sm:inline">Trước</span>
      </button>

      {/* Page numbers */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="flex size-10 items-center justify-center text-sm text-[#65758B]"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              "flex size-10 items-center justify-center rounded-xl border text-sm font-bold transition-colors duration-200",
              page === currentPage
                ? "border-[#061B3A] bg-[#061B3A] text-white"
                : "border-[#E8DDC8] text-[#10233F] hover:bg-[#F8F5EF] hover:text-[#C89B3C]"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn(
          "flex h-10 items-center gap-1.5 rounded-xl border border-[#E8DDC8] px-4 text-sm font-bold text-[#10233F] transition-colors duration-200",
          currentPage >= totalPages
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-[#F8F5EF] hover:text-[#C89B3C]"
        )}
      >
        <span className="hidden sm:inline">Sau</span>
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}

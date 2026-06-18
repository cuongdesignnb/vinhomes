"use client";

import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/site/Reveal";
import { newsSortOptions } from "@/data/newsCategories";

type NewsToolbarProps = {
  total: number;
  sort: string;
  view: "grid" | "list";
  onSortChange: (sort: string) => void;
  onViewChange: (view: "grid" | "list") => void;
};

export function NewsToolbar({
  total,
  sort,
  view,
  onSortChange,
  onViewChange,
}: NewsToolbarProps) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#061B3A] sm:text-2xl">
            Bài viết mới nhất
          </h2>
          <p className="mt-1 text-sm text-[#65758B]">
            Hiển thị {total} bài viết
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Hiển thị dạng lưới"
              onClick={() => onViewChange("grid")}
              className={cn(
                "flex size-10 items-center justify-center rounded-lg transition-colors duration-200",
                view === "grid"
                  ? "bg-[#061B3A] text-white"
                  : "border border-[#E8DDC8] text-[#65758B] hover:bg-[#F8F5EF]"
              )}
            >
              <LayoutGrid className="size-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Hiển thị dạng danh sách"
              onClick={() => onViewChange("list")}
              className={cn(
                "flex size-10 items-center justify-center rounded-lg transition-colors duration-200",
                view === "list"
                  ? "bg-[#061B3A] text-white"
                  : "border border-[#E8DDC8] text-[#65758B] hover:bg-[#F8F5EF]"
              )}
            >
              <List className="size-[18px]" />
            </button>
          </div>

          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-10 rounded-xl border border-[#E8DDC8] bg-white px-3 text-sm text-[#10233F] outline-none transition-colors duration-200 focus:border-[#C89B3C]"
          >
            {newsSortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Reveal>
  );
}

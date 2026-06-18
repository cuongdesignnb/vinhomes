"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, RotateCcw, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { fadeUp, revealTransition } from "@/lib/motion";
import {
  newsCategories,
  newsRegions,
  newsTopics,
  newsSortOptions,
} from "@/data/newsCategories";

const quickChips = [
  { label: "Tất cả", param: "", type: "category" },
  { label: "Thị trường", param: "market", type: "category" },
  { label: "Dự án", param: "project", type: "category" },
  { label: "Chính sách", param: "policy", type: "category" },
  { label: "Đầu tư", param: "investment", type: "category" },
  { label: "Phong cách sống", param: "lifestyle", type: "category" },
  { label: "Hà Nội", param: "ha-noi", type: "region" },
  { label: "TP.HCM", param: "tp-hcm", type: "region" },
] as const;

const selectStyle =
  "h-12 w-full appearance-none rounded-xl border border-white/15 bg-white/8 px-4 pr-10 text-sm text-white outline-none transition focus:border-[#D8B15A] focus:ring-2 focus:ring-[#D8B15A]/30";

function SelectWrapper({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly { readonly value: string; readonly label: string }[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-white/60">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={selectStyle}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-[#061B3A] text-white"
            >
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white/50"
        />
      </div>
    </label>
  );
}

export function NewsFilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") ?? ""
  );
  const [region, setRegion] = useState(searchParams.get("region") ?? "");
  const [topic, setTopic] = useState(searchParams.get("topic") ?? "");
  const [sort, setSort] = useState(
    searchParams.get("sort") ?? "newest"
  );
  const [keyword, setKeyword] = useState(
    searchParams.get("keyword") ?? ""
  );

  const buildUrl = useCallback(
    (overrides?: Record<string, string>) => {
      const params = new URLSearchParams();
      const merged = {
        category,
        region,
        topic,
        sort,
        keyword,
        ...overrides,
      };
      Object.entries(merged).forEach(([k, v]) => {
        if (v && v !== "newest") params.set(k, v);
      });
      const qs = params.toString();
      return qs ? `/tin-tuc?${qs}` : "/tin-tuc";
    },
    [category, region, topic, sort, keyword]
  );

  const handleSearch = () => {
    router.push(buildUrl());
  };

  const handleReset = () => {
    setCategory("");
    setRegion("");
    setTopic("");
    setSort("newest");
    setKeyword("");
    router.push("/tin-tuc");
  };

  const handleChip = (chip: (typeof quickChips)[number]) => {
    if (chip.type === "category") {
      setCategory(chip.param);
      router.push(buildUrl({ category: chip.param }));
    } else {
      setRegion(chip.param);
      router.push(buildUrl({ region: chip.param }));
    }
  };

  const activeChip = (chip: (typeof quickChips)[number]) => {
    if (chip.type === "category") return category === chip.param;
    return region === chip.param;
  };

  return (
    <div className="relative z-10 -mt-10 mx-auto max-w-[1240px] px-4 sm:px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...revealTransition, delay: 0.1 }}
        className="rounded-[20px] border border-[#C89B3C]/15 bg-[#061B3A] p-6 shadow-2xl sm:p-8"
      >
        {/* Row 1: Selects */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SelectWrapper
            label="Danh mục"
            value={category}
            onChange={setCategory}
            options={newsCategories}
          />
          <SelectWrapper
            label="Khu vực"
            value={region}
            onChange={setRegion}
            options={newsRegions}
          />
          <SelectWrapper
            label="Chủ đề"
            value={topic}
            onChange={setTopic}
            options={newsTopics}
          />
          <SelectWrapper
            label="Sắp xếp"
            value={sort}
            onChange={setSort}
            options={newsSortOptions}
          />
        </div>

        {/* Row 2: Search + buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              aria-hidden
              className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Tìm kiếm bài viết..."
              className="h-12 w-full rounded-xl border border-white/15 bg-white/8 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#D8B15A] focus:ring-2 focus:ring-[#D8B15A]/30"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="btn-gold h-12 px-6 text-sm"
          >
            TÌM KIỪM
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline-light h-12 gap-2 px-5 text-sm"
          >
            <RotateCcw aria-hidden className="size-3.5" />
            ĐẶT LẠI
          </button>
        </div>

        {/* Row 3: Quick filter chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {quickChips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => handleChip(chip)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:scale-[1.04]",
                activeChip(chip)
                  ? "border-[#C89B3C] bg-[#C89B3C] font-bold text-[#061B3A]"
                  : "border-white/20 text-white/80 hover:bg-white/10"
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

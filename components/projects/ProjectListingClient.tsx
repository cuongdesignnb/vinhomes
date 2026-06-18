"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectSideCtas } from "@/components/projects/ProjectSideCtas";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  priceRanges,
  projectAmenities,
  projectAreas,
  projectStatuses,
  projectTypes,
  quickFilterChips,
  sortOptions,
} from "@/data/project-options";
import type { ProjectListItem } from "@/data/project-list";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Grid2X2,
  List,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import useSWR from "swr";

type ProjectsResponse = {
  total: number;
  projects: ProjectListItem[];
};

type FilterState = {
  area: string;
  type: string;
  price: string;
  status: string;
  amenity: string;
  sort: string;
  q: string;
};

const initialFilters: FilterState = {
  area: "",
  type: "",
  price: "",
  status: "",
  amenity: "",
  sort: "newest",
  q: "",
};

const fetcher = (url: string) => fetch(url).then((response) => response.json() as Promise<ProjectsResponse>);

function SelectField({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[] | { label: string; value: string }[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-black text-white">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-lg border border-white/22 bg-[#08254D] px-3 text-sm text-white outline-none transition focus:border-[#D8B15A] focus:ring-2 focus:ring-[#D8B15A]/30"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          const item = typeof option === "string" ? { label: option, value: option } : option;
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export function ProjectListingClient({ initialData }: { initialData: ProjectsResponse }) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    return params.toString();
  }, [filters]);

  const { data, isLoading } = useSWR<ProjectsResponse>(`/api/projects?${query}`, fetcher, {
    fallbackData: initialData,
    keepPreviousData: true,
  });

  const projects = data?.projects ?? [];
  const total = data?.total ?? 0;
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));
  const visibleProjects = projects.slice((page - 1) * pageSize, page * pageSize);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setPage(1);
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const resetFilters = () => {
    setPage(1);
    setFilters(initialFilters);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/images/projects-hero.jpg"
            alt="Danh sách dự án Vinhomes bên sông"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,58,0.95)_0%,rgba(6,27,58,0.76)_42%,rgba(6,27,58,0.16)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-4 pb-24 pt-8 sm:px-6 lg:pb-28 lg:pt-10">
          <Reveal>
            <div className="text-sm font-medium text-white/72">
              Trang chủ <span className="mx-2 text-[#D8B15A]">/</span> Dự án
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Danh sách dự án <span className="text-[#D8B15A]">Vinhomes</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
              Khám phá trọn bộ các dự án căn hộ, biệt thự, shophouse và sản phẩm đầu tư Vinhomes trên toàn quốc.
            </p>
            <div className="mt-6 grid max-w-md grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#D8B15A]/55 bg-white/8 p-4 text-white backdrop-blur">
                <Building2 aria-hidden className="mb-2 size-6 text-[#D8B15A]" />
                <strong className="block text-2xl font-black">30+</strong>
                <span className="text-sm text-white/76">Dự án</span>
              </div>
              <div className="rounded-2xl border border-[#D8B15A]/55 bg-white/8 p-4 text-white backdrop-blur">
                <MapPin aria-hidden className="mb-2 size-6 text-[#D8B15A]" />
                <strong className="block text-2xl font-black">10.000+</strong>
                <span className="text-sm text-white/76">Sản phẩm</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-20 max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <div className="rounded-2xl border border-[#D8B15A]/35 bg-[#061B3A] p-4 shadow-[0_24px_70px_rgba(6,27,58,0.26)] lg:p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              <SelectField label="Khu vực" value={filters.area} onChange={(value) => updateFilter("area", value)} placeholder="Chọn khu vực" options={projectAreas} />
              <SelectField label="Loại hình" value={filters.type} onChange={(value) => updateFilter("type", value)} placeholder="Chọn loại hình" options={projectTypes} />
              <SelectField label="Mức giá" value={filters.price} onChange={(value) => updateFilter("price", value)} placeholder="Chọn mức giá" options={priceRanges} />
              <SelectField label="Tình trạng" value={filters.status} onChange={(value) => updateFilter("status", value)} placeholder="Chọn tình trạng" options={projectStatuses} />
              <SelectField label="Tiện ích" value={filters.amenity} onChange={(value) => updateFilter("amenity", value)} placeholder="Chọn tiện ích" options={projectAmenities} />
              <SelectField label="Sắp xếp theo" value={filters.sort} onChange={(value) => updateFilter("sort", value)} placeholder="Mới nhất" options={sortOptions} />
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_170px_170px]">
              <label className="relative">
                <span className="sr-only">Tìm theo tên dự án</span>
                <Search aria-hidden className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#65758B]" />
                <input
                  value={filters.q}
                  onChange={(event) => updateFilter("q", event.target.value)}
                  className="h-12 w-full rounded-lg border border-white/12 bg-white pl-11 pr-4 text-sm text-[#10233F] outline-none focus:border-[#D8B15A] focus:ring-2 focus:ring-[#D8B15A]/30"
                  placeholder="Tìm theo tên dự án..."
                />
              </label>
              <button type="button" className="btn-gold h-12">
                Tìm kiếm
                <Search aria-hidden className="size-4" />
              </button>
              <button type="button" onClick={resetFilters} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D8B15A]/55 text-sm font-black text-white transition hover:bg-white/10">
                Đặt lại
                <RotateCcw aria-hidden className="size-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickFilterChips.map((chip) => {
                const active = filters[chip.key] === chip.value;
                return (
                  <button
                    key={`${chip.key}-${chip.value}`}
                    type="button"
                    onClick={() => updateFilter(chip.key, active ? "" : chip.value)}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-xs font-bold transition ${
                      active
                        ? "border-[#D8B15A] bg-[#D8B15A] text-[#061B3A]"
                        : "border-[#D8B15A]/45 text-white hover:bg-white/10"
                    }`}
                  >
                    <SlidersHorizontal aria-hidden className="size-3.5" />
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#FAF8F3] py-10 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-black text-[#061B3A]">
              Hiển thị <span className="text-[#C89B3C]">{total}</span> dự án
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setView("grid")}
                aria-label="Xem dạng lưới"
                className={`grid size-10 place-items-center rounded-lg border ${view === "grid" ? "border-[#D8B15A] bg-white text-[#061B3A]" : "border-[#E8DDC8] text-[#65758B]"}`}
              >
                <Grid2X2 aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                aria-label="Xem dạng danh sách"
                className={`grid size-10 place-items-center rounded-lg border ${view === "list" ? "border-[#D8B15A] bg-white text-[#061B3A]" : "border-[#E8DDC8] text-[#65758B]"}`}
              >
                <List aria-hidden className="size-5" />
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-[420px] animate-pulse rounded-2xl bg-white" />
              ))}
            </div>
          ) : (
            <Stagger className={`mt-8 grid gap-6 ${view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {visibleProjects.map((project, index) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} index={(page - 1) * pageSize + index} />
                </StaggerItem>
              ))}
            </Stagger>
          )}

          {visibleProjects.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-[#E8DDC8] bg-white p-8 text-center text-[#65758B]">
              Không tìm thấy dự án phù hợp. Hãy thử bỏ bớt bộ lọc.
            </div>
          ) : null}

          <div className="mt-6">
            <ProjectSideCtas />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="grid size-10 place-items-center rounded-lg border border-[#E8DDC8] bg-white text-[#061B3A] disabled:opacity-40"
              aria-label="Trang trước"
            >
              <ArrowLeft aria-hidden className="size-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`grid size-10 place-items-center rounded-lg border text-sm font-black ${
                    page === pageNumber ? "border-[#061B3A] bg-[#061B3A] text-white" : "border-[#E8DDC8] bg-white text-[#061B3A]"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              className="grid size-10 place-items-center rounded-lg border border-[#E8DDC8] bg-white text-[#061B3A] disabled:opacity-40"
              aria-label="Trang sau"
            >
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

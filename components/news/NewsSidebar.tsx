"use client";

import { Reveal } from "@/components/site/Reveal";
import type { NewsArticle } from "@/features/news/news.types";
import {
  BarChart3,
  Building2,
  Download,
  FileText,
  Heart,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Props = {
  popularArticles?: NewsArticle[];
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const categories = [
  { label: "Thị trương", icon: TrendingUp, slug: "market" },
  { label: "Dụ án", icon: Building2, slug: "project" },
  { label: "Chính sách", icon: FileText, slug: "policy" },
  { label: "Đàu tư", icon: BarChart3, slug: "investment" },
  { label: "Phong cách sóng", icon: Heart, slug: "lifestyle" },
  { label: "Hà Nọi", icon: MapPin, slug: "ha-noi" },
  { label: "TP.HCM", icon: MapPin, slug: "tp-hcm" },
];

const fallbackArticles: NewsArticle[] = [
  {
    id: "fb-1",
    title:
      "Vì sao Vinhomes Ocean Park luôn dãn đàu lưọt tìm kiém",
    slug: "vi-sao-vinhomes-ocean-park-dan-dau",
    excerpt: "",
    category: "project",
    categoryLabel: "Dụ án",
    image: "/images/news-1.jpg",
    imageAlt: "Vinhomes Ocean Park",
    author: "Ban biên tạp",
    publishedAt: "2026-06-10",
    readingTime: "5 phút",
    href: "/tin-tuc/vi-sao-vinhomes-ocean-park-dan-dau",
  },
  {
    id: "fb-2",
    title:
      "Chính sách bán hàng mơi nhát tháng 5/2026",
    slug: "chinh-sach-ban-hang-thang-5-2026",
    excerpt: "",
    category: "policy",
    categoryLabel: "Chính sách",
    image: "/images/news-3.jpg",
    imageAlt: "Chính sách Vinhomes",
    author: "Ban biên tạp",
    publishedAt: "2026-05-28",
    readingTime: "4 phút",
    href: "/tin-tuc/chinh-sach-ban-hang-thang-5-2026",
  },
  {
    id: "fb-3",
    title:
      "Cơ họi đàu tư BĐS khu Đông Hà Nọi năm 2026",
    slug: "co-hoi-dau-tu-khu-dong-ha-noi-2026",
    excerpt: "",
    category: "investment",
    categoryLabel: "Đàu tư",
    image: "/images/news-2.jpg",
    imageAlt: "Khu Đông Hà Nọi",
    author: "Ban biên tạp",
    publishedAt: "2026-05-20",
    readingTime: "6 phút",
    href: "/tin-tuc/co-hoi-dau-tu-khu-dong-ha-noi-2026",
  },
  {
    id: "fb-4",
    title:
      "Top 5 dụ án Vinhomes đáng sóng nhát hiẹn nay",
    slug: "top-5-du-an-vinhomes-dang-song-nhat",
    excerpt: "",
    category: "lifestyle",
    categoryLabel: "Phong cách sóng",
    image: "/images/news-1.jpg",
    imageAlt: "Vinhomes đáng sóng",
    author: "Ban biên tạp",
    publishedAt: "2026-05-15",
    readingTime: "7 phút",
    href: "/tin-tuc/top-5-du-an-vinhomes-dang-song-nhat",
  },
  {
    id: "fb-5",
    title:
      "Kinh nghiẹm mua nhà làn đàu càn biét",
    slug: "kinh-nghiem-mua-nha-lan-dau",
    excerpt: "",
    category: "investment",
    categoryLabel: "Đàu tư",
    image: "/images/news-2.jpg",
    imageAlt: "Mua nhà làn đàu",
    author: "Ban biên tạp",
    publishedAt: "2026-05-10",
    readingTime: "8 phút",
    href: "/tin-tuc/kinh-nghiem-mua-nha-lan-dau",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function NewsSidebar({ popularArticles: propArticles }: Props) {
  const articles = propArticles ?? fallbackArticles;

  return (
    <aside className="flex flex-col gap-6">
      {/* ---- Block 1: Chuyên mục nổi bật ---- */}
      <Reveal>
        <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-5">
          <h3 className="mb-4 text-base font-black text-[#061B3A]">
            Chuyên mục nổi bật
          </h3>

          <ul>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/tin-tuc?category=${cat.slug}`}
                    className="flex items-center gap-3 border-b border-[#E8DDC8]/60 py-3 transition last:border-0 hover:text-[#C89B3C]"
                  >
                    <Icon
                      aria-hidden
                      className="size-4 shrink-0 text-[#C89B3C]"
                    />
                    <span className="text-sm font-medium text-[#10233F] transition hover:text-[#C89B3C]">
                      {cat.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      {/* ---- Block 2: Bài xem nhiều ---- */}
      <Reveal delay={0.1}>
        <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-5">
          <h3 className="mb-4 text-base font-black text-[#061B3A]">
            Bài xem nhiều
          </h3>

          <ol>
            {articles.slice(0, 5).map((article, idx) => (
              <li
                key={article.id}
                className="border-b border-[#E8DDC8]/60 py-3 last:border-0"
              >
                <Link href={article.href} className="flex gap-3 group">
                  <span className="w-6 shrink-0 text-lg font-black text-[#C89B3C]">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-snug text-[#10233F] line-clamp-2 transition group-hover:text-[#C89B3C]">
                      {article.title}
                    </p>
                    <time className="mt-1 block text-xs text-[#65758B]">
                      {formatDate(article.publishedAt)}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ---- Block 3: Tải cẩm nang đầu tư ---- */}
      <Reveal delay={0.2}>
        <div className="rounded-[20px] bg-gradient-to-br from-[#061B3A] to-[#08254D] p-5 text-white">
          <h3 className="mb-2 text-base font-black text-[#D8B15A]">
            Tải cẩm nang đầu tư
          </h3>
          <p className="text-sm leading-relaxed text-white/75">
            Bộ tài liệu tổng hợp phân tích
            thị trường, xu hướng và
            lựa chọn đầu tư hiệu quả.
          </p>
          <button
            type="button"
            className="btn-gold mt-4 h-10 w-full text-sm font-black"
          >
            <Download aria-hidden className="size-4" />
            TẢI NGAY
          </button>
        </div>
      </Reveal>
    </aside>
  );
}

import {
  ArrowUp,
  ArrowDown,
  Eye,
  AlertTriangle,
  CalendarDays,
  FileText,
} from "lucide-react";
import type {
  SeoKeyword,
  PopularPost,
  OptimizationPage,
  ScheduledPost,
} from "@/features/admin/dashboard/dashboard.types";

interface SeoContentSectionProps {
  seoKeywords: SeoKeyword[];
  popularPosts: PopularPost[];
  optimizationPages: OptimizationPage[];
  scheduledPosts: ScheduledPost[];
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5">
      <h4 className="mb-3 text-sm font-bold text-[#10233F]">{title}</h4>
      {children}
    </div>
  );
}

function KeywordsTable({ keywords }: { keywords: SeoKeyword[] }) {
  return (
    <SectionCard title="Từ khóa SEO">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-[#E5EAF2] text-left">
            <th className="pb-2 pr-3 font-semibold text-[#65758B]">
              Từ khóa
            </th>
            <th className="pb-2 pr-3 font-semibold text-[#65758B]">
              Vị trí
            </th>
            <th className="pb-2 pr-3 font-semibold text-[#65758B]">
              Lượt tìm
            </th>
            <th className="pb-2 font-semibold text-[#65758B]">Thay đổi</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((kw) => (
            <tr
              key={kw.keyword}
              className="border-b border-[#E5EAF2] last:border-0"
            >
              <td className="py-2 pr-3 font-medium text-[#10233F]">
                {kw.keyword}
              </td>
              <td className="py-2 pr-3 text-[#65758B]">{kw.position}</td>
              <td className="py-2 pr-3 text-[#65758B]">
                {kw.searchVolume.toLocaleString("vi-VN")}
              </td>
              <td className="py-2">
                <span
                  className={`inline-flex items-center gap-0.5 font-semibold ${
                    kw.change > 0
                      ? "text-emerald-600"
                      : kw.change < 0
                      ? "text-red-500"
                      : "text-slate-400"
                  }`}
                >
                  {kw.change > 0 && <ArrowUp className="size-3" />}
                  {kw.change < 0 && <ArrowDown className="size-3" />}
                  {Math.abs(kw.change)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  );
}

function PopularPostsList({ posts }: { posts: PopularPost[] }) {
  return (
    <SectionCard title="Bài viết phổ biến">
      <div className="flex flex-col gap-2.5">
        {posts.map((post, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2 min-w-0">
              <FileText className="size-4 flex-shrink-0 text-[#C89B3C] mt-0.5" />
              <span className="text-xs text-[#10233F] line-clamp-2">
                {post.title}
              </span>
            </div>
            <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-[#65758B]">
              <Eye className="size-3" />
              {post.views}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function OptimizationList({ pages }: { pages: OptimizationPage[] }) {
  return (
    <SectionCard title="Trang cần tối ưu">
      <div className="flex flex-col gap-2.5">
        {pages.map((page) => (
          <div key={page.path} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <AlertTriangle className="size-4 flex-shrink-0 text-amber-500" />
              <span className="text-xs text-[#10233F] truncate">
                {page.path}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="h-1.5 w-12 overflow-hidden rounded-full bg-[#E5EAF2]">
                <div
                  className={`h-full rounded-full ${
                    page.score >= 80
                      ? "bg-emerald-500"
                      : page.score >= 50
                      ? "bg-amber-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${page.score}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold text-[#10233F]">
                {page.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function FormPerformance() {
  return (
    <SectionCard title="Hiệu suất biểu mẫu">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Tổng gửi", value: "1.847" },
          { label: "Tỉ lệ hoàn thành", value: "72%" },
          { label: "TB thời gian điền", value: "2p 15s" },
          { label: "Tỉ lệ thoát", value: "18%" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-[#E5EAF2] bg-[#F6F8FB] px-3 py-2"
          >
            <p className="text-[11px] text-[#65758B]">{item.label}</p>
            <p className="text-sm font-bold text-[#10233F]">{item.value}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function PostSchedule({ posts }: { posts: ScheduledPost[] }) {
  return (
    <SectionCard title="Lịch đăng bài">
      <div className="flex flex-col gap-2.5">
        {posts.map((post, i) => (
          <div key={i} className="flex items-start gap-2">
            <CalendarDays className="size-4 flex-shrink-0 text-[#2563EB] mt-0.5" />
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-xs font-medium text-[#10233F] truncate">
                {post.title}
              </span>
              <span className="text-[11px] text-[#65758B]">
                {post.date} - {post.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default function SeoContentSection({
  seoKeywords,
  popularPosts,
  optimizationPages,
  scheduledPosts,
}: SeoContentSectionProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-[#10233F]">
        Quản lý SEO & Nội dung
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <KeywordsTable keywords={seoKeywords} />
        <PopularPostsList posts={popularPosts} />
        <OptimizationList pages={optimizationPages} />
        <FormPerformance />
        <PostSchedule posts={scheduledPosts} />
      </div>
    </div>
  );
}

import Link from "next/link";
import {
  TrendingUp,
  Building2,
  FileText,
  BarChart3,
  Heart,
} from "lucide-react";

const categories = [
  { label: "Thị trường", value: "market", icon: TrendingUp },
  { label: "Dự án", value: "project", icon: Building2 },
  { label: "Chính sách", value: "policy", icon: FileText },
  { label: "Đầu tư", value: "investment", icon: BarChart3 },
  { label: "Phong cách sống", value: "lifestyle", icon: Heart },
];

export function ArticleCategoriesBox() {
  return (
    <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-5">
      <h3 className="mb-4 text-base font-bold text-[#061B3A]">
        Chuyên mục nổi bật
      </h3>
      <div>
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.value}
              href={`/tin-tuc?category=${cat.value}`}
              className={`flex items-center gap-3 py-2.5 text-sm text-[#10233F] transition hover:text-[#C89B3C] ${
                idx < categories.length - 1
                  ? "border-b border-[#E8DDC8]/50"
                  : ""
              }`}
            >
              <Icon className="size-4 text-[#C89B3C]" aria-hidden />
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

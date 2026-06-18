import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedArticle } from "@/features/articles/article.types";

type Props = { articles: RelatedArticle[] };

export function ArticleRelatedSidebar({ articles }: Props) {
  return (
    <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-5">
      <h3 className="mb-4 text-base font-bold text-[#061B3A]">
        Bài viết liên quan
      </h3>
      <div className="space-y-4">
        {articles.map((a) => (
          <Link
            key={a.id}
            href={a.href}
            className="group flex gap-3"
          >
            <div className="relative h-[56px] w-[80px] shrink-0 overflow-hidden rounded-lg">
              <Image
                src={a.image}
                alt={a.imageAlt}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-medium text-[#10233F] transition group-hover:text-[#C89B3C]">
                {a.title}
              </p>
              <p className="mt-1 text-xs text-[#65758B]">{a.publishedAt}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/tin-tuc"
        className="mt-4 flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition hover:text-[#061B3A]"
      >
        Xem tất cả bài viết
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

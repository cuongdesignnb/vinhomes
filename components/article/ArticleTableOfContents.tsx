"use client";

import { useEffect, useState, useCallback } from "react";
import type { ArticleSection } from "@/features/articles/article.types";

type Props = { sections: ArticleSection[] };

export function ArticleTableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  return (
    <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-5">
      <h3 className="mb-4 text-base font-bold text-[#061B3A]">
        Mục lục bài viết
      </h3>
      <ol className="space-y-1">
        {sections.map((section, idx) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={`flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#F8F5EF] font-bold text-[#C89B3C]"
                    : "text-[#10233F] hover:text-[#C89B3C]"
                }`}
              >
                <span className="mt-px font-bold text-[#C89B3C]">
                  {idx + 1}.
                </span>
                <span className="line-clamp-2">{section.heading}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

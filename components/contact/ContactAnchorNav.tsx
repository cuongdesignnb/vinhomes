"use client";

import { useEffect, useState, useCallback } from "react";
import { Info, Send, Building2, Map, HelpCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "thong-tin-lien-he", label: "Thông tin liên hệ", icon: Info },
  { id: "gui-yeu-cau", label: "Gửi yêu cầu", icon: Send },
  { id: "van-phong", label: "Văn phòng", icon: Building2 },
  { id: "ban-do", label: "Bản đồ", icon: Map },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export function ContactAnchorNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { const v = entries.find((e) => e.isIntersecting); if (v) setActiveId(v.target.id); },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.05 }
    );
    tabs.forEach((t) => { const el = document.getElementById(t.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <nav aria-label="Anchor navigation" className="sticky top-[64px] z-30 border-b border-white/10 bg-[#061B3A]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="no-scrollbar flex gap-0 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <a key={tab.id} href={`#${tab.id}`} onClick={(e) => handleClick(e, tab.id)}
                className={cn("flex shrink-0 items-center gap-2 border-b-2 px-4 py-3.5 text-sm font-bold transition whitespace-nowrap",
                  activeId === tab.id ? "border-[#C89B3C] text-[#D8B15A]" : "border-transparent text-white/65 hover:text-white"
                )}>
                <Icon className="size-4" aria-hidden />{tab.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

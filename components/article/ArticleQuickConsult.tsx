"use client";

import { ArticleQuickConsultForm } from "@/components/forms/ArticleQuickConsultForm";

export function ArticleQuickConsult() {
  return (
    <div className="rounded-[20px] bg-[#061B3A] p-5 text-white">
      <h3 className="mb-3 text-base font-bold">
        Nhận tư vấn nhanh
      </h3>
      <ArticleQuickConsultForm />
      <p className="mt-3 text-xs text-white/60">
        Chuyên viên sẽ liên hệ trong 5 phút.
      </p>
    </div>
  );
}

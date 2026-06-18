"use client";

import React from "react";
import { Info } from "lucide-react";
import { UserCard } from "./UserCard";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ title = "Chưa có dữ liệu", description }: EmptyStateProps) {
  return (
    <UserCard className="flex flex-col items-center justify-center text-center py-10 border-dashed border-[#E5EAF2]">
      <div className="size-10 rounded-full bg-[#F6F8FB] flex items-center justify-center text-[#65758B]/80 mb-3 shrink-0">
        <Info className="size-5" />
      </div>
      <h4 className="text-sm font-bold text-[#10233F]">{title}</h4>
      <p className="mt-1 max-w-sm text-xs text-[#65758B] leading-relaxed">
        {description || "Thông tin sẽ hiển thị tại đây sau khi bạn bắt đầu quan tâm dự án hoặc gửi yêu cầu tư vấn."}
      </p>
    </UserCard>
  );
}

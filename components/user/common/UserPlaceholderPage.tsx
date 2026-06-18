"use client";

import React from "react";
import { Settings, Plus } from "lucide-react";
import { UserCard } from "./UserCard";

interface UserPlaceholderPageProps {
  title: string;
  subtitle: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function UserPlaceholderPage({
  title,
  subtitle,
  actionLabel,
  onAction,
}: UserPlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#10233F]">{title}</h1>
        <p className="text-xs text-[#65758B] mt-1">{subtitle}</p>
      </div>

      <UserCard className="flex flex-col items-center justify-center text-center py-16 border-dashed border-[#E5EAF2]">
        <div className="size-14 rounded-2xl bg-[#F6F8FB] text-[#C89B3C] flex items-center justify-center mb-5 shrink-0">
          <Settings className="size-6 animate-spin duration-3000" />
        </div>
        <h3 className="text-base font-bold text-[#10233F]">Tính năng đang phát triển</h3>
        <p className="mt-2 text-xs text-[#65758B] max-w-sm leading-relaxed">
          Khu vực cổng thông tin này đang được hoàn thiện và chuẩn bị kết nối dữ liệu từ hệ thống Vinhomes.
        </p>

        {actionLabel && (
          <button
            type="button"
            onClick={onAction}
            className="mt-6 flex items-center gap-1.5 bg-[#061B3A] text-white rounded-xl px-5 py-2.5 text-xs font-semibold hover:bg-[#08254D] transition-colors"
          >
            <Plus className="size-4" />
            <span>{actionLabel}</span>
          </button>
        )}
      </UserCard>
    </div>
  );
}

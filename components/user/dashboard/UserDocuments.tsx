"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { UserDocument } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { EmptyState } from "@/components/user/common/EmptyState";

interface UserDocumentsProps {
  documents: UserDocument[];
}

export function UserDocuments({ documents }: UserDocumentsProps) {
  if (!documents || documents.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#10233F]">Tài liệu của tôi</h3>
          <Link 
            href="/user/documents" 
            className="text-xs text-[#C89B3C] font-semibold hover:underline"
          >
            Xem tất cả
          </Link>
        </div>
        <EmptyState 
          title="Chưa có tài liệu nào"
          description="Bạn chưa nhận được tài liệu bàn giao, hợp đồng hay hóa đơn thanh toán nào."
        />
      </div>
    );
  }

  return (
    <UserCard className="w-full border border-[#E5EAF2]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-4 mb-3">
        <h3 className="text-base font-bold text-[#10233F]">Tài liệu của tôi</h3>
        <Link 
          href="/user/documents" 
          className="text-xs text-[#C89B3C] font-semibold hover:underline transition-colors"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Documents List */}
      <div className="flex flex-col">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-[#F6F8FB]/70 border-b border-[#F0F4FA]/60 last:border-0"
          >
            {/* Left: Icon & Text Info */}
            <div className="flex items-center gap-3 min-w-0 pr-2">
              <div className="w-9 h-9 rounded-lg bg-[#F0F4FA] flex items-center justify-center text-[#061B3A] shrink-0 border border-[#061B3A]/5">
                <FileText className="w-4.5 h-4.5" />
              </div>
              
              <div className="flex flex-col min-w-0">
                <div className="flex items-center flex-wrap gap-1.5">
                  <span className="font-semibold text-xs text-[#10233F] truncate">
                    {doc.title}
                  </span>
                  {doc.isNew && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-[#C89B3C]/10 text-[#C89B3C] select-none tracking-wider">
                      Mới
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#65758B] mt-0.5 font-medium uppercase tracking-wider">
                  {doc.fileType} • {doc.fileSize}
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#061B3A] hover:underline"
              >
                Xem
              </a>
              
              <a
                href={doc.href}
                download
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#C89B3C] hover:bg-white border border-transparent hover:border-[#E8DDC8]/40 hover:shadow-sm transition-all duration-200 active:scale-95"
                title="Tải xuống tài liệu"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </UserCard>
  );
}

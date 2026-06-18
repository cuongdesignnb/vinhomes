"use client";

import { Plus, Settings } from "lucide-react";
import { AdminCard } from "@/components/admin/common/AdminCard";

interface Props {
  title: string;
  subtitle: string;
  addLabel?: string;
}

export function AdminPlaceholderPage({ title, subtitle, addLabel }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[#10233F]">{title}</h1>
        <p className="mt-1 text-sm text-[#65758B]">{subtitle}</p>
      </div>
      <AdminCard className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#F6F8FB] text-[#C89B3C]">
          <Settings className="size-7" />
        </div>
        <h2 className="mt-5 text-lg font-bold text-[#10233F]">Module sẵn sàng mở rộng</h2>
        <p className="mt-2 max-w-md text-sm text-[#65758B]">
          Chức năng này đang được phát triển và sẽ sớm được kết nối với hệ thống backend.
        </p>
        {addLabel && (
          <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#061B3A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#08254D]">
            <Plus className="size-4" /> {addLabel}
          </button>
        )}
      </AdminCard>
    </div>
  );
}

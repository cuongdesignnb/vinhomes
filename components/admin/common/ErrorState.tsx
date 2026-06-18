"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="flex min-h-[300px] items-center justify-center rounded-[18px] border border-[#E5EAF2] bg-white p-8">
      <div className="text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-red-50 text-red-500">
          <AlertTriangle className="size-6" />
        </div>
        <p className="mt-4 text-base font-bold text-[#10233F]">{message || "Không thể tải dữ liệu"}</p>
        <p className="mt-1 text-sm text-[#65758B]">Vui lòng thử lại sau ít phút.</p>
        {onRetry && (
          <button type="button" onClick={onRetry} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#061B3A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#08254D]">
            <RefreshCw className="size-4" /> Thử lại
          </button>
        )}
      </div>
    </div>
  );
}

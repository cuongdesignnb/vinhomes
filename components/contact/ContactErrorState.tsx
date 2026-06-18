"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export function ContactErrorState() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#FAF8F3] py-20">
      <div className="text-center">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-red-50 text-red-500">
          <AlertTriangle className="size-9" />
        </div>
        <h2 className="mt-6 text-2xl font-black text-[#061B3A]">Không thể tải thông tin liên hệ</h2>
        <p className="mt-2 text-sm text-[#65758B]">Vui lòng thử lại sau ít phút.</p>
        <button type="button" onClick={() => window.location.reload()} className="btn-gold mt-6 gap-2 px-6 py-3 text-sm">
          <RefreshCw className="size-4" aria-hidden />Thử lại
        </button>
      </div>
    </section>
  );
}

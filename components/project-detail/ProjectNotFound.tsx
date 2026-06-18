import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

export function ProjectNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#FAF8F3] py-20">
      <div className="text-center">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#F8F5EF] text-[#C89B3C]">
          <Search className="size-9" />
        </div>
        <h2 className="mt-6 text-2xl font-black text-[#061B3A]">Không tìm thấy dự án</h2>
        <p className="mt-2 text-sm text-[#65758B]">
          Dự án có thể đã được cập nhật hoặc không còn tồn tại.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/du-an" className="btn-gold px-6 py-3 text-sm">
            <ArrowLeft className="size-4" />
            Quay lại danh sách dự án
          </Link>
          <Link href="/tin-tuc" className="btn-outline-light border-[#E8DDC8] px-6 py-3 text-sm !text-[#061B3A]">
            Xem tin tức Vinhomes
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { FileX } from "lucide-react";

export function ArticleNotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <FileX className="size-16 text-[#C89B3C]" aria-hidden />
      <h1 className="mt-6 text-2xl font-black text-[#061B3A]">
        Không tìm thấy bài viết
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#65758B]">
        Bài viết có thể đã được cập nhật hoặc không còn tồn tại.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/tin-tuc" className="btn-gold px-6 py-3 text-sm">
          Quay lại tin tức
        </Link>
        <Link
          href="/du-an"
          className="rounded-[10px] border border-[#C89B3C] px-6 py-3 text-sm font-black text-[#C89B3C] transition hover:bg-[#C89B3C] hover:text-white"
        >
          Xem dự án Vinhomes
        </Link>
      </div>
    </section>
  );
}

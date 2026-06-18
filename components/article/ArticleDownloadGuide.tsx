import Image from "next/image";
import { Download } from "lucide-react";

export function ArticleDownloadGuide() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E8DDC8] bg-white">
      <div className="relative aspect-[16/10]">
        <Image
          src="/images/articles/investment-guide.jpg"
          alt="Cẩm nang đầu tư bất động sản Vinhomes"
          fill
          sizes="340px"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-[#061B3A]">
          Tải cẩm nang đầu tư
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#65758B]">
          Nhận bộ tài liệu chuyên sâu về thị trường
          và hướng dẫn lựa chọn đầu tư hiệu quả.
        </p>
        <button
          type="button"
          className="btn-gold mt-3 w-full gap-2 px-5 py-3 text-sm"
        >
          <Download className="size-4" aria-hidden />
          TẢI NGAY
        </button>
      </div>
    </div>
  );
}

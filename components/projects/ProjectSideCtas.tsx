import { Download, FileText, MapPinned, Send } from "lucide-react";
import Image from "next/image";

export function ProjectSideCtas() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <article className="grid min-h-[150px] overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_12px_34px_rgba(6,27,58,0.06)] sm:grid-cols-[1fr_150px]">
        <div className="p-5">
          <h3 className="text-lg font-black text-[#061B3A]">Bản đồ khu vực dự án</h3>
          <p className="mt-2 text-sm leading-6 text-[#65758B]">Khám phá vị trí các dự án Vinhomes trên toàn quốc.</p>
          <button type="button" className="btn-navy mt-4 h-10 px-5">
            Xem bản đồ
            <MapPinned aria-hidden className="size-4" />
          </button>
        </div>
        <div className="relative min-h-36">
          <Image src="/images/projects-map.jpg" alt="Bản đồ khu vực dự án Vinhomes" fill sizes="180px" className="object-cover" />
        </div>
      </article>
      <article id="quick-consult" className="rounded-2xl border border-[#E8DDC8] bg-white p-5 text-center shadow-[0_12px_34px_rgba(6,27,58,0.06)]">
        <h3 className="text-lg font-black text-[#061B3A]">Tư vấn nhanh</h3>
        <div className="mt-4 grid gap-3">
          <input className="h-10 rounded-lg border border-[#E8DDC8] px-3 text-sm outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20" placeholder="Họ và tên" />
          <input className="h-10 rounded-lg border border-[#E8DDC8] px-3 text-sm outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20" placeholder="Số điện thoại" />
          <button type="button" className="btn-gold h-10">
            Gửi thông tin
            <Send aria-hidden className="size-4" />
          </button>
        </div>
        <p className="mt-3 text-xs text-[#65758B]">Chuyên viên sẽ liên hệ trong 15 phút.</p>
      </article>
      <article className="flex items-center gap-5 rounded-2xl border border-[#E8DDC8] bg-white p-5 shadow-[0_12px_34px_rgba(6,27,58,0.06)]">
        <FileText aria-hidden className="size-20 shrink-0 text-[#C89B3C]" />
        <div>
          <h3 className="text-lg font-black text-[#061B3A]">Tải bảng giá</h3>
          <p className="mt-2 text-sm leading-6 text-[#65758B]">Nhận bảng giá chi tiết các dự án Vinhomes mới nhất.</p>
          <button type="button" className="btn-navy mt-4 h-10 px-5">
            Tải bảng giá
            <Download aria-hidden className="size-4" />
          </button>
        </div>
      </article>
    </div>
  );
}

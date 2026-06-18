import { Reveal } from "@/components/site/Reveal";
import { Search } from "lucide-react";

const filters = [
  { label: "Khu vực", options: ["Chọn khu vực", "Hà Nội", "TP.HCM", "Hải Phòng", "Quảng Ninh"] },
  { label: "Loại hình", options: ["Chọn loại hình", "Căn hộ", "Biệt thự", "Shophouse", "Nhà phố"] },
  { label: "Mức giá", options: ["Chọn mức giá", "Dưới 3 tỷ", "3 - 7 tỷ", "7 - 15 tỷ", "Trên 15 tỷ"] },
  { label: "Tình trạng", options: ["Chọn tình trạng", "Đang mở bán", "Sắp ra mắt", "Đang triển khai"] },
];

export function SearchPanel() {
  return (
    <Reveal className="relative z-20 mx-auto -mt-16 max-w-[1060px] px-4 sm:px-6 lg:-mt-[70px]">
      <form className="grid gap-4 rounded-[20px] border border-[#D8B15A]/35 bg-[#061B3A]/95 p-4 shadow-[0_24px_70px_rgba(6,27,58,0.28)] backdrop-blur md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_160px] lg:p-5">
        {filters.map((filter) => (
          <label key={filter.label} className="grid gap-2">
            <span className="text-xs font-bold text-white">{filter.label}</span>
            <select className="h-11 rounded-lg border border-white/18 bg-[#08254D] px-3 text-sm text-white outline-none transition focus:border-[#D8B15A] focus:ring-2 focus:ring-[#D8B15A]/30">
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <button type="button" className="btn-gold mt-auto h-11 gap-2 lg:self-end">
          Tìm dự án
          <Search aria-hidden className="size-4" />
        </button>
      </form>
    </Reveal>
  );
}

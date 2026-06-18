export const newsCategories = [
  { value: "", label: "Tất cả danh mục" },
  { value: "market", label: "Thị trường" },
  { value: "project", label: "Dự án" },
  { value: "policy", label: "Chính sách" },
  { value: "investment", label: "Đầu tư" },
  { value: "lifestyle", label: "Phong cách sống" },
  { value: "legal", label: "Pháp lý" },
] as const;

export const newsRegions = [
  { value: "", label: "Tất cả khu vực" },
  { value: "ha-noi", label: "Hà Nội" },
  { value: "tp-hcm", label: "TP.HCM" },
  { value: "hai-phong", label: "Hải Phòng" },
  { value: "quang-ninh", label: "Quảng Ninh" },
] as const;

export const newsTopics = [
  { value: "", label: "Tất cả chủ đề" },
  { value: "investment", label: "Đầu tư" },
  { value: "living", label: "An cư" },
  { value: "market-analysis", label: "Phân tích thị trường" },
  { value: "pricing", label: "Bảng giá" },
] as const;

export const newsSortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "oldest", label: "Cũ nhất" },
  { value: "popular", label: "Xem nhiều" },
] as const;

export const categoryColorMap: Record<string, { bg: string; text: string }> = {
  market: { bg: "bg-[#061B3A]", text: "text-white" },
  project: { bg: "bg-[#2563EB]", text: "text-white" },
  policy: { bg: "bg-[#0F9F6E]", text: "text-white" },
  investment: { bg: "bg-[#F59E0B]", text: "text-[#061B3A]" },
  lifestyle: { bg: "bg-[#0F9F6E]", text: "text-white" },
  legal: { bg: "bg-[#08254D]", text: "text-white" },
};

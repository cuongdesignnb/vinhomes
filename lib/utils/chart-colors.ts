export const ADMIN_CHART_COLORS = {
  navy: "#061B3A",
  gold: "#C89B3C",
  blue: "#2563EB",
  green: "#0F9F6E",
  orange: "#F59E0B",
  red: "#EF4444",
  purple: "#7C3AED",
};

export const ADMIN_STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  new: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  contacted: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  qualified: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  pending: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  processing: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  approved: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  open: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
  upcoming: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  handover: { bg: "bg-[#061B3A]/10", text: "text-[#061B3A]", dot: "bg-[#061B3A]" },
  draft: { bg: "bg-gray-100", text: "text-gray-600", dot: "bg-gray-400" },
};

export const STATUS_LABELS: Record<string, string> = {
  new: "Mới",
  contacted: "Đã liên hệ",
  qualified: "Tiềm năng",
  pending: "Chờ duyệt",
  processing: "Chờ xử lý",
  approved: "Đã duyệt",
  open: "Đang mở bán",
  upcoming: "Sắp mở bán",
  handover: "Đã bàn giao",
  draft: "Bản nháp",
};

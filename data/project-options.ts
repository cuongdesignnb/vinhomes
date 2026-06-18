export const projectAreas = ["Hà Nội", "TP.HCM", "Hải Phòng", "Quảng Ninh", "Hưng Yên", "Thanh Hóa", "Bình Dương"];

export const projectTypes = ["Căn hộ", "Biệt thự", "Shophouse", "Penthouse"];

export const projectStatuses = ["Đang mở bán", "Sắp ra mắt", "Đang triển khai", "Cao cấp"];

export const projectAmenities = ["Công viên", "Trường học", "Bến du thuyền", "Trung tâm thương mại", "Bể bơi"];

export const priceRanges = [
  { label: "Dưới 40 triệu/m²", value: "under-40" },
  { label: "40 - 60 triệu/m²", value: "40-60" },
  { label: "60 - 90 triệu/m²", value: "60-90" },
  { label: "Trên 90 triệu/m²", value: "over-90" },
];

export const sortOptions = [
  { label: "Mới nhất", value: "newest" },
  { label: "Giá tăng dần", value: "price-asc" },
  { label: "Giá giảm dần", value: "price-desc" },
  { label: "Tên dự án", value: "name" },
];

export const quickFilterChips = [
  { label: "Đang mở bán", key: "status", value: "Đang mở bán" },
  { label: "Sắp ra mắt", key: "status", value: "Sắp ra mắt" },
  { label: "Đang triển khai", key: "status", value: "Đang triển khai" },
  { label: "Căn hộ", key: "type", value: "Căn hộ" },
  { label: "Biệt thự", key: "type", value: "Biệt thự" },
  { label: "Shophouse", key: "type", value: "Shophouse" },
  { label: "TP.HCM", key: "area", value: "TP.HCM" },
  { label: "Hà Nội", key: "area", value: "Hà Nội" },
] as const;

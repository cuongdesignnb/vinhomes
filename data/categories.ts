export type PropertyCategory = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: "apartment" | "villa" | "shophouse" | "townhouse" | "office" | "investment";
};

export const categories: PropertyCategory[] = [
  {
    id: 1,
    title: "Căn hộ",
    description: "Hiện đại, tiện nghi",
    image: "/images/category-apartment.jpg",
    icon: "apartment",
  },
  {
    id: 2,
    title: "Biệt thự",
    description: "Đẳng cấp, riêng tư",
    image: "/images/category-villa.jpg",
    icon: "villa",
  },
  {
    id: 3,
    title: "Shophouse",
    description: "Kinh doanh sầm uất",
    image: "/images/category-shophouse.jpg",
    icon: "shophouse",
  },
  {
    id: 4,
    title: "Nhà phố",
    description: "Thiết kế tối ưu",
    image: "/images/category-townhouse.jpg",
    icon: "townhouse",
  },
  {
    id: 5,
    title: "Văn phòng",
    description: "Chuyên nghiệp",
    image: "/images/category-office.jpg",
    icon: "office",
  },
  {
    id: 6,
    title: "Sản phẩm đầu tư",
    description: "Sinh lời bền vững",
    image: "/images/category-investment.jpg",
    icon: "investment",
  },
];

export type Project = {
  id: number;
  name: string;
  slug: string;
  location: string;
  price: string;
  status: "Đang mở bán" | "Sắp ra mắt" | "Đang triển khai";
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Vinhomes Ocean Park",
    slug: "vinhomes-ocean-park",
    location: "Gia Lâm, Hà Nội",
    price: "Giá từ 45 triệu/m²",
    status: "Đang mở bán",
    image: "/images/project-ocean-park.jpg",
    href: "/du-an/vinhomes-ocean-park",
  },
  {
    id: 2,
    name: "Vinhomes Smart City",
    slug: "vinhomes-smart-city",
    location: "Nam Từ Liêm, Hà Nội",
    price: "Giá từ 38 triệu/m²",
    status: "Đang mở bán",
    image: "/images/project-smart-city.jpg",
    href: "/du-an/vinhomes-smart-city",
  },
  {
    id: 3,
    name: "Vinhomes Grand Park",
    slug: "vinhomes-grand-park",
    location: "TP. Thủ Đức, TP.HCM",
    price: "Giá từ 55 triệu/m²",
    status: "Sắp ra mắt",
    image: "/images/project-grand-park.jpg",
    href: "/du-an/vinhomes-grand-park",
  },
  {
    id: 4,
    name: "Vinhomes Golden Avenue",
    slug: "vinhomes-golden-avenue",
    location: "Móng Cái, Quảng Ninh",
    price: "Giá từ 35 triệu/m²",
    status: "Đang mở bán",
    image: "/images/project-golden-avenue.jpg",
    href: "/du-an/vinhomes-golden-avenue",
  },
  {
    id: 5,
    name: "Vinhomes Royal Island",
    slug: "vinhomes-royal-island",
    location: "Vũ Yên, Hải Phòng",
    price: "Giá từ 60 triệu/m²",
    status: "Sắp ra mắt",
    image: "/images/project-royal-island.jpg",
    href: "/du-an/vinhomes-royal-island",
  },
  {
    id: 6,
    name: "Vinhomes Cổ Loa",
    slug: "vinhomes-co-loa",
    location: "Đông Anh, Hà Nội",
    price: "Giá từ 40 triệu/m²",
    status: "Đang triển khai",
    image: "/images/project-co-loa.jpg",
    href: "/du-an/vinhomes-co-loa",
  },
];

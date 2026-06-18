export type ProjectStatus = "Đang mở bán" | "Sắp ra mắt" | "Đang triển khai" | "Cao cấp";
export type ProjectArea = "Hà Nội" | "TP.HCM" | "Hải Phòng" | "Quảng Ninh" | "Hưng Yên" | "Thanh Hóa" | "Bình Dương";
export type ProjectType = "Căn hộ" | "Biệt thự" | "Shophouse" | "Penthouse";

export type ProjectListItem = {
  id: number;
  name: string;
  slug: string;
  location: string;
  area: ProjectArea;
  price: number;
  priceLabel: string;
  status: ProjectStatus;
  types: ProjectType[];
  description: string;
  image: string;
  href: string;
  amenities: string[];
  scale: string;
};

export type ProjectFilters = {
  area?: string;
  type?: string;
  price?: string;
  status?: string;
  amenity?: string;
  sort?: string;
  q?: string;
};

export const projectList: ProjectListItem[] = [
  {
    id: 1,
    name: "Vinhomes Ocean Park",
    slug: "vinhomes-ocean-park",
    location: "Gia Lâm, Hà Nội",
    area: "Hà Nội",
    price: 45,
    priceLabel: "Giá từ 45 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Thành phố biển hồ đáng cấp phía Đông Hà Nội, không gian sống xanh, tiện ích all-in-one.",
    image: "/images/project-ocean-park.jpg",
    href: "/du-an/vinhomes-ocean-park",
    amenities: ["Biển hồ 24,5ha", "Công viên", "Trường học"],
    scale: "420 ha",
  },
  {
    id: 2,
    name: "Vinhomes Smart City",
    slug: "vinhomes-smart-city",
    location: "Nam Từ Liêm, Hà Nội",
    area: "Hà Nội",
    price: 38,
    priceLabel: "Giá từ 38 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Đại đô thị thông minh đầu tiên tại Việt Nam với công nghệ hiện đại, tiện ích hoàn hảo.",
    image: "/images/project-smart-city.jpg",
    href: "/du-an/vinhomes-smart-city",
    amenities: ["Công viên trung tâm", "Vincom Mega Mall", "Trường học"],
    scale: "280 ha",
  },
  {
    id: 3,
    name: "Vinhomes Grand Park",
    slug: "vinhomes-grand-park",
    location: "TP. Thủ Đức, TP.HCM",
    area: "TP.HCM",
    price: 55,
    priceLabel: "Giá từ 55 triệu/m²",
    status: "Sắp ra mắt",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Đại đô thị đẳng cấp bậc nhất TP. Thủ Đức với quy mô hàng đầu Việt Nam.",
    image: "/images/project-grand-park.jpg",
    href: "/du-an/vinhomes-grand-park",
    amenities: ["Công viên 36ha", "Vincom Mega Mall", "Bến du thuyền"],
    scale: "271 ha",
  },
  {
    id: 4,
    name: "Vinhomes Golden Avenue",
    slug: "vinhomes-golden-avenue",
    location: "Móng Cái, Quảng Ninh",
    area: "Quảng Ninh",
    price: 35,
    priceLabel: "Giá từ 35 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Shophouse", "Biệt thự"],
    description: "Tâm điểm giao thương quốc tế, trung tâm kinh tế mới tại cửa ngõ Việt - Trung.",
    image: "/images/project-golden-avenue.jpg",
    href: "/du-an/vinhomes-golden-avenue",
    amenities: ["Cửa khẩu Bắc Luân II", "Trung tâm thương mại", "Khu phố thương mại"],
    scale: "116 ha",
  },
  {
    id: 5,
    name: "Vinhomes Royal Island",
    slug: "vinhomes-royal-island",
    location: "Vũ Yên, Hải Phòng",
    area: "Hải Phòng",
    price: 60,
    priceLabel: "Giá từ 60 triệu/m²",
    status: "Sắp ra mắt",
    types: ["Biệt thự", "Shophouse", "Căn hộ"],
    description: "Thành phố đảo hoàng gia - biểu tượng sống mới bên dòng sông Cấm.",
    image: "/images/project-royal-island.jpg",
    href: "/du-an/vinhomes-royal-island",
    amenities: ["Sân golf 36 hố", "Bến du thuyền", "Công viên ven sông"],
    scale: "877 ha",
  },
  {
    id: 6,
    name: "Vinhomes Cổ Loa",
    slug: "vinhomes-co-loa",
    location: "Đông Anh, Hà Nội",
    area: "Hà Nội",
    price: 40,
    priceLabel: "Giá từ 40 triệu/m²",
    status: "Đang triển khai",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Đô thị sinh thái ven sông Hồng, kết nối di sản và tương lai.",
    image: "/images/project-co-loa.jpg",
    href: "/du-an/vinhomes-co-loa",
    amenities: ["Công viên văn hóa", "Trung tâm triển lãm", "Sông Hồng"],
    scale: "385 ha",
  },
  {
    id: 7,
    name: "Vinhomes Green City",
    slug: "vinhomes-green-city",
    location: "Hưng Yên",
    area: "Hưng Yên",
    price: 32,
    priceLabel: "Giá từ 32 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Đại đô thị xanh kiểu mẫu tại cửa ngõ phía Đông kết nối Hà Nội - Hưng Yên.",
    image: "/images/project-green-city.jpg",
    href: "/du-an/vinhomes-green-city",
    amenities: ["Công viên xanh", "Trung tâm thương mại", "Trường học"],
    scale: "197 ha",
  },
  {
    id: 8,
    name: "Vinhomes Star City",
    slug: "vinhomes-star-city",
    location: "Thanh Hóa",
    area: "Thanh Hóa",
    price: 29,
    priceLabel: "Giá từ 29 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Biệt thự", "Shophouse"],
    description: "Biểu tượng đô thị mới của xứ Thanh, sống tiện nghi - kết nối thịnh vượng.",
    image: "/images/project-star-city.jpg",
    href: "/du-an/vinhomes-star-city",
    amenities: ["Quảng trường", "Trung tâm thương mại", "Trường học"],
    scale: "147 ha",
  },
  {
    id: 9,
    name: "Vinhomes Central Park",
    slug: "vinhomes-central-park",
    location: "Bình Thạnh, TP.HCM",
    area: "TP.HCM",
    price: 85,
    priceLabel: "Giá từ 85 triệu/m²",
    status: "Cao cấp",
    types: ["Căn hộ", "Biệt thự", "Penthouse"],
    description: "Biểu tượng sống đẳng cấp quốc tế giữa lòng Thành phố Hồ Chí Minh.",
    image: "/images/project-central-park.jpg",
    href: "/du-an/vinhomes-central-park",
    amenities: ["Công viên 14ha", "Bến du thuyền", "Trung tâm thương mại"],
    scale: "43 ha",
  },
  {
    id: 10,
    name: "Vinhomes Riverside",
    slug: "vinhomes-riverside",
    location: "Long Biên, Hà Nội",
    area: "Hà Nội",
    price: 120,
    priceLabel: "Giá từ 120 triệu/m²",
    status: "Cao cấp",
    types: ["Biệt thự", "Shophouse"],
    description: "Khu đô thị biệt thự ven sông biểu tượng tại cửa ngõ Đông Bắc Hà Nội.",
    image: "/images/project-golden-avenue.jpg",
    href: "/du-an/vinhomes-riverside",
    amenities: ["Kênh đào sinh thái", "Trường học", "Trung tâm thương mại"],
    scale: "183 ha",
  },
  {
    id: 11,
    name: "Vinhomes Symphony",
    slug: "vinhomes-symphony",
    location: "Long Biên, Hà Nội",
    area: "Hà Nội",
    price: 58,
    priceLabel: "Giá từ 58 triệu/m²",
    status: "Đang mở bán",
    types: ["Căn hộ", "Penthouse"],
    description: "Tổ hợp căn hộ hiện đại trong quần thể sinh thái Vinhomes Riverside.",
    image: "/images/project-smart-city.jpg",
    href: "/du-an/vinhomes-symphony",
    amenities: ["Hồ cảnh quan", "Bể bơi", "Trường học"],
    scale: "4.3 ha",
  },
  {
    id: 12,
    name: "Vinhomes Imperia",
    slug: "vinhomes-imperia",
    location: "Hải Phòng",
    area: "Hải Phòng",
    price: 52,
    priceLabel: "Giá từ 52 triệu/m²",
    status: "Đang triển khai",
    types: ["Biệt thự", "Shophouse", "Căn hộ"],
    description: "Đô thị phức hợp phong cách châu Âu tại trung tâm thành phố cảng.",
    image: "/images/project-royal-island.jpg",
    href: "/du-an/vinhomes-imperia",
    amenities: ["Phố thương mại", "Công viên", "Trường học"],
    scale: "78 ha",
  },
];

function matchesPrice(project: ProjectListItem, price?: string) {
  if (!price) return true;
  if (price === "under-40") return project.price < 40;
  if (price === "40-60") return project.price >= 40 && project.price <= 60;
  if (price === "60-90") return project.price > 60 && project.price <= 90;
  if (price === "over-90") return project.price > 90;
  return true;
}

export function filterProjects(filters: ProjectFilters) {
  const q = filters.q?.trim().toLowerCase();
  const filtered = projectList.filter((project) => {
    const matchesQuery =
      !q ||
      project.name.toLowerCase().includes(q) ||
      project.location.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q);

    return (
      matchesQuery &&
      (!filters.area || project.area === filters.area) &&
      (!filters.type || project.types.includes(filters.type as ProjectType)) &&
      (!filters.status || project.status === filters.status) &&
      (!filters.amenity || project.amenities.some((item) => item.toLowerCase().includes(filters.amenity!.toLowerCase()))) &&
      matchesPrice(project, filters.price)
    );
  });

  return filtered.sort((a, b) => {
    if (filters.sort === "price-asc") return a.price - b.price;
    if (filters.sort === "price-desc") return b.price - a.price;
    if (filters.sort === "name") return a.name.localeCompare(b.name, "vi");
    return a.id - b.id;
  });
}

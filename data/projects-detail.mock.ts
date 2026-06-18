import type { ProjectDetail } from "@/features/projects/project-detail.types";

export const mockOceanPark: ProjectDetail = {
  id: "vinhomes-ocean-park",
  name: "Vinhomes Ocean Park",
  slug: "vinhomes-ocean-park",
  status: "open",
  statusLabel: "Đang mở bán",
  subtitle: "Đại đô thị biển hồ đẳng cấp quốc tế tại Gia Lâm, Hà Nội",
  location: "Gia Lâm, Hà Nội",
  priceText: "Giá từ 45 triệu/m²",
  typeText: "Căn hộ - Biệt thự - Shophouse",
  heroImage: "/images/projects/detail/ocean-park-hero.jpg",
  heroImageAlt: "Tổng quan dự án Vinhomes Ocean Park tại Gia Lâm",
  overviewImage: "/images/projects/detail/ocean-park-overview.jpg",
  overviewImageAlt: "Phối cảnh tổng thể Vinhomes Ocean Park",
  description: "Vinhomes Ocean Park là đại đô thị all-in-one đẳng cấp quốc tế, kiến tạo chuẩn sống nghỉ dưỡng giữa lòng phố thị. Sở hữu biển hồ nước mặn 6,1ha và hồ nước ngọt 24,5ha cùng hệ sinh thái tiện ích hoàn chỉnh, dự án mang đến trải nghiệm sống trọn vẹn cho cư dân.",
  facts: [
    { id: "f1", label: "Tên dự án", value: "Vinhomes Ocean Park", icon: "Building2" },
    { id: "f2", label: "Vị trí", value: "Gia Lâm, Hà Nội", icon: "MapPin" },
    { id: "f3", label: "Loại hình", value: "Căn hộ - Biệt thự - Shophouse", icon: "Home" },
    { id: "f4", label: "Quy mô", value: "420 ha", icon: "Maximize2" },
    { id: "f5", label: "Tiêu chuẩn bàn giao", value: "Liền tường cao cấp", icon: "CheckCircle2" },
    { id: "f6", label: "Pháp lý", value: "Sổ hồng lâu dài", icon: "Shield" },
  ],
  highlights: [
    { id: "h1", title: "Vị trí chiến lược", description: "Kết nối thuận tiện tới trung tâm và các khu vực trọng điểm.", icon: "MapPin" },
    { id: "h2", title: "Hệ sinh thái tiện ích", description: "Đầy đủ, đẳng cấp, khép kín.", icon: "Star" },
    { id: "h3", title: "Cộng đồng văn minh", description: "Cư dân tinh hoa, an ninh 24/7, quản lý chuyên nghiệp.", icon: "Users" },
    { id: "h4", title: "Tiềm năng đầu tư", description: "Gia tăng giá trị bền vững, thanh khoản cao.", icon: "TrendingUp" },
  ],
  connections: [
    { id: "c1", place: "Trung tâm TP. Hà Nội", time: "20 phút" },
    { id: "c2", place: "Sân bay Nội Bài", time: "35 phút" },
    { id: "c3", place: "Hồ Hoàn Kiếm", time: "25 phút" },
    { id: "c4", place: "Cầu Chương Dương", time: "15 phút" },
  ],
  locationImage: "/images/projects/detail/ocean-park-location.jpg",
  locationImageAlt: "Vị trí kết nối Vinhomes Ocean Park",
  masterplanImage: "/images/projects/detail/ocean-park-masterplan.jpg",
  masterplanImageAlt: "Mặt bằng tổng thể Vinhomes Ocean Park",
  masterplanLegend: [
    "Phân khu The Sapphire",
    "Phân khu The Pavilion",
    "Phân khu The Zenpark",
    "Phân khu The Bayfront",
    "Phân khu The Ocean View",
    "Khu biển hồ và công viên",
  ],
  typicalLayoutImage: "/images/projects/detail/ocean-park-layout.jpg",
  typicalLayoutAlt: "Mặt bằng điển hình căn hộ 2PN+1",
  products: [
    { id: "p1", title: "Căn hộ cao cấp", description: "Thiết kế thông minh, tối ưu công năng, phong cách hiện đại, view đẹp.", image: "/images/projects/detail/product-apartment.jpg", href: "#" },
    { id: "p2", title: "Biệt thự thấp tầng", description: "Không gian sống đẳng cấp, riêng tư, kiến trúc sang trọng.", image: "/images/projects/detail/product-villa.jpg", href: "#" },
    { id: "p3", title: "Shophouse thương mại", description: "Vị trí trung tâm, mặt tiền rộng, khai thác kinh doanh bền vững.", image: "/images/projects/detail/product-shophouse.jpg", href: "#" },
  ],
  amenities: [
    { id: "a1", title: "Công viên và cây xanh", image: "/images/projects/detail/amenity-park.jpg", icon: "TreePine" },
    { id: "a2", title: "Hồ điều hòa và biển hồ", image: "/images/projects/detail/amenity-lake.jpg", icon: "Waves" },
    { id: "a3", title: "Hệ thống giáo dục Vinschool", image: "/images/projects/detail/amenity-school.jpg", icon: "GraduationCap" },
    { id: "a4", title: "Trung tâm thương mại", image: "/images/projects/detail/amenity-mall.jpg", icon: "ShoppingBag" },
    { id: "a5", title: "Bể bơi trong nhà và ngoài trời", image: "/images/projects/detail/amenity-pool.jpg", icon: "Droplets" },
    { id: "a6", title: "Khu thể thao đa năng", image: "/images/projects/detail/amenity-sport.jpg", icon: "Dumbbell" },
  ],
  policies: [
    { id: "pol1", title: "Ưu đãi thanh toán", value: "10%", description: "Chiết khấu lên đến 10%" },
    { id: "pol2", title: "Hỗ trợ vay", value: "0%", description: "Lãi suất 0% trong 24 tháng" },
    { id: "pol3", title: "Ân hạn gốc", value: "24", description: "Lên đến 24 tháng" },
  ],
  investmentReasons: [
    { id: "inv1", title: "Gia tăng giá trị", value: "15%/năm", description: "Trung bình" },
    { id: "inv2", title: "Thanh khoản cao", value: "Top 3", description: "Dễ dàng chuyển nhượng và cho thuê" },
    { id: "inv3", title: "Khai thác cho thuê", value: "6-8%/năm", description: "Lợi nhuận ước tính" },
    { id: "inv4", title: "Hạ tầng bứt phá", value: "+450km", description: "Kết nối đồng bộ, gia tăng giá trị" },
  ],
  gallery: [
    { id: "g1", src: "/images/projects/detail/gallery-1.jpg", alt: "Phối cảnh Vinhomes Ocean Park" },
    { id: "g2", src: "/images/projects/detail/gallery-2.jpg", alt: "Tiện ích Vinhomes Ocean Park" },
    { id: "g3", src: "/images/projects/detail/gallery-3.jpg", alt: "Cảnh quan Vinhomes Ocean Park" },
    { id: "g4", src: "/images/projects/detail/gallery-4.jpg", alt: "Không gian sống Vinhomes Ocean Park" },
  ],
  faqs: [
    { id: "faq1", question: "Dự án Vinhomes Ocean Park có những loại hình sản phẩm nào?", answer: "Dự án phát triển đa dạng sản phẩm gồm căn hộ cao tầng, biệt thự, nhà phố thương mại và shophouse, phù hợp nhiều nhu cầu an cư và đầu tư." },
    { id: "faq2", question: "Tiến độ thanh toán dự án như thế nào?", answer: "Tiến độ thanh toán linh hoạt theo từng giai đoạn, có chính sách ưu đãi và hỗ trợ tài chính tùy thời điểm mở bán." },
    { id: "faq3", question: "Dự án có hỗ trợ vay ngân hàng không?", answer: "Khách hàng có thể được hỗ trợ vay ngân hàng với chính sách lãi suất ưu đãi theo từng chương trình bán hàng." },
    { id: "faq4", question: "Thủ tục đặt cọc và ký hợp đồng mua bán ra sao?", answer: "Quy trình đặt cọc và ký hợp đồng được tư vấn chi tiết bởi chuyên viên, đảm bảo minh bạch và đúng quy định." },
  ],
  seoTitle: "Vinhomes Ocean Park | Bảng giá, vị trí, mặt bằng và chính sách mới nhất",
  seoDescription: "Vinhomes Ocean Park tại Gia Lâm, Hà Nội: cập nhật tổng quan, vị trí, mặt bằng, tiện ích, bảng giá, chính sách bán hàng và tư vấn đầu tư mới nhất.",
};

export function getMockProjectDetailBySlug(slug: string): ProjectDetail | null {
  if (slug === mockOceanPark.slug) return mockOceanPark;
  return null;
}

export function getAllMockProjectSlugs(): { slug: string }[] {
  return [{ slug: mockOceanPark.slug }];
}

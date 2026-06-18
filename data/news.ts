export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  image: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Thị trường bất động sản 2026: Cơ hội & triển vọng",
    excerpt:
      "Phân tích xu hướng và cơ hội đầu tư bất động sản cao cấp trong năm 2026.",
    tag: "Thị trường",
    date: "10/05/2026",
    image: "/images/news-1.jpg",
    href: "/tin-tuc/thi-truong-bat-dong-san-2026",
  },
  {
    id: 2,
    title: "Vinhomes Royal Island - Điểm đến sống thượng lưu tại Hải Phòng",
    excerpt:
      "Khám phá tiêu chuẩn sống đảo nghỉ dưỡng đẳng cấp bậc nhất miền Bắc.",
    tag: "Dự án",
    date: "06/05/2026",
    image: "/images/news-2.jpg",
    href: "/tin-tuc/vinhomes-royal-island-hai-phong",
  },
  {
    id: 3,
    title: "Chính sách bán hàng mới nhất từ Vinhomes tháng 5/2026",
    excerpt:
      "Cập nhật ưu đãi hấp dẫn, hỗ trợ vay và quà tặng đặc biệt trong tháng 5.",
    tag: "Chính sách",
    date: "04/05/2026",
    image: "/images/news-3.jpg",
    href: "/tin-tuc/chinh-sach-ban-hang-vinhomes",
  },
];

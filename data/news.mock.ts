import type {
  NewsArticle,
  NewsFilters,
  NewsListResponse,
} from "@/features/news/news.types";

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Thị trường bất động sản 2026: xu hướng đầu tư an toàn",
    slug: "thi-truong-bat-dong-san-2026-xu-huong-dau-tu-an-toan",
    excerpt:
      "Phân tích bức tranh thị trường 2026 với những tín hiệu tích cực từ vĩ mô, hạ tầng và nhu cầu ở thực tăng cao.",
    category: "market",
    categoryLabel: "Thị trường",
    region: "ha-noi",
    image: "/images/news/featured-market.jpg",
    imageAlt: "Thị trường bất động sản 2026",
    author: "Vinhomes Research",
    publishedAt: "05/05/2026",
    readingTime: "7 phút đọc",
    href: "/tin-tuc/thi-truong-bat-dong-san-2026-xu-huong-dau-tu-an-toan",
    isFeatured: true,
    isPopular: true,
    viewCount: 15200,
  },
  {
    id: "2",
    title:
      "Vinhomes Ocean Park tiếp tục hút khách nhờ tiện ích đồng bộ",
    slug: "vinhomes-ocean-park-tiep-tuc-hut-khach-nho-tien-ich-dong-bo",
    excerpt:
      "Cộng đồng cư dân đông đúc, tiện ích toàn diện và không gian sống xanh là điểm cộng vượt trội của dự án.",
    category: "project",
    categoryLabel: "Dự án",
    image: "/images/news/ocean-park-news.jpg",
    imageAlt: "Vinhomes Ocean Park tiện ích đồng bộ",
    author: "Vinhomes News",
    publishedAt: "04/05/2026",
    readingTime: "5 phút đọc",
    href: "/tin-tuc/vinhomes-ocean-park-tiep-tuc-hut-khach-nho-tien-ich-dong-bo",
    isFeatured: true,
    viewCount: 12800,
  },
  {
    id: "3",
    title:
      "Chính sách bán hàng mới nhất cho dự án Vinhomes Royal Island",
    slug: "chinh-sach-ban-hang-moi-nhat-cho-du-an-vinhomes-royal-island",
    excerpt:
      "Cập nhật chương trình ưu đãi, tiến độ thanh toán và hỗ trợ tài chính đặc biệt trong tháng 5/2026.",
    category: "policy",
    categoryLabel: "Chính sách",
    image: "/images/news/royal-island-policy.jpg",
    imageAlt: "Chính sách bán hàng Vinhomes Royal Island",
    author: "Vinhomes Sales",
    publishedAt: "03/05/2026",
    readingTime: "4 phút đọc",
    href: "/tin-tuc/chinh-sach-ban-hang-moi-nhat-cho-du-an-vinhomes-royal-island",
    isFeatured: true,
    viewCount: 11500,
  },
  {
    id: "4",
    title: "5 tiêu chí chọn căn hộ cao cấp cho gia đình trẻ",
    slug: "5-tieu-chi-chon-can-ho-cao-cap-cho-gia-dinh-tre",
    excerpt:
      "Hướng dẫn lựa chọn căn hộ phù hợp với nhu cầu, ngân sách và tiềm năng tăng giá trị cho các gia đình trẻ.",
    category: "investment",
    categoryLabel: "Đầu tư",
    image: "/images/news/article-1.jpg",
    imageAlt: "Tiêu chí chọn căn hộ cao cấp cho gia đình trẻ",
    author: "Chuyên gia Vinhomes",
    publishedAt: "02/05/2026",
    readingTime: "6 phút đọc",
    href: "/tin-tuc/5-tieu-chi-chon-can-ho-cao-cap-cho-gia-dinh-tre",
    viewCount: 9800,
  },
  {
    id: "5",
    title:
      "Vì sao shophouse Vinhomes vẫn là kênh đầu tư hấp dẫn",
    slug: "vi-sao-shophouse-vinhomes-van-la-kenh-dau-tu-hap-dan",
    excerpt:
      "Phân tích mức sinh lời, dòng tiền cho thuê và tiềm năng tăng giá của shophouse trong các dự án Vinhomes.",
    category: "investment",
    categoryLabel: "Đầu tư",
    image: "/images/news/article-2.jpg",
    imageAlt: "Shophouse Vinhomes kênh đầu tư hấp dẫn",
    author: "Vinhomes Research",
    publishedAt: "01/05/2026",
    readingTime: "5 phút đọc",
    href: "/tin-tuc/vi-sao-shophouse-vinhomes-van-la-kenh-dau-tu-hap-dan",
    viewCount: 10200,
  },
  {
    id: "6",
    title:
      "Toàn cảnh hạ tầng khu Đông Hà Nội và tiềm năng tăng giá",
    slug: "toan-canh-ha-tang-khu-dong-ha-noi-va-tiem-nang-tang-gia",
    excerpt:
      "Hạ tầng đồng bộ khu Đông Hà Nội lên bộ chỉnh đô Đông phát triển giao thông công trình trọng điểm.",
    category: "market",
    categoryLabel: "Thị trường",
    region: "ha-noi",
    image: "/images/news/article-3.jpg",
    imageAlt: "Hạ tầng khu Đông Hà Nội",
    author: "Vinhomes News",
    publishedAt: "30/04/2026",
    readingTime: "6 phút đọc",
    href: "/tin-tuc/toan-canh-ha-tang-khu-dong-ha-noi-va-tiem-nang-tang-gia",
    viewCount: 8900,
  },
  {
    id: "7",
    title: "Phong cách sống chuẩn đô thị xanh tại Vinhomes",
    slug: "phong-cach-song-chuan-do-thi-xanh-tai-vinhomes",
    excerpt:
      "Khám phá cuộc sống hiện đại, cộng đồng văn minh, tiện ích đồng bộ tại các khu đô thị Vinhomes.",
    category: "lifestyle",
    categoryLabel: "Phong cách sống",
    image: "/images/news/article-4.jpg",
    imageAlt: "Phong cách sống đô thị xanh Vinhomes",
    author: "Vinhomes Lifestyle",
    publishedAt: "29/04/2026",
    readingTime: "4 phút đọc",
    href: "/tin-tuc/phong-cach-song-chuan-do-thi-xanh-tai-vinhomes",
    viewCount: 7600,
  },
  {
    id: "8",
    title: "Những lưu ý pháp lý khi mua bất động sản cao cấp",
    slug: "nhung-luu-y-phap-ly-khi-mua-bat-dong-san-cao-cap",
    excerpt:
      "Bộ quyền sở hữu và pháp lý là điều quan trọng khi mua bất động sản, cần nắm rõ quy định để giảm rủi ro.",
    category: "legal",
    categoryLabel: "Pháp lý",
    image: "/images/news/article-5.jpg",
    imageAlt: "Lưu ý pháp lý mua bất động sản cao cấp",
    author: "Vinhomes Legal",
    publishedAt: "28/04/2026",
    readingTime: "5 phút đọc",
    href: "/tin-tuc/nhung-luu-y-phap-ly-khi-mua-bat-dong-san-cao-cap",
    viewCount: 8200,
  },
  {
    id: "9",
    title: "Bảng giá cập nhật các dự án Vinhomes nổi bật",
    slug: "bang-gia-cap-nhat-cac-du-an-vinhomes-noi-bat",
    excerpt:
      "Tổng hợp bảng giá mới nhất từ các dự án Vinhomes nổi bật trên toàn quốc.",
    category: "market",
    categoryLabel: "Thị trường",
    image: "/images/news/article-6.jpg",
    imageAlt: "Bảng giá dự án Vinhomes nổi bật",
    author: "Vinhomes News",
    publishedAt: "27/04/2026",
    readingTime: "4 phút đọc",
    href: "/tin-tuc/bang-gia-cap-nhat-cac-du-an-vinhomes-noi-bat",
    isPopular: true,
    viewCount: 14300,
  },
  {
    id: "10",
    title: "Cơ hội đầu tư BĐS khu Đông Hà Nội năm 2026",
    slug: "co-hoi-dau-tu-bds-khu-dong-ha-noi-nam-2026",
    excerpt:
      "Khu Đông Hà Nội là tâm điểm đầu tư BĐS với hạ tầng đồng bộ, quy hoạch bài bản và các dự án lớn của Vinhomes.",
    category: "investment",
    categoryLabel: "Đầu tư",
    region: "ha-noi",
    image: "/images/news/article-7.jpg",
    imageAlt: "Đầu tư BĐS khu Đông Hà Nội 2026",
    author: "Vinhomes Research",
    publishedAt: "26/04/2026",
    readingTime: "6 phút đọc",
    href: "/tin-tuc/co-hoi-dau-tu-bds-khu-dong-ha-noi-nam-2026",
    viewCount: 9100,
  },
  {
    id: "11",
    title: "Top 5 dự án Vinhomes đáng sống nhất hiện nay",
    slug: "top-5-du-an-vinhomes-dang-song-nhat-hien-nay",
    excerpt:
      "Danh sách những dự án Vinhomes được đánh giá cao về chất lượng sống, tiện ích và cộng đồng cư dân.",
    category: "project",
    categoryLabel: "Dự án",
    image: "/images/news/article-8.jpg",
    imageAlt: "Top 5 dự án Vinhomes đáng sống nhất",
    author: "Vinhomes News",
    publishedAt: "25/04/2026",
    readingTime: "5 phút đọc",
    href: "/tin-tuc/top-5-du-an-vinhomes-dang-song-nhat-hien-nay",
    isPopular: true,
    viewCount: 13500,
  },
  {
    id: "12",
    title: "Kinh nghiệm mua nhà lần đầu cần biết",
    slug: "kinh-nghiem-mua-nha-lan-dau-can-biet",
    excerpt:
      "Những điều cần biết khi lần đầu mua bất động sản, từ chọn dự án, xem pháp lý đến đàm phán hợp đồng.",
    category: "legal",
    categoryLabel: "Pháp lý",
    image: "/images/news/article-9.jpg",
    imageAlt: "Kinh nghiệm mua nhà lần đầu",
    author: "Vinhomes Legal",
    publishedAt: "24/04/2026",
    readingTime: "5 phút đọc",
    href: "/tin-tuc/kinh-nghiem-mua-nha-lan-dau-can-biet",
    isPopular: true,
    viewCount: 11800,
  },
];

// Keep backward-compatible export for existing code
export const popularArticles = mockNewsArticles.filter(
  (a) => a.isPopular
);

export function getMockNewsArticles(filters: NewsFilters): NewsListResponse {
  let filtered = [...mockNewsArticles];

  if (filters.keyword) {
    const kw = filters.keyword.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(kw) ||
        a.excerpt.toLowerCase().includes(kw)
    );
  }

  if (filters.category) {
    filtered = filtered.filter((a) => a.category === filters.category);
  }

  if (filters.region) {
    filtered = filtered.filter((a) => a.region === filters.region);
  }

  if (filters.topic) {
    filtered = filtered.filter((a) => a.topic === filters.topic);
  }

  if (filters.sort === "oldest") {
    filtered.reverse();
  } else if (filters.sort === "popular") {
    filtered.sort((a, b) => (b.viewCount ?? 0) - (a.viewCount ?? 0));
  }

  const page = filters.page ?? 1;
  const limit = filters.limit ?? 12;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return { data, total, page, limit, totalPages };
}

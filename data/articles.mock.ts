import type {
  Article,
  RelatedArticle,
} from "@/features/articles/article.types";

/* ------------------------------------------------------------------ */
/*  Author                                                             */
/* ------------------------------------------------------------------ */

const authorVinhomesResearch = {
  id: "author-1",
  name: "Vinhomes Research",
  title: "Ban nghien cuu thi truong",
  avatar: "/images/articles/author-avatar.jpg",
  bio: "Bo phan nghien cuu thi truong cua Vinhomes cung cap cac bao cao, phan tich chuyen sau va goc nhin chuyen gia ve bat dong san.",
  verified: true,
  socials: {
    facebook: "https://facebook.com/vinhomes",
    linkedin: "https://linkedin.com/company/vinhomes",
    youtube: "https://youtube.com/vinhomes",
  },
};

// Fix Vietnamese diacritics directly
authorVinhomesResearch.title =
  "Bộ phận nghiên cứu thị trường";
authorVinhomesResearch.bio =
  "Bộ phận nghiên cứu thị trường của Vinhomes cung cấp các báo cáo, phân tích chuyên sâu và góc nhìn chuyên gia về bất động sản.";

/* ------------------------------------------------------------------ */
/*  Main article                                                       */
/* ------------------------------------------------------------------ */

export const mockArticle: Article = {
  id: "article-main",
  title:
    "Thị trường bất động sản 2026: xu hướng đầu tư an toàn và cơ hội bền vững",
  slug: "thi-truong-bat-dong-san-2026-xu-huong-dau-tu-an-toan-va-co-hoi-ben-vung",
  excerpt:
    "Phân tích bức tranh thị trường bất động sản năm 2026, các động lực tăng trưởng từ hạ tầng, nhu cầu ở thực và cơ hội đầu tư dài hạn tại các đại đô thị Vinhomes.",
  category: "market",
  categoryLabel: "Thị trường",
  publishedAt: "06/05/2026",
  updatedAt: "06/05/2026",
  readingTime: "7 phút đọc",
  viewCount: 12568,
  image: "/images/articles/article-main.jpg",
  imageAlt:
    "Thị trường bất động sản Việt Nam 2026",
  heroImage: "/images/articles/article-hero.jpg",
  heroImageAlt:
    "Tổng quan thị trường bất động sản 2026",
  author: authorVinhomesResearch,
  lead: "Năm 2026 được dự báo là giai đoạn thị trường bất động sản Việt Nam bước vào chu kỳ tăng trưởng mới, với nhiều yếu tố thuận lợi từ hạ tầng, chính sách và nhu cầu ở thực gia tăng.",
  sections: [
    {
      id: "boi-canh",
      heading:
        "Bối cảnh thị trường năm 2026",
      content: [
        "Sau giai đoạn tái cấu trúc và thanh lọc, thị trường bất động sản đang dần hồi phục. Các chính sách hỗ trợ tín dụng, pháp lý và đầu tư công được đẩy mạnh tạo nền tảng cho sự phát triển bền vững hơn.",
        "Nhu cầu ở thực gia tăng, trong khi nguồn cung chất lượng cao vẫn còn hạn chế, mở ra dư địa tăng trưởng cho các chủ đầu tư uy tín.",
      ],
      bullets: [
        "Kinh tế vĩ mô ổn định, lạm phát được kiểm soát.",
        "Mặt bằng lãi suất duy trì ở mức hợp lý, hỗ trợ dòng tiền.",
        "Hành lang pháp lý ngày càng hoàn thiện, minh bạch.",
      ],
    },
    {
      id: "ha-tang",
      heading:
        "Hạ tầng tiếp tục là động lực tăng trưởng",
      content: [
        "Hệ thống hạ tầng giao thông trọng điểm như cao tốc, vành đai, metro, sân bay đang được triển khai mạnh mẽ, kết nối các vùng kinh tế và thúc đẩy giá trị bất động sản.",
      ],
      bullets: [
        "Các tuyến vành đai và cao tốc kết nối liên vùng giúp rút ngắn thời gian di chuyển.",
        "Hạ tầng đô thị, giáo dục, y tế, thương mại đồng bộ nâng tầm chất lượng sống.",
        "Những khu vực có hạ tầng hoàn thiện luôn dẫn đầu về thanh khoản và giá trị.",
      ],
    },
    {
      id: "xu-huong",
      heading:
        "Xu hướng dịch chuyển về các đại đô thị tích hợp",
      content: [
        "Khách hàng ngày càng ưu tiên môi trường sống toàn diện với đầy đủ tiện ích, không gian xanh và cộng đồng văn minh. Các đại đô thị tích hợp như Vinhomes đáp ứng trọn vẹn nhu cầu an cư, nghỉ dưỡng, làm việc và giải trí.",
      ],
      bullets: [
        "Quy hoạch bài bản, hệ sinh thái tiện ích đa dạng.",
        "Không gian sống xanh, an toàn, hiện đại.",
        "Gia tăng giá trị bền vững theo thời gian.",
      ],
      image: {
        src: "/images/articles/article-mid.jpg",
        alt: "Đại đô thị tích hợp Vinhomes",
        caption:
          "Các đại đô thị Vinhomes đáp ứng trọn vẹn nhu cầu sống hiện đại",
      },
    },
    {
      id: "co-hoi",
      heading:
        "Cơ hội cho nhà đầu tư và người mua ở thực",
      content: [
        "Phân khúc căn hộ cao cấp, nhà phố, biệt thự tại các đại đô thị có pháp lý rõ ràng, tiến độ đảm bảo và tiện ích đồng bộ sẽ là lựa chọn ưu tiên trong năm 2026.",
      ],
      bullets: [
        "Khả năng tăng giá bền vững nhờ hạ tầng và tiện ích.",
        "Dòng tiền cho thuê ổn định, tỷ suất hấp dẫn.",
        "Sản phẩm đáp ứng nhu cầu ở thực luôn giữ giá tốt.",
      ],
    },
    {
      id: "du-bao",
      heading:
        "Dự báo giai đoạn tiếp theo",
      content: [
        "Thị trường bước vào chu kỳ tăng trưởng thận trọng nhưng bền vững. Các dự án chất lượng, chủ đầu tư uy tín và vị trí chiến lược sẽ là tâm điểm thu hút dòng vốn.",
      ],
      bullets: [
        "Giá trị bất động sản tăng đều theo hạ tầng và tiện ích.",
        "Thanh khoản cải thiện, niềm tin nhà đầu tư dần trở lại.",
        "Cơ hội tốt cho người mua ở thực và nhà đầu tư dài hạn.",
      ],
    },
  ],
  quote:
    "Bất động sản có hệ sinh thái đồng bộ, pháp lý rõ ràng và cộng đồng cư dân hiện hữu tiếp tục là nhóm sản phẩm được ưu tiên trong năm 2026.",
  stats: [
    {
      id: "stat-1",
      label:
        "Tăng trưởng nhu cầu ở thực",
      value: "+18%",
      description:
        "So với năm 2025",
    },
    {
      id: "stat-2",
      label:
        "Hạ tầng mở rộng",
      value: "+450 km",
      description:
        "Đường cao tốc và vành đai",
    },
    {
      id: "stat-3",
      label:
        "Thanh khoản cải thiện",
      value: "+25%",
      description:
        "So với nửa đầu năm 2025",
    },
  ],
  tags: [
    "Thị trường",
    "Đầu tư",
    "Vinhomes",
    "Bất động sản 2026",
  ],
  relatedIds: ["related-1", "related-2", "related-3"],
  seoTitle:
    "Thị trường bất động sản 2026: xu hướng đầu tư an toàn | Vinhomes",
  seoDescription:
    "Phân tích bức tranh thị trường bất động sản năm 2026, các động lực tăng trưởng và cơ hội đầu tư tại Vinhomes.",
};

/* ------------------------------------------------------------------ */
/*  Related articles                                                   */
/* ------------------------------------------------------------------ */

export const mockRelatedArticles: RelatedArticle[] = [
  {
    id: "related-1",
    title:
      "Thị trường bất động sản quý II/2026: Tín hiệu phục hồi mạnh mẽ",
    slug: "thi-truong-bat-dong-san-quy-ii-2026-tin-hieu-phuc-hoi-manh-me",
    category: "market",
    categoryLabel: "Thị trường",
    publishedAt: "01/05/2026",
    readingTime: "6 phút đọc",
    image: "/images/articles/related-1.jpg",
    imageAlt:
      "Thị trường bất động sản quý II 2026",
    href: "/tin-tuc/thi-truong-bat-dong-san-quy-ii-2026-tin-hieu-phuc-hoi-manh-me",
  },
  {
    id: "related-2",
    title:
      "Đầu tư dài hạn vào bất động sản: Chiến lược cho tương lai",
    slug: "dau-tu-dai-han-vao-bat-dong-san-chien-luoc-cho-tuong-lai",
    category: "investment",
    categoryLabel: "Đầu tư",
    publishedAt: "29/04/2026",
    readingTime: "8 phút đọc",
    image: "/images/articles/related-2.jpg",
    imageAlt:
      "Đầu tư dài hạn bất động sản",
    href: "/tin-tuc/dau-tu-dai-han-vao-bat-dong-san-chien-luoc-cho-tuong-lai",
  },
  {
    id: "related-3",
    title:
      "Những yếu tố tạo nên giá trị bền vững của các đại đô thị",
    slug: "nhung-yeu-to-tao-nen-gia-tri-ben-vung-cua-cac-dai-do-thi",
    category: "market",
    categoryLabel: "Thị trường",
    publishedAt: "27/04/2026",
    readingTime: "7 phút đọc",
    image: "/images/articles/related-3.jpg",
    imageAlt:
      "Giá trị bền vững đại đô thị",
    href: "/tin-tuc/nhung-yeu-to-tao-nen-gia-tri-ben-vung-cua-cac-dai-do-thi",
  },
];

/* ------------------------------------------------------------------ */
/*  Sidebar related (shorter list)                                     */
/* ------------------------------------------------------------------ */

export const mockSidebarRelated: RelatedArticle[] = [
  {
    id: "sidebar-1",
    title:
      "Vì sao bất động sản khu Đông Hà Nội hút dòng tiền 2026?",
    slug: "vi-sao-bat-dong-san-khu-dong-ha-noi-hut-dong-tien-2026",
    category: "market",
    categoryLabel: "Thị trường",
    publishedAt: "30/04/2026",
    readingTime: "5 phút đọc",
    image: "/images/news/article-3.jpg",
    imageAlt:
      "Bất động sản khu Đông Hà Nội",
    href: "/tin-tuc/vi-sao-bat-dong-san-khu-dong-ha-noi-hut-dong-tien-2026",
  },
  {
    id: "sidebar-2",
    title:
      "Chính sách mới hỗ trợ thị trường bất động sản",
    slug: "chinh-sach-moi-ho-tro-thi-truong-bat-dong-san",
    category: "policy",
    categoryLabel: "Chính sách",
    publishedAt: "28/04/2026",
    readingTime: "4 phút đọc",
    image: "/images/news/article-5.jpg",
    imageAlt:
      "Chính sách hỗ trợ thị trường",
    href: "/tin-tuc/chinh-sach-moi-ho-tro-thi-truong-bat-dong-san",
  },
  {
    id: "sidebar-3",
    title:
      "Xu hướng sống xanh trong các đại đô thị",
    slug: "xu-huong-song-xanh-trong-cac-dai-do-thi",
    category: "lifestyle",
    categoryLabel: "Phong cách sống",
    publishedAt: "25/04/2026",
    readingTime: "5 phút đọc",
    image: "/images/news/article-4.jpg",
    imageAlt:
      "Sống xanh đại đô thị",
    href: "/tin-tuc/xu-huong-song-xanh-trong-cac-dai-do-thi",
  },
];

/* ------------------------------------------------------------------ */
/*  Query helpers                                                      */
/* ------------------------------------------------------------------ */

export function getMockArticleBySlug(slug: string): Article | null {
  if (slug === mockArticle.slug) return mockArticle;
  return null;
}

export function getMockRelatedArticles(_slug: string): RelatedArticle[] {
  return mockRelatedArticles;
}

export function getMockSidebarRelated(_slug: string): RelatedArticle[] {
  return mockSidebarRelated;
}

export function getAllMockArticleSlugs(): { slug: string }[] {
  return [{ slug: mockArticle.slug }];
}

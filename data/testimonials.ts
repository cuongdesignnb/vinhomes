export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    role: "Nhà đầu tư",
    avatar: "/images/avatar-minh-tuan.jpg",
    quote:
      "Thông tin dự án rõ ràng, tư vấn tận tâm, hỗ trợ nhanh chóng. Tôi đã đầu tư thành công tại Vinhomes Ocean Park và rất hài lòng.",
  },
  {
    id: 2,
    name: "Chị Thu Hương",
    role: "Khách hàng",
    avatar: "/images/avatar-thu-huong.jpg",
    quote:
      "Gia đình tôi đã tìm được căn hộ ưng ý tại Vinhomes Smart City. Không gian sống tuyệt vời, tiện ích đầy đủ cho mọi thành viên.",
  },
  {
    id: 3,
    name: "Anh Quốc Bảo",
    role: "Doanh nhân",
    avatar: "/images/avatar-quoc-bao.jpg",
    quote:
      "Vinhomes là thương hiệu uy tín, sản phẩm chất lượng. Điểm nóng tăng giá rất tốt trong tương lai.",
  },
];

import type { ContactPageData } from "@/features/contact/contact.types";

export const contactMockData: ContactPageData = {
  heroImage: "/images/contact/contact-hero.jpg",
  heroImageAlt: "Liên hệ Vinhomes - Văn phòng chính",
  contactInfo: {
    hotline: "1900 1234 56",
    email: "cskh@vinhomes.vn",
    website: "vinhomes.vn",
    address: "Tòa văn phòng Vinhomes, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 - Chủ nhật: 08:00 - 20:00",
  },
  supportItems: [
    { id: "s1", title: "Tư vấn mua ở", description: "Tư vấn lựa chọn dự án phù hợp nhu cầu an cư và tài chính.", icon: "Home" },
    { id: "s2", title: "Tư vấn đầu tư", description: "Giải pháp đầu tư hiệu quả, tiềm năng sinh lời dài hạn.", icon: "TrendingUp" },
    { id: "s3", title: "Đăng ký tham quan", description: "Hỗ trợ đặt lịch tham quan dự án thực tế.", icon: "Calendar" },
    { id: "s4", title: "Hỗ trợ pháp lý", description: "Tư vấn pháp lý, thủ tục mua bán minh bạch.", icon: "Shield" },
  ],
  offices: [
    { id: "o1", title: "Văn phòng TP. Hồ Chí Minh", address: "Tòa văn phòng Vinhomes, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh", hotline: "1900 1234 56", image: "/images/contact/office-hcm.jpg", imageAlt: "Văn phòng Vinhomes TP. Hồ Chí Minh", href: "#" },
    { id: "o2", title: "Văn phòng Hà Nội", address: "Tòa văn phòng Vinhomes, Phố Lý Thánh Tông, Quận Hoàn Kiếm, Hà Nội", hotline: "1900 1234 56", image: "/images/contact/office-hanoi.jpg", imageAlt: "Văn phòng Vinhomes Hà Nội", href: "#" },
    { id: "o3", title: "Trung tâm tư vấn dự án", address: "Tòa văn phòng Vinhomes, các dự án trên toàn quốc", hotline: "1900 1234 56", image: "/images/contact/consulting-center.jpg", imageAlt: "Trung tâm tư vấn dự án Vinhomes", href: "#" },
  ],
  mapImage: "/images/contact/contact-map.jpg",
  mapImageAlt: "Bản đồ văn phòng Vinhomes Quận 1",
  nearbyPlaces: [
    { id: "n1", name: "Nhà thờ Đức Bà", distance: "5 phút đi bộ", icon: "MapPin" },
    { id: "n2", name: "Dinh Độc Lập", distance: "7 phút đi bộ", icon: "Building2" },
    { id: "n3", name: "Trung tâm Thương mại Vincom Center", distance: "3 phút đi xe", icon: "ShoppingBag" },
    { id: "n4", name: "Ga Metro Bến Thành", distance: "6 phút đi bộ", icon: "Train" },
  ],
  benefits: [
    { id: "b1", title: "Tư vấn đúng nhu cầu", description: "Đội ngũ chuyên viên giàu kinh nghiệm hiểu rõ nhu cầu của bạn.", icon: "UserCheck" },
    { id: "b2", title: "Cập nhật bảng giá mới nhất", description: "Cung cấp thông tin, ưu đãi và chính sách nhanh chóng, chính xác.", icon: "FileText" },
    { id: "b3", title: "Hỗ trợ pháp lý minh bạch", description: "Tư vấn pháp lý đầy đủ, thủ tục rõ ràng, đảm bảo quyền lợi khách hàng.", icon: "Shield" },
    { id: "b4", title: "Đồng hành trước và sau giao dịch", description: "Hỗ trợ từ lúc tìm hiểu đến khi nhận nhà và cả sau khi bàn giao.", icon: "Handshake" },
  ],
  faqs: [
    { id: "f1", question: "Làm sao để nhận bảng giá mới nhất?", answer: "Quý khách có thể để lại thông tin trên form tư vấn hoặc gọi hotline để nhận bảng giá và chính sách mới nhất từ chuyên viên." },
    { id: "f2", question: "Tôi có thể đăng ký tham quan dự án như thế nào?", answer: "Quý khách chỉ cần gửi yêu cầu tham quan, đội ngũ tư vấn sẽ liên hệ để xác nhận thời gian và hỗ trợ lịch trình phù hợp." },
    { id: "f3", question: "Vinhomes có hỗ trợ tư vấn vay không?", answer: "Có. Chuyên viên sẽ tư vấn các chính sách vay, hỗ trợ tài chính và phương án thanh toán phù hợp với nhu cầu của từng khách hàng." },
    { id: "f4", question: "Thông tin của tôi có được bảo mật không?", answer: "Thông tin của Quý khách được bảo mật và chỉ sử dụng cho mục đích tư vấn, hỗ trợ dự án theo yêu cầu." },
  ],
  ctaImage: "/images/contact/cta-city.jpg",
  ctaImageAlt: "Tư vấn dự án Vinhomes",
};

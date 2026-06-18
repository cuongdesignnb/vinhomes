import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Trung tâm hỗ trợ | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserSupportPage() {
  return (
    <UserPlaceholderPage
      title="Trung tâm hỗ trợ"
      subtitle="Liên hệ trực tiếp với chuyên viên tư vấn riêng của bạn hoặc phòng dịch vụ khách hàng."
      actionLabel="Gửi câu hỏi"
    />
  );
}

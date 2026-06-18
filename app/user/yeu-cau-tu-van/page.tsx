import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Yêu cầu tư vấn | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserConsultRequestsPage() {
  return (
    <UserPlaceholderPage
      title="Yêu cầu tư vấn"
      subtitle="Theo dõi tiến độ xử lý và phản hồi của các yêu cầu tư vấn chính sách, báo giá."
      actionLabel="Tạo yêu cầu mới"
    />
  );
}

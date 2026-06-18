import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Thông báo | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserNotificationsPage() {
  return (
    <UserPlaceholderPage
      title="Thông báo cá nhân"
      subtitle="Xem toàn bộ các thông báo quan trọng, chính sách mới và cập nhật lịch trình."
      actionLabel="Đánh dấu đã đọc"
    />
  );
}

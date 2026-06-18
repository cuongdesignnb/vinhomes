import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Lịch hẹn tham quan | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserAppointmentsPage() {
  return (
    <UserPlaceholderPage
      title="Lịch hẹn tham quan"
      subtitle="Quản lý lịch hẹn tham quan nhà mẫu, sa bàn hoặc các đại đô thị Vinhomes thực tế."
      actionLabel="Đặt lịch hẹn mới"
    />
  );
}

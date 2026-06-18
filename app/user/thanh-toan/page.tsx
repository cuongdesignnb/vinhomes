import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Tiến trình thanh toán | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserPaymentsPage() {
  return (
    <UserPlaceholderPage
      title="Tiến trình thanh toán"
      subtitle="Theo dõi tiến độ đóng tiền, lịch sử thanh toán và các đợt giải ngân ngân hàng."
      actionLabel="Thanh toán trực tuyến"
    />
  );
}

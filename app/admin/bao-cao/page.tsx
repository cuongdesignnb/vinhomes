import { AdminPlaceholderPage } from "@/components/admin/common/AdminPlaceholderPage";
export const metadata = { title: "Báo cáo | Admin Vinhomes" };
export default function AdminReportsPage() {
  return <AdminPlaceholderPage title="Báo cáo kinh doanh" subtitle="Doanh thu, bookings, tỉ lệ hấp thụ, phân tích thị trường." addLabel="Xuất báo cáo" />;
}

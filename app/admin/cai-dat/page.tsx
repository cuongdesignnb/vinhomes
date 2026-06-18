import { AdminPlaceholderPage } from "@/components/admin/common/AdminPlaceholderPage";
export const metadata = { title: "Cài đặt | Admin Vinhomes" };
export default function AdminSettingsPage() {
  return <AdminPlaceholderPage title="Cài đặt hệ thống" subtitle="Cấu hình chung, email, thông báo và tích hợp API." addLabel="Quản lý cài đặt" />;
}

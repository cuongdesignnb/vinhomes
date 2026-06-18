import { AdminPlaceholderPage } from "@/components/admin/common/AdminPlaceholderPage";

export const metadata = { title: "Quản lý dự án | Admin Vinhomes" };

export default function AdminProjectsPage() {
  return <AdminPlaceholderPage title="Quản lý dự án" subtitle="Đầy đủ thông tin dự án: tên, vị trí, tiện ích, bảng giá, chính sách." addLabel="Thêm dự án mới" />;
}

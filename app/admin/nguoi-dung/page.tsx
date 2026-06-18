import { AdminPlaceholderPage } from "@/components/admin/common/AdminPlaceholderPage";
export const metadata = { title: "Người dùng | Admin Vinhomes" };
export default function AdminUsersPage() {
  return <AdminPlaceholderPage title="Quản lý người dùng" subtitle="Tài khoản, vai trò và quyền truy cập hệ thống." addLabel="Thêm người dùng" />;
}

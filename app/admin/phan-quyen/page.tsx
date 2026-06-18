import { AdminPlaceholderPage } from "@/components/admin/common/AdminPlaceholderPage";
export const metadata = { title: "Phân quyền | Admin Vinhomes" };
export default function AdminRolesPermissionsPage() {
  return <AdminPlaceholderPage title="Phân quyền quản trị" subtitle="Quản lý vai trò (Role) và quyền hạn (Permission) của nhân viên." addLabel="Thêm vai trò" />;
}

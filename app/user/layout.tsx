import type { Metadata } from "next";
import UserShell from "@/components/user/layout/UserShell";
import AdminQueryProvider from "@/components/admin/providers/AdminQueryProvider";

export const metadata: Metadata = {
  title: "Cổng thông tin khách hàng | Vinhomes",
  description: "Khu vực quản lý thông tin cá nhân, dự án quan tâm, lịch hẹn, tài liệu và hỗ trợ khách hàng Vinhomes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminQueryProvider>
      <UserShell>{children}</UserShell>
    </AdminQueryProvider>
  );
}

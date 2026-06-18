import type { Metadata } from "next";
import AdminShell from "@/components/admin/layout/AdminShell";
import AdminQueryProvider from "@/components/admin/providers/AdminQueryProvider";

export const metadata: Metadata = {
  title: "Admin Dashboard | Vinhomes",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminQueryProvider>
      <AdminShell>{children}</AdminShell>
    </AdminQueryProvider>
  );
}

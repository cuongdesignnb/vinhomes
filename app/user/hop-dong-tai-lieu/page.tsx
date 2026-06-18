import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Hợp đồng & Tài liệu | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserDocumentsPage() {
  return (
    <UserPlaceholderPage
      title="Hợp đồng & Tài liệu"
      subtitle="Tra cứu và tải xuống các hợp đồng mua bán, tài liệu chính sách, thiết kế dự án."
      actionLabel="Tải lên tài liệu"
    />
  );
}

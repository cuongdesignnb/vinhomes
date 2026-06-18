import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Hồ sơ cá nhân | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserProfilePage() {
  return (
    <UserPlaceholderPage
      title="Hồ sơ cá nhân"
      subtitle="Quản lý thông tin liên hệ, cài đặt bảo mật và thông tin thẻ thành viên Vinhomes."
      actionLabel="Chỉnh sửa thông tin"
    />
  );
}

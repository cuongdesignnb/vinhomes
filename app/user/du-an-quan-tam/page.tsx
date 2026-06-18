import { UserPlaceholderPage } from "@/components/user/common/UserPlaceholderPage";

export const metadata = {
  title: "Dự án quan tâm | Vinhomes",
  robots: { index: false, follow: false },
};

export default function UserInterestedProjectsPage() {
  return (
    <UserPlaceholderPage
      title="Dự án quan tâm"
      subtitle="Danh sách các dự án căn hộ, biệt thự bạn đã lưu hoặc đang khảo sát."
      actionLabel="Khám phá dự án"
    />
  );
}

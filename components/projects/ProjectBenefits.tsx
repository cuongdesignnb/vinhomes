import { ClipboardCheck, HandCoins, ShieldCheck, Users } from "lucide-react";

const benefits = [
  { icon: ClipboardCheck, title: "Thông tin chuẩn xác", text: "Cập nhật trực tiếp từ chủ đầu tư Vinhomes." },
  { icon: ShieldCheck, title: "Chính sách tốt", text: "Giá và ưu đãi tốt nhất từ chủ đầu tư." },
  { icon: HandCoins, title: "Hỗ trợ tài chính", text: "Vay ưu đãi - lãi suất tốt - thủ tục nhanh gọn." },
  { icon: Users, title: "Tư vấn chuyên sâu", text: "Đội ngũ chuyên viên am hiểu dự án và thị trường." },
];

export function ProjectBenefits() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-10 sm:px-6">
      <div className="grid overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_12px_34px_rgba(6,27,58,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className={`flex gap-4 p-5 ${index > 0 ? "border-t border-[#E8DDC8] sm:border-l sm:border-t-0" : ""}`}>
              <Icon aria-hidden className="size-10 shrink-0 text-[#C89B3C]" />
              <div>
                <h3 className="font-black text-[#061B3A]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#65758B]">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

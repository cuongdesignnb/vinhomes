import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ClipboardCheck, Handshake, ShieldCheck, WalletCards } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Thông tin chuẩn xác",
    text: "Cập nhật liên tục từ chủ đầu tư Vinhomes.",
  },
  {
    icon: WalletCards,
    title: "Giỏ hàng đa dạng",
    text: "Hàng ngàn sản phẩm phù hợp mọi nhu cầu.",
  },
  {
    icon: ShieldCheck,
    title: "Chính sách tốt",
    text: "Ưu đãi độc quyền và hỗ trợ tài chính tối ưu.",
  },
  {
    icon: Handshake,
    title: "Tư vấn chuyên sâu",
    text: "Đội ngũ chuyên viên am hiểu dự án và thị trường.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="chinh-sach" className="bg-[#FAF8F3] py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Vì sao nên chọn chúng tôi" />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <article className="h-full rounded-xl border border-[#E8DDC8] bg-white p-6 shadow-[0_10px_30px_rgba(6,27,58,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#D8B15A] hover:shadow-[0_18px_42px_rgba(6,27,58,0.1)]">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#FAF8F3] text-[#C89B3C]">
                    <Icon aria-hidden className="size-8" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-[#061B3A]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65758B]">{feature.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { ContactInfo } from "@/features/contact/contact.types";

type Props = { info: ContactInfo };

export function ContactInfoCard({ info }: Props) {
  const rows = [
    { icon: Phone, label: "Hotline", value: info.hotline, sub: "Tư vấn 24/7" },
    { icon: Mail, label: "Email", value: info.email },
    { icon: Globe, label: "Website", value: info.website },
    { icon: MapPin, label: "Bịa chỉ", value: info.address },
    { icon: Clock, label: "Giờ làm việc", value: info.workingHours },
  ];

  return (
    <Reveal>
      <div className="rounded-[20px] border border-[#E8DDC8] bg-white p-6 shadow-[0_4px_20px_rgba(6,27,58,0.06)]">
        <h3 className="mb-5 text-lg font-bold text-[#061B3A]">Thông tin liên hệ</h3>
        <div className="space-y-4">
          {rows.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F8F5EF] text-[#C89B3C]">
                  <Icon className="size-4.5" aria-hidden />
                </div>
                <div>
                  <p className="text-xs text-[#65758B]">{r.label}</p>
                  <p className="text-sm font-bold text-[#061B3A]">{r.value}</p>
                  {r.sub && <p className="text-xs text-[#C89B3C]">{r.sub}</p>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 border-t border-[#E8DDC8] pt-4">
          <p className="mb-2.5 text-xs font-bold text-[#65758B]">Kết nối với chúng tôi</p>
          <div className="flex gap-2">
            {["Facebook", "Zalo", "YouTube", "TikTok"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid size-9 place-items-center rounded-lg bg-[#061B3A] text-xs font-black text-[#D8B15A] transition hover:bg-[#08254D]">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

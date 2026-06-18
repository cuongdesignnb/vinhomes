"use client";

import { Home, TrendingUp, Calendar, Shield } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import type { ContactSupportItem } from "@/features/contact/contact.types";

const iconMap: Record<string, React.ElementType> = { Home, TrendingUp, Calendar, Shield };

type Props = { items: ContactSupportItem[] };

export function ContactSupportCards({ items }: Props) {
  return (
    <div>
      <p className="mb-5 text-sm leading-relaxed text-[#65758B]">
        Chúng tôi luôn sẵn sàng đồng hành cùng Quý khách hàng trên hành trình an cư và đầu tư. Liên hệ ngay để được tư vấn chi tiết và hỗ trợ nhanh chóng.
      </p>
      <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon ? iconMap[item.icon] : Home;
          return (
            <StaggerItem key={item.id}>
              <div className="group rounded-[16px] border border-[#E8DDC8] bg-[#FAF8F3] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(6,27,58,0.08)]">
                {Icon && <Icon className="size-6 text-[#C89B3C]" aria-hidden />}
                <h3 className="mt-2.5 text-sm font-bold text-[#061B3A]">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#65758B]">{item.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}

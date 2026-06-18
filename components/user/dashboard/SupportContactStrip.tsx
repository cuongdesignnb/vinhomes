"use client";

import React from "react";
import { PhoneCall, MessageSquare, Mail } from "lucide-react";
import { SupportContact } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { cn } from "@/lib/cn";

interface SupportContactStripProps {
  contacts: SupportContact[];
}

const iconMap = {
  hotline: PhoneCall,
  zalo: MessageSquare,
  email: Mail,
};

const typeStyleMap: Record<SupportContact["type"], { bgClass: string; iconClass: string }> = {
  hotline: {
    bgClass: "bg-[#FDF8EE] border border-[#E8DDC8]/30",
    iconClass: "text-[#C89B3C]",
  },
  zalo: {
    bgClass: "bg-[#F0F4FA] border border-[#061B3A]/10",
    iconClass: "text-[#061B3A]",
  },
  email: {
    bgClass: "bg-[#FDF8EE] border border-[#E8DDC8]/30",
    iconClass: "text-[#C89B3C]",
  },
};

export function SupportContactStrip({ contacts }: SupportContactStripProps) {
  return (
    <UserCard className="bg-[#FDF8EE] border-[#E8DDC8]/60 w-full shadow-[0_10px_35px_rgba(200,155,60,0.04)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column - Heading & Description */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <h3 className="text-base font-bold text-[#061B3A]">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </h3>
          <p className="text-xs text-[#65758B] mt-1.5 leading-relaxed">
            Đội ngũ chuyên viên tư vấn của Vinhomes luôn đồng hành cùng bạn trên hành trình an cư lý tưởng.
          </p>
          <button className="mt-4 bg-gradient-to-r from-[#C89B3C] to-[#D8B15A] text-white rounded-xl px-5 py-2.5 text-xs font-bold transition hover:opacity-90 active:scale-95 shadow-md shadow-[#C89B3C]/10 border-0">
            Liên hệ chuyên viên
          </button>
        </div>

        {/* Right Column - Contact Options Row */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 w-full">
          {contacts.map((contact) => {
            const IconComponent = iconMap[contact.type] || Mail;
            const style = typeStyleMap[contact.type] || typeStyleMap.email;

            // Generate Action Link for Contact Types
            let href = "";
            if (contact.type === "hotline") {
              href = `tel:${contact.value.replace(/\s+/g, "")}`;
            } else if (contact.type === "email") {
              href = `mailto:${contact.value}`;
            } else if (contact.type === "zalo") {
              // Zalo link template or deep link if applicable
              href = "https://zalo.me";
            }

            const isLink = !!href;

            const cardContent = (
              <>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", style.bgClass)}>
                  <IconComponent className={cn("w-4 h-4", style.iconClass)} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#65758B] uppercase font-bold tracking-wider block">
                    {contact.title}
                  </span>
                  <span className="text-xs font-black text-[#10233F] mt-0.5 block truncate group-hover:text-[#C89B3C] transition-colors duration-150">
                    {contact.value}
                  </span>
                  <span className="text-[10px] text-[#65758B]/70 block mt-0.5">
                    {contact.description}
                  </span>
                </div>
              </>
            );

            if (isLink) {
              return (
                <a
                  key={contact.id}
                  href={href}
                  target={contact.type === "zalo" ? "_blank" : undefined}
                  rel={contact.type === "zalo" ? "noopener noreferrer" : undefined}
                  className="flex-1 bg-white border border-[#E8DDC8]/30 rounded-xl p-4 flex flex-col gap-2.5 shadow-sm hover:border-[#C89B3C]/50 hover:shadow transition-all duration-200 group no-underline cursor-pointer"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={contact.id}
                className="flex-1 bg-white border border-[#E8DDC8]/30 rounded-xl p-4 flex flex-col gap-2.5 shadow-sm"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </UserCard>
  );
}

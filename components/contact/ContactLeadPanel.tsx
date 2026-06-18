"use client";

import { Reveal } from "@/components/site/Reveal";
import { ContactLeadForm } from "@/components/forms/ContactLeadForm";

export function ContactLeadPanel() {
  return (
    <Reveal delay={0.15}>
      <div className="rounded-[22px] bg-[#061B3A] p-6 shadow-[0_8px_32px_rgba(6,27,58,0.15)] sm:p-8">
        <h3 className="mb-5 text-lg font-bold text-white">Gửi yêu cầu tư vấn</h3>
        <ContactLeadForm />
      </div>
    </Reveal>
  );
}

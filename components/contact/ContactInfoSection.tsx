import { Reveal } from "@/components/site/Reveal";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactSupportCards } from "@/components/contact/ContactSupportCards";
import { ContactLeadPanel } from "@/components/contact/ContactLeadPanel";
import type { ContactPageData } from "@/features/contact/contact.types";

type Props = { data: ContactPageData };

export function ContactInfoSection({ data }: Props) {
  return (
    <section id="thong-tin-lien-he" className="scroll-mt-28 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
            Thông tin liên hệ
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr_380px]">
          <ContactInfoCard info={data.contactInfo} />
          <ContactSupportCards items={data.supportItems} />
          <div id="gui-yeu-cau" className="scroll-mt-28">
            <ContactLeadPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

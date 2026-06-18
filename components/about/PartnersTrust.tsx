import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { partnerTrustItems } from "@/data/about";
import { Award, Handshake, Network, ShieldCheck } from "lucide-react";

const icons = { handshake: Handshake, award: Award, shield: ShieldCheck, network: Network };

export function PartnersTrust() {
  return (
    <section className="bg-[#FAF8F3] py-8 pb-12">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Đối tác & niềm tin thị trường" />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTrustItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-[0_10px_30px_rgba(6,27,58,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,27,58,0.1)]">
                  <Icon aria-hidden className="size-11 text-[#C89B3C]" />
                  <h3 className="mt-4 font-black text-[#061B3A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65758B]">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

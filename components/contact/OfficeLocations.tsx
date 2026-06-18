import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { OfficeCard } from "@/components/contact/OfficeCard";
import type { OfficeLocation } from "@/features/contact/contact.types";

type Props = { offices: OfficeLocation[] };

export function OfficeLocations({ offices }: Props) {
  return (
    <section id="van-phong" className="scroll-mt-28 bg-[#FAF8F3] py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
            Văn phòng & điểm liên hệ
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <StaggerItem key={office.id}>
              <OfficeCard office={office} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

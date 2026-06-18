import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { amenities } from "@/data/amenities";
import { Dumbbell, GraduationCap, Hospital, ShoppingBag, Trees, Waves } from "lucide-react";
import Image from "next/image";

const iconMap = {
  park: Trees,
  school: GraduationCap,
  hospital: Hospital,
  mall: ShoppingBag,
  pool: Waves,
  sport: Dumbbell,
};

export function AmenitiesSection() {
  return (
    <section id="tien-ich" className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Hệ tiện ích sống chuẩn Vinhomes" />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon];
            return (
              <StaggerItem key={amenity.id}>
                <article className="group overflow-hidden rounded-xl border border-[#E8DDC8] bg-white shadow-[0_10px_30px_rgba(6,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,27,58,0.12)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={amenity.image}
                      alt={`Tiện ích ${amenity.title} tại Vinhomes`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <span className="grid size-11 place-items-center rounded-full bg-[#FAF8F3] text-[#C89B3C]">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="font-black text-[#061B3A]">{amenity.title}</h3>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

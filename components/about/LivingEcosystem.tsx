import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ecosystemItems } from "@/data/about";
import { Building2, GraduationCap, Home, ShoppingBag, Store, Trees } from "lucide-react";
import Image from "next/image";

const icons = { building: Building2, home: Home, store: Store, trees: Trees, school: GraduationCap, mall: ShoppingBag };

export function LivingEcosystem() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Hệ sinh thái sống chuẩn Vinhomes" />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ecosystemItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <StaggerItem key={item.title}>
                <article className="group h-full overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_10px_30px_rgba(6,27,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(6,27,58,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <Icon aria-hidden className="mx-auto size-7 text-[#C89B3C]" />
                    <h3 className="mt-2 text-sm font-black text-[#061B3A]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#65758B]">{item.description}</p>
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

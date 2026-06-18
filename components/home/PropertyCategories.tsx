import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categories } from "@/data/categories";
import { Briefcase, Building2, Home, Landmark, Store, TrendingUp } from "lucide-react";
import Image from "next/image";

const iconMap = {
  apartment: Building2,
  villa: Landmark,
  shophouse: Store,
  townhouse: Home,
  office: Briefcase,
  investment: TrendingUp,
};

export function PropertyCategories() {
  return (
    <section id="danh-muc" className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Danh mục sản phẩm" />
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <StaggerItem key={category.id}>
                <article className="group h-full overflow-hidden rounded-xl border border-[#E8DDC8] bg-white text-center shadow-[0_8px_24px_rgba(6,27,58,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#D8B15A] hover:shadow-[0_18px_40px_rgba(6,27,58,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.title} Vinhomes`}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="mx-auto grid size-11 place-items-center rounded-full border border-[#E8DDC8] bg-[#FAF8F3] text-[#C89B3C]">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-3 text-base font-black text-[#061B3A]">{category.title}</h3>
                    <p className="mt-1 text-sm text-[#65758B]">{category.description}</p>
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

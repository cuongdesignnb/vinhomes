import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { timelineItems } from "@/data/about";
import { Building2, Globe2, Landmark, Leaf, Network } from "lucide-react";

const icons = { building: Building2, network: Network, landmark: Landmark, globe: Globe2, leaf: Leaf };

export function DevelopmentTimeline() {
  return (
    <section className="bg-[#FAF8F3] py-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Hành trình phát triển" />
        <Stagger className="relative mt-10 grid gap-5 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#D8B15A] md:block" />
          {timelineItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <StaggerItem key={item.year}>
                <article className="relative rounded-2xl border border-[#E8DDC8] bg-white p-5 shadow-[0_10px_30px_rgba(6,27,58,0.05)]">
                  <span className="absolute -top-8 left-1/2 hidden size-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#C89B3C] shadow md:block" />
                  <Icon aria-hidden className="size-10 text-[#C89B3C]" />
                  <h3 className="mt-3 text-xl font-black text-[#061B3A]">{item.year}</h3>
                  <p className="text-sm font-bold text-[#C89B3C]">{item.title}</p>
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

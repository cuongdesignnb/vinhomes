import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { commitmentItems } from "@/data/about";
import { Leaf } from "lucide-react";
import Image from "next/image";

export function SustainabilityCommitment() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Cam kết phát triển bền vững" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[#E8DDC8] shadow-[0_14px_40px_rgba(6,27,58,0.08)]">
            <Image
              src="/images/about/sustainability.jpg"
              alt="Không gian sống xanh Vinhomes"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08} className="grid gap-3">
            {commitmentItems.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-2xl border border-[#E8DDC8] bg-white p-5 shadow-[0_8px_24px_rgba(6,27,58,0.04)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#3E8B5B]">
                  <Leaf aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-black text-[#061B3A]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#65758B]">{item.description}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

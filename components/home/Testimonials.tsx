import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Khách hàng nói về chúng tôi" />
        <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <article className="relative h-full rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-[0_12px_34px_rgba(6,27,58,0.07)]">
                <Quote aria-hidden className="absolute right-6 top-6 size-10 text-[#D8B15A]/35" />
                <div className="flex items-center gap-4">
                  <Image
                    src={item.avatar}
                    alt={`Chân dung ${item.name}`}
                    width={64}
                    height={64}
                    className="size-16 rounded-full border-2 border-[#E8DDC8] object-cover"
                  />
                  <div>
                    <h3 className="font-black text-[#061B3A]">{item.name}</h3>
                    <p className="text-sm text-[#65758B]">{item.role}</p>
                  </div>
                </div>
                <p className="mt-5 min-h-[96px] text-sm leading-7 text-[#10233F]">{item.quote}</p>
                <div className="mt-4 flex gap-1 text-[#C89B3C]" aria-label="Đánh giá 5 sao">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} aria-hidden className="size-4 fill-current" />
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

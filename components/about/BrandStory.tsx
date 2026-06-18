import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HeartHandshake } from "lucide-react";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="bg-[#FAF8F3] pt-16 pb-8 sm:pt-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Câu chuyện thương hiệu" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_14px_40px_rgba(6,27,58,0.08)]">
            <Image
              src="/images/about/brand-story.jpg"
              alt="Không gian đô thị Vinhomes cao cấp"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-[0_14px_40px_rgba(6,27,58,0.07)]">
              <div className="space-y-4 text-sm leading-7 text-[#65758B]">
                <p>Ra đời từ năm 2008, Vinhomes là thương hiệu bất động sản của Tập đoàn Vingroup - Tập đoàn kinh tế tư nhân đa ngành lớn nhất Việt Nam.</p>
                <p>Chúng tôi kiên định với sứ mệnh kiến tạo những đại đô thị đẳng cấp quốc tế, mang đến không gian sống tiện nghi, an toàn và văn minh cho hàng triệu gia đình Việt.</p>
                <p>Với tầm nhìn dài hạn và triết lý phát triển bền vững, Vinhomes không ngừng nâng tầm chuẩn sống, đóng góp tích cực vào sự phát triển đô thị hiện đại và thịnh vượng của đất nước.</p>
              </div>
              <div className="mt-6 flex gap-4 rounded-2xl border border-[#E8DDC8] bg-[#FAF8F3] p-5">
                <HeartHandshake aria-hidden className="size-10 shrink-0 text-[#C89B3C]" />
                <div>
                  <h3 className="text-lg font-black text-[#C89B3C]">Nơi hạnh phúc ngập tràn</h3>
                  <p className="mt-1 text-sm text-[#65758B]">Kiến tạo chuẩn sống tốt đẹp cho cộng đồng</p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

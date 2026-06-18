"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import type { ProjectProduct } from "@/features/projects/project-detail.types";

type Props = { products: ProjectProduct[] };

export function ProjectProducts({ products }: Props) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Sản phẩm nổi bật
        </h2>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <Link
                href={product.href}
                className="group block h-full overflow-hidden rounded-[20px] border border-[#E8DDC8] bg-white shadow-[0_4px_20px_rgba(6,27,58,0.05)] transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,27,58,0.12)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#061B3A] transition group-hover:text-[#C89B3C]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#65758B]">{product.description}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition group-hover:text-[#061B3A]">
                    Xem chi tiết
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

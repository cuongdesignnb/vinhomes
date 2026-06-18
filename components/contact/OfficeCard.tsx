import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import type { OfficeLocation } from "@/features/contact/contact.types";

type Props = { office: OfficeLocation };

export function OfficeCard({ office }: Props) {
  return (
    <div className="group h-full overflow-hidden rounded-[20px] border border-[#E8DDC8] bg-white shadow-[0_4px_20px_rgba(6,27,58,0.05)] transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,27,58,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image src={office.image} alt={office.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-[#061B3A]">{office.title}</h3>
        <div className="mt-2.5 flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-[#C89B3C]" aria-hidden />
          <p className="text-sm text-[#65758B]">{office.address}</p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Phone className="size-4 text-[#C89B3C]" aria-hidden />
          <p className="text-sm font-bold text-[#061B3A]">{office.hotline}</p>
        </div>
        <a href={office.href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition hover:text-[#061B3A]">
          Xem chi tiết <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

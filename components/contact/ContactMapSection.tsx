"use client";

import Image from "next/image";
import { MapPin, Building2, ShoppingBag, Navigation, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer, fadeUp, revealTransition } from "@/lib/motion";
import type { NearbyPlace } from "@/features/contact/contact.types";

const iconMap: Record<string, React.ElementType> = { MapPin, Building2, ShoppingBag, Train: Navigation };

type Props = { mapImage: string; mapImageAlt: string; nearbyPlaces: NearbyPlace[] };

export function ContactMapSection({ mapImage, mapImageAlt, nearbyPlaces }: Props) {
  return (
    <section id="ban-do" className="scroll-mt-28 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Bản đồ kết nối
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={revealTransition}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(6,27,58,0.10)]">
              <Image src={mapImage} alt={mapImageAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-xl bg-[#061B3A]/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wide text-[#D8B15A]">Vinhomes Office</p>
                  <p className="text-[10px] text-white/70">Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={revealTransition}>
            <div className="rounded-[20px] border border-[#E8DDC8] bg-[#FAF8F3] p-5">
              <h3 className="mb-4 text-base font-bold text-[#061B3A]">Thông tin tham khảo gần bạn</h3>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                {nearbyPlaces.map((place) => {
                  const Icon = place.icon ? iconMap[place.icon] : MapPin;
                  return (
                    <motion.div key={place.id} variants={fadeUp} transition={revealTransition} className="flex items-center gap-3 rounded-[12px] border border-[#E8DDC8] bg-white p-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F8F5EF] text-[#C89B3C]">
                        {Icon && <Icon className="size-4" aria-hidden />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#10233F]">{place.name}</p>
                      </div>
                      <span className="flex items-center gap-1 rounded-lg bg-[#061B3A] px-2.5 py-1 text-[10px] font-black text-[#D8B15A]">
                        <Clock className="size-3" aria-hidden />{place.distance}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full justify-center gap-2 py-2.5 text-sm">
                Chỉ đường
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

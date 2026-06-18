"use client";

import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft, scaleIn, staggerContainer, revealTransition } from "@/lib/motion";
import type { ProjectDetail } from "@/features/projects/project-detail.types";

type Props = { project: ProjectDetail };

export function ProjectLocation({ project }: Props) {
  return (
    <section id="vi-tri" className="scroll-mt-28 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Vị trí kết nối
        </h2>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-10">
          {/* Connections list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {project.connections.map((conn) => (
              <motion.div
                key={conn.id}
                variants={fadeLeft}
                transition={revealTransition}
                className="flex items-center gap-4 rounded-[14px] border border-[#E8DDC8] bg-[#FAF8F3] p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[#C89B3C] shadow-sm">
                  <MapPin className="size-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#061B3A]">{conn.place}</p>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-[#061B3A] px-3 py-1.5 text-xs font-black text-[#D8B15A]">
                  <Clock className="size-3.5" aria-hidden />
                  {conn.time}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={revealTransition}
            className="relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(6,27,58,0.10)]">
              <Image
                src={project.locationImage}
                alt={project.locationImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              {/* Pin badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-xl bg-[#061B3A]/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-wide text-[#D8B15A]">Vinhomes Ocean Park</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

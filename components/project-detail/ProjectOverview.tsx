"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Building2, MapPin, Home, Maximize2, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, revealTransition } from "@/lib/motion";
import type { ProjectDetail } from "@/features/projects/project-detail.types";

const iconMap: Record<string, React.ElementType> = {
  Building2, MapPin, Home, Maximize2, CheckCircle2, Shield,
};

type Props = { project: ProjectDetail };

export function ProjectOverview({ project }: Props) {
  const [activeThumb, setActiveThumb] = useState(0);
  const thumbs = [
    project.overviewImage,
    "/images/projects/detail/ocean-park-thumb-1.jpg",
    "/images/projects/detail/ocean-park-thumb-2.jpg",
    "/images/projects/detail/ocean-park-thumb-3.jpg",
  ];

  return (
    <section id="tong-quan" className="scroll-mt-28 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Tổng quan dự án
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={revealTransition}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(6,27,58,0.10)]">
              <Image
                src={thumbs[activeThumb]}
                alt={project.overviewImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              {/* Play button overlay */}
              <button
                type="button"
                aria-label="Xem video dự án"
                className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20"
              >
                <span className="grid size-16 place-items-center rounded-full bg-white/90 text-[#061B3A] shadow-lg transition hover:scale-105">
                  <Play className="ml-1 size-7" />
                </span>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="mt-3 grid grid-cols-4 gap-2">
              {thumbs.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveThumb(idx)}
                  className={`relative aspect-[16/10] overflow-hidden rounded-lg border-2 transition ${
                    activeThumb === idx ? "border-[#C89B3C]" : "border-transparent hover:border-[#E8DDC8]"
                  }`}
                >
                  <Image src={src} alt={`${project.name} - ảnh ${idx + 1}`} fill sizes="150px" className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={revealTransition}
          >
            <p className="text-[#10233F] leading-[1.85]">{project.description}</p>

            {/* Fact Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {project.facts.map((fact) => {
                const Icon = fact.icon ? iconMap[fact.icon] : Building2;
                return (
                  <motion.div
                    key={fact.id}
                    variants={fadeUp}
                    transition={revealTransition}
                    className="rounded-[14px] border border-[#E8DDC8] bg-[#FAF8F3] p-3.5"
                  >
                    {Icon && <Icon className="size-5 text-[#C89B3C]" aria-hidden />}
                    <p className="mt-2 text-xs text-[#65758B]">{fact.label}</p>
                    <p className="mt-0.5 text-sm font-bold text-[#061B3A]">{fact.value}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import type { ProjectListItem, ProjectStatus } from "@/data/project-list";
import { Building2, Heart, Landmark, MapPin, Trees, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const statusClass: Record<ProjectStatus, string> = {
  "Đang mở bán": "bg-[#0F9F6E]",
  "Sắp ra mắt": "bg-[#F59E0B]",
  "Đang triển khai": "bg-[#2563EB]",
  "Cao cấp": "bg-[#C89B3C]",
};

const amenityIcons = [Trees, Landmark, Building2, Waves];

export function ProjectCard({ project, index }: { project: ProjectListItem; index: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E8DDC8] bg-white shadow-[0_12px_32px_rgba(6,27,58,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(6,27,58,0.13)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={`Phối cảnh ${project.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-black text-white ${statusClass[project.status]}`}>
          {project.status}
        </span>
        <span className="absolute bottom-[-1px] left-4 grid size-8 place-items-center rounded-full border-2 border-white bg-[#061B3A] text-sm font-black text-white shadow-lg">
          {index + 1}
        </span>
        <button
          type="button"
          aria-label={`Lưu ${project.name}`}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
        >
          <Heart aria-hidden className="size-5" />
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-black leading-tight text-[#061B3A]">{project.name}</h2>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-[#65758B]">
          <MapPin aria-hidden className="size-4 text-[#C89B3C]" />
          {project.location}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.types.map((type) => (
            <span key={type} className="rounded-full border border-[#E8DDC8] bg-[#FAF8F3] px-2.5 py-1 text-xs font-bold text-[#65758B]">
              {type}
            </span>
          ))}
        </div>
        <p className="mt-3 line-clamp-2 min-h-11 text-sm leading-6 text-[#65758B]">{project.description}</p>
        <p className="mt-3 text-lg font-black text-[#C89B3C]">{project.priceLabel}</p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] font-medium text-[#65758B]">
          {project.amenities.slice(0, 3).map((amenity, amenityIndex) => {
            const Icon = amenityIcons[amenityIndex % amenityIcons.length];
            return (
              <span key={amenity} className="flex min-w-0 items-center gap-1">
                <Icon aria-hidden className="size-3.5 shrink-0 text-[#C89B3C]" />
                <span className="truncate">{amenity}</span>
              </span>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link href={project.href} className="inline-flex h-10 items-center justify-center rounded-lg border border-[#D8B15A] text-sm font-bold text-[#061B3A] transition hover:bg-[#FAF8F3]">
            Xem chi tiết
          </Link>
          <Link href="#quick-consult" className="btn-gold h-10">
            Nhận báo giá
          </Link>
        </div>
      </div>
    </article>
  );
}

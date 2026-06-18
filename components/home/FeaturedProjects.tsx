import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { projects } from "@/data/projects";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const badgeTone: Record<string, string> = {
  "Đang mở bán": "bg-[#2F855A]",
  "Sắp ra mắt": "bg-[#C89B3C]",
  "Đang triển khai": "bg-[#08254D]",
};

export function FeaturedProjects() {
  return (
    <section id="du-an" className="bg-[#FAF8F3] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading title="Dự án nổi bật" />
        <Stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group overflow-hidden rounded-xl border border-[#E8DDC8] bg-white shadow-[0_10px_30px_rgba(6,27,58,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(6,27,58,0.13)]">
                <Link href={project.href} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Phối cảnh ${project.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase text-white ${badgeTone[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#061B3A]">{project.name}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-[#65758B]">
                      <MapPin aria-hidden className="size-4 text-[#C89B3C]" />
                      {project.location}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <strong className="text-sm font-black text-[#C89B3C]">{project.price}</strong>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-[#C89B3C] transition group-hover:text-[#061B3A]">
                        Xem chi tiết
                        <ArrowRight aria-hidden className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

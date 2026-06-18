import { BadgeCheck, Globe, Briefcase, Play } from "lucide-react";
import type { ArticleAuthor } from "@/features/articles/article.types";

type Props = { author: ArticleAuthor };

export function ArticleAuthorBox({ author }: Props) {
  const initials = author.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="mt-8 rounded-[20px] border border-[#E8DDC8] bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#061B3A] text-lg font-black text-[#D8B15A]">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-[#061B3A]">{author.name}</p>
            {author.verified && (
              <BadgeCheck className="size-5 text-[#C89B3C]" aria-label="Da xac minh" />
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-[#65758B]">
            {author.bio}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-[#C89B3C] px-5 py-2 text-sm font-bold text-[#C89B3C] transition hover:bg-[#C89B3C] hover:text-white"
            >
              Theo dõi
            </button>
            {author.socials && (
              <div className="flex gap-2">
                {author.socials.facebook && (
                  <a
                    href={author.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-8 place-items-center rounded-full border border-[#E8DDC8] text-[#65758B] transition hover:border-[#C89B3C] hover:text-[#C89B3C]"
                  >
                    <Globe className="size-4" />
                  </a>
                )}
                {author.socials.linkedin && (
                  <a
                    href={author.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid size-8 place-items-center rounded-full border border-[#E8DDC8] text-[#65758B] transition hover:border-[#C89B3C] hover:text-[#C89B3C]"
                  >
                    <Briefcase className="size-4" />
                  </a>
                )}
                {author.socials.youtube && (
                  <a
                    href={author.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="grid size-8 place-items-center rounded-full border border-[#E8DDC8] text-[#65758B] transition hover:border-[#C89B3C] hover:text-[#C89B3C]"
                  >
                    <Play className="size-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

type Props = { tags: string[] };

export function ArticleTags({ tags }: Props) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-[#65758B]">Tags</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tin-tuc?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border border-[#E8DDC8] px-4 py-1.5 text-sm text-[#10233F] transition hover:border-[#C89B3C] hover:bg-[#F8F5EF]"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

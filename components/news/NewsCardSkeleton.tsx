function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E8DDC8] bg-white">
      {/* Image placeholder */}
      <div className="aspect-[16/9] animate-pulse bg-[#E8DDC8]/40" />

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Date */}
        <div className="h-3 w-24 animate-pulse rounded bg-[#E8DDC8]/40" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-[#E8DDC8]/40" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-[#E8DDC8]/40" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-[#E8DDC8]/50" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-[#E8DDC8]/50" />
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-1">
          <div className="h-3 w-20 animate-pulse rounded bg-[#E8DDC8]/40" />
          <div className="h-3 w-20 animate-pulse rounded bg-[#E8DDC8]/40" />
        </div>
      </div>
    </div>
  );
}

export function NewsCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

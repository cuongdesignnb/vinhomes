export function ProjectSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[480px] bg-[#061B3A]">
        <div className="mx-auto max-w-[1240px] px-6 pt-32">
          <div className="h-4 w-48 rounded bg-white/10" />
          <div className="mt-6 h-10 w-80 rounded bg-white/10" />
          <div className="mt-4 h-6 w-96 rounded bg-white/10" />
          <div className="mt-6 flex gap-3">
            <div className="h-8 w-24 rounded-lg bg-white/10" />
            <div className="h-8 w-28 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>

      {/* Nav skeleton */}
      <div className="h-[52px] bg-[#061B3A]" />

      {/* Content skeleton */}
      <div className="mx-auto max-w-[1240px] space-y-12 px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-[16/10] rounded-[20px] bg-[#E8DDC8]/40" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-[#E8DDC8]/40" />
            <div className="h-4 w-5/6 rounded bg-[#E8DDC8]/40" />
            <div className="h-4 w-3/4 rounded bg-[#E8DDC8]/40" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-20 rounded-[14px] bg-[#E8DDC8]/40" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

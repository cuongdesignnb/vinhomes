export function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="flex h-[380px] flex-col items-center justify-center bg-[#061B3A] px-4 lg:h-[480px]">
        <div className="h-4 w-48 rounded bg-white/10" />
        <div className="mt-6 h-10 w-full max-w-[700px] rounded bg-white/10" />
        <div className="mt-3 h-10 w-full max-w-[500px] rounded bg-white/10" />
        <div className="mt-4 h-4 w-full max-w-[600px] rounded bg-white/10" />
        <div className="mt-6 flex gap-3">
          <div className="h-7 w-24 rounded-lg bg-white/10" />
          <div className="h-7 w-28 rounded bg-white/10" />
          <div className="h-7 w-24 rounded bg-white/10" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Main */}
        <div className="space-y-6">
          <div className="aspect-[16/9] rounded-[20px] bg-gray-200" />
          <div className="rounded-[18px] bg-[#F8F5EF] p-6">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-7 w-64 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="h-[280px] rounded-[20px] bg-gray-200" />
          <div className="h-[220px] rounded-[20px] bg-gray-200" />
          <div className="h-[180px] rounded-[20px] bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

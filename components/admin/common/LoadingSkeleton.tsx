export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[120px] rounded-[18px] bg-[#E5EAF2]/60" />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-[350px] rounded-[18px] bg-[#E5EAF2]/60" />
        <div className="h-[350px] rounded-[18px] bg-[#E5EAF2]/60" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="h-[280px] rounded-[18px] bg-[#E5EAF2]/60" />
        <div className="h-[280px] rounded-[18px] bg-[#E5EAF2]/60" />
        <div className="h-[280px] rounded-[18px] bg-[#E5EAF2]/60" />
      </div>
    </div>
  );
}

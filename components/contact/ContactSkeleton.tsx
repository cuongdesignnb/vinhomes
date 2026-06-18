export function ContactSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[480px] bg-[#061B3A]">
        <div className="mx-auto max-w-[1240px] px-6 pt-32">
          <div className="h-4 w-48 rounded bg-white/10" />
          <div className="mt-6 h-10 w-80 rounded bg-white/10" />
          <div className="mt-4 h-6 w-96 rounded bg-white/10" />
        </div>
      </div>
      <div className="h-[52px] bg-[#061B3A]" />
      <div className="mx-auto max-w-[1240px] space-y-8 px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="h-64 rounded-[20px] bg-[#E8DDC8]/40" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-[#E8DDC8]/40" />
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => <div key={i} className="h-24 rounded-[16px] bg-[#E8DDC8]/40" />)}
            </div>
          </div>
          <div className="h-80 rounded-[22px] bg-[#E8DDC8]/40" />
        </div>
      </div>
    </div>
  );
}

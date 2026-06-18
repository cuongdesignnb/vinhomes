import React from "react";

export function WelcomeHeroSkeleton() {
  return (
    <div className="w-full bg-[#F8F5EF] border border-[#E5EAF2] rounded-[18px] p-6 md:p-8 animate-pulse">
      <div className="max-w-2xl space-y-4">
        {/* Welcome Tag */}
        <div className="h-4 w-32 bg-slate-200 rounded" />
        {/* Main Title */}
        <div className="h-8 md:h-10 w-3/4 bg-slate-300 rounded-lg" />
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-5/6 bg-slate-200 rounded" />
          <div className="h-4 w-1/2 bg-slate-200 rounded" />
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="h-10 w-36 bg-slate-300 rounded-full" />
          <div className="h-10 w-28 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function KpiGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#E5EAF2] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] animate-pulse"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 space-y-3">
              <div className="h-3 w-16 bg-slate-200 rounded" />
              <div className="h-7 w-24 bg-slate-300 rounded" />
              <div className="h-3 w-32 bg-slate-200 rounded" />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200 shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#E5EAF2] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.04)] animate-pulse"
        >
          {/* Image placeholder */}
          <div className="aspect-[16/10] bg-slate-200 w-full" />
          <div className="p-6 space-y-4">
            {/* Tag/Badge row */}
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-slate-200 rounded-full" />
              <div className="h-5 w-20 bg-slate-200 rounded-full" />
            </div>
            {/* Project Title */}
            <div className="h-6 w-5/6 bg-slate-300 rounded" />
            {/* Project Info */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-200 rounded" />
              <div className="h-3 w-2/3 bg-slate-200 rounded" />
            </div>
            {/* Divider */}
            <div className="border-t border-slate-100 my-4" />
            {/* Footer Pricing/Details */}
            <div className="flex justify-between items-center">
              <div className="h-5 w-24 bg-slate-300 rounded" />
              <div className="h-8 w-20 bg-slate-200 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AppointmentsSkeleton() {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] space-y-6 animate-pulse">
      {/* Title */}
      <div className="h-5 w-48 bg-slate-300 rounded mb-8" />
      {/* Timeline items */}
      <div className="relative border-l border-slate-200 ml-3 space-y-8 pb-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="relative pl-6">
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white" />
            {/* Date time */}
            <div className="h-3.5 w-24 bg-slate-200 rounded mb-2" />
            {/* Appointment Content */}
            <div className="space-y-2 max-w-lg">
              <div className="h-5 w-3/4 bg-slate-300 rounded" />
              <div className="h-3 w-1/2 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PaymentProgressSkeleton() {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] space-y-6 animate-pulse">
      {/* Title & Amount header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <div className="space-y-2">
          <div className="h-5 w-40 bg-slate-300 rounded" />
          <div className="h-3 w-56 bg-slate-200 rounded" />
        </div>
        <div className="h-7 w-32 bg-slate-300 rounded-lg" />
      </div>
      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="flex flex-row md:flex-col items-center md:items-start gap-4">
            {/* Circle Number */}
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0" />
            {/* Text description */}
            <div className="space-y-2 flex-1 md:w-full">
              <div className="h-4 w-5/6 bg-slate-300 rounded" />
              <div className="h-3.5 w-2/3 bg-slate-200 rounded" />
              <div className="h-3 w-1/2 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocumentsSkeleton() {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] space-y-4 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="h-5 w-36 bg-slate-300 rounded" />
        <div className="h-8 w-24 bg-slate-200 rounded-lg" />
      </div>
      {/* Document rows */}
      <div className="divide-y divide-slate-100">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="py-4 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Doc Icon placeholder */}
              <div className="w-10 h-10 rounded-lg bg-slate-200 shrink-0" />
              {/* Doc Name & metadata */}
              <div className="space-y-2 flex-1 min-w-0">
                <div className="h-4 w-2/3 bg-slate-300 rounded" />
                <div className="h-3 w-28 bg-slate-200 rounded" />
              </div>
            </div>
            {/* Actions */}
            <div className="h-8 w-8 rounded bg-slate-200 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

interface LoadingSkeletonProps {
  variant?: "hero" | "kpi" | "projects" | "appointments" | "payments" | "documents" | "all";
}

export default function LoadingSkeleton({ variant = "all" }: LoadingSkeletonProps) {
  switch (variant) {
    case "hero":
      return <WelcomeHeroSkeleton />;
    case "kpi":
      return <KpiGridSkeleton />;
    case "projects":
      return <ProjectListSkeleton />;
    case "appointments":
      return <AppointmentsSkeleton />;
    case "payments":
      return <PaymentProgressSkeleton />;
    case "documents":
      return <DocumentsSkeleton />;
    case "all":
    default:
      return (
        <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-6">
          <WelcomeHeroSkeleton />
          <KpiGridSkeleton />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProjectListSkeleton />
              <PaymentProgressSkeleton />
            </div>
            <div className="space-y-8">
              <AppointmentsSkeleton />
              <DocumentsSkeleton />
            </div>
          </div>
        </div>
      );
  }
}

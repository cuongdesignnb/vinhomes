import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import RevenueChart from "./RevenueChart";
import ProjectStatusDonut from "./ProjectStatusDonut";
import ProductSalesDonut from "./ProductSalesDonut";
import type {
  BusinessMetric,
  ChartPoint,
  LeadSource,
} from "@/features/admin/dashboard/dashboard.types";

interface BusinessAnalyticsSectionProps {
  businessMetrics: BusinessMetric[];
  revenueChart: ChartPoint[];
  projectStatus: LeadSource[];
  productSales: LeadSource[];
}

function MetricCard({ metric }: { metric: BusinessMetric }) {
  const config = {
    increase: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      Icon: ArrowUpRight,
    },
    decrease: {
      bg: "bg-red-50",
      text: "text-red-600",
      Icon: ArrowDownRight,
    },
    neutral: {
      bg: "bg-slate-100",
      text: "text-slate-500",
      Icon: Minus,
    },
  };

  const { bg, text, Icon } = config[metric.changeType];

  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-4">
      <p className="text-xs text-[#65758B] mb-1">{metric.title}</p>
      <p className="text-xl font-black text-[#10233F] mb-1.5">
        {metric.value}
      </p>
      <span
        className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${bg} ${text}`}
      >
        <Icon className="size-3" />
        {metric.changeText}
      </span>
    </div>
  );
}

export default function BusinessAnalyticsSection({
  businessMetrics,
  revenueChart,
  projectStatus,
  productSales,
}: BusinessAnalyticsSectionProps) {
  const totalProjects = projectStatus.reduce((sum, s) => sum + s.value, 0);
  const totalSold = productSales.reduce((sum, s) => sum + s.value, 0);

  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-[#10233F]">
        Báo cáo & Phân tích kinh doanh
      </h3>

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {businessMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <RevenueChart data={revenueChart} />
        </div>
        <div className="lg:col-span-1">
          <ProjectStatusDonut data={projectStatus} totalProjects={totalProjects} />
        </div>
        <div className="lg:col-span-1">
          <ProductSalesDonut data={productSales} totalSold={totalSold} />
        </div>
      </div>
    </div>
  );
}

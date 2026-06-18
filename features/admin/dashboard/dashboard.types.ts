export interface DashboardKpi {
  id: string;
  title: string;
  value: string | number;
  changeText: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: string;
}

export interface ChartPoint {
  date: string;
  leadNew?: number;
  appointments?: number;
  convertedCustomers?: number;
  views?: number;
  clicks?: number;
  revenue?: number;
}

export interface LeadSource {
  name: string;
  value: number;
  percent: number;
  color: string;
}

export interface ApprovalTask {
  id: string;
  title: string;
  type: string;
  time: string;
  status: "pending" | "processing" | "approved";
}

export interface RecentLead {
  id: string;
  name: string;
  phone: string;
  source: string;
  time: string;
  status: "new" | "contacted" | "qualified" | "appointment_booked" | "negotiating" | "won" | "lost";
}

export interface ManagedProject {
  id: string;
  name: string;
  thumbnail: string;
  totalProducts: number;
  soldProducts: number;
  absorptionRate: number;
  status: "open" | "upcoming" | "handover" | "draft";
}

export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  type: "lead" | "appointment" | "post" | "form" | "user";
}

export interface SeoKeyword {
  keyword: string;
  position: number;
  searchVolume: number;
  change: number;
}

export interface PopularPost {
  title: string;
  views: string;
}

export interface OptimizationPage {
  path: string;
  score: number;
}

export interface ScheduledPost {
  date: string;
  time: string;
  title: string;
}

export interface BusinessMetric {
  id: string;
  title: string;
  value: string;
  changeText: string;
  changeType: "increase" | "decrease" | "neutral";
}

export interface DashboardOverview {
  kpis: DashboardKpi[];
  leadPerformance: ChartPoint[];
  seoPerformance: ChartPoint[];
  leadSources: LeadSource[];
  approvalTasks: ApprovalTask[];
  recentLeads: RecentLead[];
  managedProjects: ManagedProject[];
  activities: ActivityItem[];
  seoKeywords: SeoKeyword[];
  popularPosts: PopularPost[];
  optimizationPages: OptimizationPage[];
  scheduledPosts: ScheduledPost[];
  businessMetrics: BusinessMetric[];
  revenueChart: ChartPoint[];
  projectStatus: LeadSource[];
  productSales: LeadSource[];
}

export interface UserProfile {
  id: string;
  fullName: string;
  avatar: string;
  memberLevel: string;
  memberPoints: number;
  memberBenefitsCount: number;
  roleLabel: string;
}

export interface UserKpi {
  id: string;
  title: string;
  value: number | string;
  description: string;
  icon: string;
  href?: string;
}

export interface UserProject {
  id: string;
  name: string;
  slug: string;
  location: string;
  priceText: string;
  statusLabel: string;
  statusType: "interested" | "surveying" | "visited" | "reserved";
  image: string;
  href: string;
  isSaved: boolean;
}

export interface UserAppointment {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  location: string;
  type: "visit" | "consult" | "online";
  status: "confirmed" | "pending" | "upcoming";
}

export interface UserProgressStep {
  id: string;
  title: string;
  statusLabel: string;
  dateText: string;
  status: "completed" | "active" | "pending";
}

export interface UserDocument {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  href: string;
  isNew?: boolean;
}

export interface UserNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "appointment" | "promotion" | "document" | "support";
  isUnread?: boolean;
}

export interface SupportContact {
  id: string;
  title: string;
  value: string;
  description: string;
  type: "hotline" | "zalo" | "email";
}

export interface UserDashboardOverview {
  profile: UserProfile;
  kpis: UserKpi[];
  interestedProjects: UserProject[];
  appointments: UserAppointment[];
  progressProjectName: string;
  progressSteps: UserProgressStep[];
  documents: UserDocument[];
  notifications: UserNotification[];
  supportContacts: SupportContact[];
}

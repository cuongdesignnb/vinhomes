export type UserRole = "CUSTOMER" | "VIP_CUSTOMER" | "INVESTOR" | "AGENT_CUSTOMER";

export interface UserAuthState {
  userId?: string;
  fullName?: string;
  avatar?: string;
  role?: UserRole;
  isAuthenticated: boolean;
  setUser: (user: Partial<UserAuthState>) => void;
  logout: () => void;
}

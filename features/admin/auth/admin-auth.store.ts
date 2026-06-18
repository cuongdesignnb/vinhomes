import { create } from "zustand";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar?: string | null;
}

interface AdminAuthState {
  token: string | null;
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (token: string, user: AdminUser) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAdminAuthStore = create<AdminAuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  login: (token, user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("vinhomes_admin_token", token);
      localStorage.setItem("vinhomes_admin_user", JSON.stringify(user));
    }
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("vinhomes_admin_token");
      localStorage.removeItem("vinhomes_admin_user");
    }
    set({ token: null, user: null, isAuthenticated: false });
  },

  initialize: () => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("vinhomes_admin_token");
    const userJson = localStorage.getItem("vinhomes_admin_user");
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        set({ token, user, isAuthenticated: true });
      } catch (e) {
        localStorage.removeItem("vinhomes_admin_token");
        localStorage.removeItem("vinhomes_admin_user");
      }
    }
  },
}));

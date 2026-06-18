import { create } from "zustand";
import type { UserAuthState } from "./user-auth.types";

export const useUserAuthStore = create<UserAuthState>((set) => ({
  userId: "user_01",
  fullName: "Nguyễn Minh An",
  avatar: "/images/user/avatar-minh-an.jpg",
  role: "VIP_CUSTOMER",
  isAuthenticated: true,

  setUser: (userData) => set((state) => ({ ...state, ...userData })),
  logout: () =>
    set({
      userId: undefined,
      fullName: undefined,
      avatar: undefined,
      role: undefined,
      isAuthenticated: false,
    }),
}));

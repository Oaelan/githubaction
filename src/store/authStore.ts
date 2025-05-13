import { create } from "zustand";
import { setCookie, removeCookie, getCookiebyKey } from "@/lib/utils/cookie";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  isPending: boolean;
  setIsAuthenticated: (value: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isPending: true,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post("https://example.com/api/auth/login", {
        email,
        password,
      });

      setCookie("token", response.data.token);
      set({
        isAuthenticated: true,
      });
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    removeCookie("token");
    set({
      isAuthenticated: false,
    });
  },
  checkAuth: () => {
    const token = getCookiebyKey("token");
    if (token) {
      set({ isAuthenticated: true });
    }
    set({ isPending: false });
  },
}));

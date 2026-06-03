import React, { createContext, useContext, useEffect, useState } from "react";
import type { Guest } from "../types/auth/auth";

interface authContextType {
  user: Guest | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginSuccess: (userData: Guest) => void;
  logout: () => void;
}

const authContext = createContext<authContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Guest | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("guest_session");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const loginSuccess = (userData: Guest) => {
    setUser(userData);
    localStorage.setItem("guest_session", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("guest_session");
  };

  return (
    <authContext.Provider
      value={{ user, isAuthenticated: !!user, isLoading, loginSuccess, logout }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth phai duoc su dung trong AuthProvider");
  }
  return context;
}

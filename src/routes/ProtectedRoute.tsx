import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { GuestLogin } from "../page/auth/Login";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <div className="w-10 h-10 border-4 border-accent-400 border-r-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <GuestLogin />;
  }

  return <Outlet />;
}

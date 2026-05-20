import { Outlet } from "react-router-dom";
import GuestSidebar from "../../components/guest/GuestSidebar";

export const Guest = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-8 flex-1 flex flex-row gap-12">
      <GuestSidebar />
      <div className="flex-grow py-4">
        <Outlet />
      </div>
    </div>
  );
};

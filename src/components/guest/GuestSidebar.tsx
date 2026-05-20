import { NavLink } from "react-router-dom";
import { Home, Calendar, User, LogOut } from "lucide-react";

export default function GuestSidebar() {
  const navItems = [
    {
      to: "/guest",
      label: "Home",
      icon: (
        <Home className="w-5 h-5 text-primary-400 group-hover:text-accent-400 transition-colors" />
      ),
    },
    {
      to: "/guest/reservations",
      label: "Reservations",
      icon: (
        <Calendar className="w-5 h-5 text-primary-400 group-hover:text-accent-400 transition-colors" />
      ),
    },
    {
      to: "/guest/profile",
      label: "Guest profile",
      icon: (
        <User className="w-5 h-5 text-primary-400 group-hover:text-accent-400 transition-colors" />
      ),
    },
  ];

  return (
    <aside className="border-r border-primary-900 flex flex-col justify-between py-6 w-64 ">
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/guest"}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-6 py-4 font-semibold text-lg transition-all duration-300 ${
                  isActive
                    ? "bg-primary-900/50 text-accent-400 border-l-4 border-accent-400"
                    : "text-primary-100 hover:bg-primary-900/30 hover:text-accent-400 border-l-4 border-transparent"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="px-6 pt-6 border-t border-primary-900 mt-auto">
        <button className="group flex w-full items-center gap-4 py-3 font-semibold text-lg text-primary-300 hover:text-accent-400 transition-colors cursor-pointer">
          <LogOut className="w-5 h-5 text-primary-400 group-hover:text-accent-400 transition-colors" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}

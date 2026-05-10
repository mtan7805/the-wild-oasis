import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/cabins", label: "Cabins" },
  { path: "/about", label: "About" },
  { path: "/guest", label: "Guest area" },
];

export default function Navigation({
  handleToggle,
  isMobile = false,
}: {
  handleToggle: () => void;
  isMobile?: boolean;
}) {
  return (
    <nav className="w-full">
      <ul
        className={`flex ${
          isMobile ? "flex-col" : "flex-row gap-10 items-center"
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={
              isMobile ? "border-b border-primary-900 last:border-none" : ""
            }
          >
            <NavLink
              to={link.path}
              end={link.path === "/"}
              onClick={handleToggle}
              className={({ isActive }) =>
                `block transition-all duration-300 text-xl tracking-wide ${
                  isMobile ? "py-6 text-2xl font-semibold" : ""
                } ${
                  isActive
                    ? "text-accent-400"
                    : "text-primary-100 hover:text-accent-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

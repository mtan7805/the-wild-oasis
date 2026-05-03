import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/cabins", label: "Cabins" },
  { path: "/about", label: "About" },
  { path: "/guest", label: "Guest area" },
];

export default function Navigation({
  handleToggle,
}: {
  handleToggle: () => void;
}) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-10 items-center">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.path === "/"}
              onClick={handleToggle}
              className={({ isActive }) =>
                `transition-all duration-300 text-xl tracking-wide ${
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

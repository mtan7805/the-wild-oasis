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
    <nav className="w-full lg:w-auto">
      <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:pt-2.5">
        {navLinks.map((link) => (
          <li key={link.path} className="w-full lg:w-auto">
            <NavLink
              to={link.path}
              end={link.path === "/"}
              onClick={handleToggle}
              className={({ isActive }) =>
                `transition text-xl tracking-wide border-b border-b-primary-800 pb-3 lg:border-none lg:pb-0 block w-full lg:w-auto ${
                  isActive ? "text-accent-400" : "text-white/80 hover:text-accent-400"
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

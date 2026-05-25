import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

function Logo({ handleToggle }: { handleToggle: () => void }) {
  return (
    <Link to="/" onClick={handleToggle} className="flex items-center gap-3">
      <img src={logo} alt="logo" className="h-12.5 w-auto" />
      <span className="text-white text-xl font-medium tracking-wide">
        Lê Minh Tân
      </span>
    </Link>
  );
}

export default Logo;

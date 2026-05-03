import { useLocation } from "react-router-dom";
import NavToggle from "./NavToggle";

function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* nền blur giống website mẫu */}
      <div className="bg-transparent bg-black/10 backdrop-blur-md ">
        <div className={`max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between ${!isHome ? "border-b border-primary-900" : ""}`}>
          <NavToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

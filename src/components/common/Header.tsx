import Logo from "./Logo";
import NavToggle from "./NavToggle";
import Navigation from "./Navigation";

function Header({ className = "" }: { className?: string }) {
  return (
    <header
      className={`border-b border-primary-900 px-8 py-5 flex justify-between items-center ${className}`}
    >
      <Logo handleToggle={() => {}} />
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation handleToggle={() => {}} />
      </div>

      {/* Mobile Menu Toggle */}
      <NavToggle />
    </header>
  );
}

export default Header;

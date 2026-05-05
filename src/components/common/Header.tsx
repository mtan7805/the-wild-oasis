import NavToggle from "./NavToggle";

function Header({ className = "" }: { className?: string }) {
  return (
    <header
      className={`border-b border-primary-900 p-2 md:px-8 md:py-5 ${className}`}
    >
      <NavToggle />
    </header>
  );
}

export default Header;

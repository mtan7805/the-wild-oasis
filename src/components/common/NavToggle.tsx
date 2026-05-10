import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import Navigation from "./Navigation";

function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:hidden">
      <button
        title="Menu"
        onClick={handleToggle}
        className="text-primary-100 hover:text-accent-400 transition-colors select-none cursor-pointer z-50 relative"
      >
        <Bars3Icon className="size-8" />
      </button>

      {/* Mobile Overlay Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-primary-950 z-[100] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-8 py-5 border-b border-primary-900">
            <Logo handleToggle={handleToggle} />
            <button
              onClick={handleToggle}
              className="text-primary-100 hover:text-accent-400 transition-colors"
            >
              <XMarkIcon className="size-8" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto px-8">
            <Navigation handleToggle={handleToggle} isMobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavToggle;

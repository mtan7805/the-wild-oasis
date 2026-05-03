import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* overlay */}
      {isOpen && (
        <div onClick={handleToggle} className="fixed inset-0  md:hidden z-40" />
      )}

      {/* header content */}
      <div className="flex items-center justify-between w-full">
        <Logo handleToggle={handleToggle} />

        {/* desktop nav */}
        <div className="hidden lg:block">
          <Navigation handleToggle={handleToggle} />
        </div>

        {/* mobile button */}
        <button onClick={handleToggle} className="lg:hidden text-white z-100">
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`
          absolute lg:hidden p-6  left-0 right-0 top-20  z-100 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <div className="flex flex-col p-10 justify-start text-xl w-full bg-primary-900 space-y-6 font-semibold text-white rounded-sm ">
          <Navigation handleToggle={handleToggle} />
        </div>
      </div>
    </>
  );
}

export default NavToggle;

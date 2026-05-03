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
    <>
      <span
        onClick={handleToggle}
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden top-0 left-0 absolute h-screen w-screen bg-black/10 z-20`}
      />

      <button
        title="Menu"
        onClick={handleToggle}
        className="md:hidden bg-slate-500 shadow-lg text-slate-200 rounded-full size-12 flex justify-center items-center select-none cursor-pointer z-50 relative p-2"
      >
        {isOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>

      <div
        className={`${
          isOpen ? "top-0" : "-top-full"
        } flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto absolute right-0 md:relative bg-slate-300 md:bg-transparent h-fit md:h-auto w-screen md:w-auto z-40 py-8 md:p-0 shadow-lg md:shadow-none transition-all`}
      >
        <Logo handleToggle={handleToggle} />

        <Navigation handleToggle={handleToggle} />
      </div>
    </>
  );
}

export default NavToggle;

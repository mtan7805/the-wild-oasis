import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <title>The Wild Oasis</title>
    <div
      className={`font-[Josefin_Sans] antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Header className={isHome ? "border-none" : ""} />
      </div>

      <div className={`flex-1 flex flex-col ${isHome ? "pt-0" : "pt-24"}`}>
        <main className="w-full flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
    </>
  );
}

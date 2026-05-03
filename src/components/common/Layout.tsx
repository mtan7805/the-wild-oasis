import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen relative">
      <Header />
      <main className={!isHome ? "pt-24 pb-12" : ""}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

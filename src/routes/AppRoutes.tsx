import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import { HomePage } from "../page/home/HomePage";
import { Cabins } from "../page/cabins/Cabins";
import { About } from "../page/about/About";
import { Guest } from "../page/guest/Guest";
import { GuestHome } from "../page/guest/GuestHome";
import { GuestReservations } from "../page/guest/GuestReservations";
import { GuestProfile } from "../page/guest/GuestProfile";
import CabinDetail from "../page/cabins/CabinDetail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/:id" element={<CabinDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/guest" element={<Guest />}>
            <Route index element={<GuestHome />} />
            <Route path="reservations" element={<GuestReservations />} />
            <Route path="profile" element={<GuestProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


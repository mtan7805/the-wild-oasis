import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import { HomePage } from "../page/home/HomePage";
import { Cabins } from "../page/cabins/Cabins";
import { About } from "../page/about/About";
import { Guest } from "../page/guest/Guest";
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
          <Route path="/guest" element={<Guest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Welcome } from "../components/Home/Welcome";
import { Cabins } from "../page/cabins/Cabins";
import { About } from "../page/about/About";
import { Guest } from "../page/guest/Guest";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        ></Route>

        <Route
          path="/cabins"
          element={
            <Layout>
              <Cabins />
            </Layout>
          }
        ></Route>
        <Route
          path="/cabins"
          element={
            <Layout>
              <Cabins />
            </Layout>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        ></Route>

        <Route
          path="/guest"
          element={
            <Layout>
              <Guest />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

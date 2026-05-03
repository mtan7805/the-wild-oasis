import { Welcome } from "../../Home/Welcome";
import { CabinPreview } from "../../Home/CabinPreview";
import { HotelFacilities } from "../../Home/HotelFacilities";
import { AboutUs } from "../../Home/AboutUs";

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
      <CabinPreview />
      <HotelFacilities />
    </>
  );
};

import { CabinPreview } from "../../Home/CabinPreview";
import { HotelFacilities } from "../../Home/HotelFacilities";
import { AboutUs } from "../../Home/AboutUs";
import Welcome from "../../Home/Welcome";

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

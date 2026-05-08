import { CabinPreview } from "../../Home/CabinPreview";
import { HotelFacilities } from "../../Home/HotelFacilities";
import { AboutUs } from "../../Home/AboutUs";
import Welcome from "../../Home/Welcome";
import { ServicesPreview } from "../../Home/ServicesPreview";
import { Events } from "../../Home/Events";

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
      <CabinPreview />
      <HotelFacilities />
      <ServicesPreview />
      <Events />
    </>
  );
};

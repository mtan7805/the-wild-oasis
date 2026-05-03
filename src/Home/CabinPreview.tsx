import { Link } from "react-router-dom";
import MyButton from "../components/common/MyButton";
import cabin01 from "../assets/cabin001.webp";
import cabin02 from "../assets/cabin002.webp";
import cabin03 from "../assets/cabin003.webp";

export const CabinPreview = () => {
  return (
    <section>
      <div className="flex items-center justify-between gap-2 mb-8">
        <h1 className=" flex text-5xl items-center">Cabins Availability</h1>
        <Link to="/Cabins">
          <MyButton>All Cabins</MyButton>
        </Link>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div className="flex flex-col space-y-4">
          <Link
            to="#"
            className=" relative h-62.5 aspect-square overflow-hidden "
          >
            <img
              src={cabin01}
              alt="Cabin 01"
              className="absolute inset-0 object-cover object-center"
            />
          </Link>
          <h1 className="text-3xl tracking-wide uppercase font-medium">
            Cabin 001
          </h1>
          <div className="flex items-center gap-12">
            <span>1 King Bed</span>
            <span>Max 2 Guests</span>
          </div>
          <Link to="#" className="cursor-pointer">
            SEE DETAIL
          </Link>
          <hr className="border-primary-800" />

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>Start from</span>
              <span>
                <label className="text-xl font-bold">$450</label>
                <label>$/ night</label>
              </span>
            </div>

            <Link to="#">
              <MyButton>Check Availability</MyButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="#"
            className=" relative h-62.5 aspect-square overflow-hidden "
          >
            <img
              src={cabin02}
              alt="Cabin 02"
              className="absolute inset-0px object-cover object-center"
            />
          </Link>
          <h1 className="text-3xl tracking-wide">Cabin 002</h1>
          <div className="flex items-center gap-12">
            <span>2 Double Beds</span>
            <span>Max 4 Guests</span>
          </div>
          <Link to="#" className="cursor-pointer">
            SEE DETAIL
          </Link>
          <hr className="border-primary-800" />

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>Start from</span>
              <span>
                <label className="text-xl font-bold">$300</label>
                <label>$/ night</label>
              </span>
            </div>
            <Link to="#">
              <MyButton>Check Availability</MyButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="#"
            className=" relative h-62.5 aspect-square overflow-hidden "
          >
            <img
              src={cabin03}
              alt="Cabin 03"
              className="absolute inset-0 object-cover object-center"
            />
          </Link>
          <h1 className="text-3xl tracking-wide uppercase font-medium">
            Cabin 003
          </h1>
          <div className="flex items-center gap-12">
            <span>2 King Bed</span>
            <span>Max 6 Guests</span>
          </div>
          <Link to="#" className="cursor-pointer">
            SEE DETAIL
          </Link>
          <hr className="border-primary-800" />

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>Start from</span>
              <span>
                <label className="text-xl font-bold">$350</label>
                <label>$/ night</label>
              </span>
            </div>

            <Link to="#">
              <MyButton>Check Availability</MyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

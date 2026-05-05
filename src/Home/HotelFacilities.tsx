import car from "../assets/car.webp";
import breakfast from "../assets/breakfast.webp";
import gym from "../assets/gym.webp";
import spa from "../assets/spa.webp";
import safe from "../assets/safe.webp";
import pool from "../assets/pool.webp";
import wifi from "../assets/wifi.webp";
import workspace from "../assets/workspace.webp";

export const HotelFacilities = () => {
  return (
    <section className="py-20 space-y-20">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="sm:text-5xl text-4xl uppercase tracking-wide font-bold">
          Hotel Facilities
        </h1>
        <p className="max-w-3xl text-xl text-center">
          Enjoy modern comforts including Wi-Fi, gym, spa, and an outdoor pool.
          From fine dining to a tennis court, every facility is designed to
          elevate your stay.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-wrap md:gap-x-36 md:gap-y-8 md:items-center md:justify-center md:max-w-5xl md:mx-auto">
        <div className="flex flex-col items-center gap-4">
          <img src={car} alt="" className="invert" />
          <p className="text-lg font-medium">Parking</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={breakfast} alt="" className="invert" />
          <p className="text-lg font-medium">Breakfast</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={wifi} alt="" className="invert" />
          <p className="text-lg font-medium">Wifi</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={gym} alt="" className="invert" />
          <p className="text-lg font-medium">Gym</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={pool} alt="" className="invert" />
          <p className="text-lg font-medium">Swimming Pool</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={safe} alt="" className="invert" />
          <p className="text-lg font-medium">Safe</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={spa} alt="" className="invert" />
          <p className="text-lg font-medium">Spa</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src={workspace} alt="" className="invert" />
          <p className="text-lg font-medium">Workspace</p>
        </div>
      </div>
    </section>
  );
};

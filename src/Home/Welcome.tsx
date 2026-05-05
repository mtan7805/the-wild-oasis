import { Link } from "react-router-dom";
import bg from "../assets/bg.webp";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <img
        src={bg}
        alt="Mountains and forests with two cabins"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        <p className="sr-only">
          Explore The Wild Oasis Booking by Alamin (CodeWithAlamin). Find unique
          destinations, thrilling activities, and plan your next wild getaway.
        </p>

        <Link
          to="/cabins"
          className="bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-900 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}

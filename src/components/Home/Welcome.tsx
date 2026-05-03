import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <img
        src="https://www.thewildoasis.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.c8baead7.png&w=3840&q=80"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <p className="sr-only">
          Explore The Wild Oasis Booking by Alamin (CodeWithAlamin). Find unique
          destinations, thrilling activities, and plan your next wild getaway.
        </p>
        <Link
          to="/cabins"
          className="bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all relative"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import about1 from "../assets/AboutUs1.webp";

export const AboutUs = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-4/3 rounded-sm overflow-hidden border border-primary-800 shadow-2xl group">
          <img
            src={about1}
            alt="Our luxury resort cabin"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="space-y-8 lg:pl-10">
          <h2 className="text-4xl md:text-6xl font-normal text-primary-50 tracking-tight leading-tight">
            Stay in the heart of the Dolomites.
          </h2>

          <div className="space-y-6 text-lg text-primary-200 font-light leading-relaxed">
            <p>
              The Wild Oasis is a small, family-owned hotel located in the heart
              of the Italian Dolomites. Our mission is to provide our guests
              with a unique and unforgettable experience in one of the most
              beautiful places on Earth.
            </p>
            <p>
              We believe that true luxury is about simplicity and connection
              with nature. Our cabins are designed to provide you with
              everything you need for a comfortable stay, while keeping you
              close to the stunning surroundings.
            </p>
          </div>

          <Link
            to={"/about"}
            className="px-10 py-5 bg-accent-500 text-primary-900 font-semibold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-accent-500/20 active:scale-95 block w-fit mx-auto lg:inline-block lg:mx-0"
          >
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

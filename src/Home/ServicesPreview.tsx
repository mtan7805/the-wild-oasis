import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";

export const ServicesPreview = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
      <div className="relative">
        <img
          src={service1}
          alt="Restaurant"
          className="object-cover object-center w-full h-125 bg-transparent"
        />
        <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
          Restaurant
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="relative">
          <img
            src={service2}
            alt="Tennis court"
            className="object-cover object-center w-full md:w-100 h-67.5 bg-transparent"
          />
          <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
            Tennis court
          </div>
        </div>
        <div className="relative">
          <img
            src={service3}
            alt="Tennis court"
            className="object-cover object-center w-full md:w-100 h-67.5 bg-transparent"
          />
          <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
            Tennis court
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={service4}
          alt="Swimming Pool"
          className="object-cover object-center w-full h-125 bg-transparent"
        />
        <div className="absolute uppercase bottom-5 left-5 text-xl px-4 py-1 bg-primary-800 text-center tracking-wide">
          Swimming Pool
        </div>
      </div>
    </section>
  );
};

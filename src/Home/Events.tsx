import event1 from "../assets/event1.webp";
import event2 from "../assets/event2.webp";
import event3 from "../assets/event3.webp";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("please contact with us");

export const Events = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl sm:text-5xl uppercase sm:text-center tracking-wide font-bold">
        Upcoming Events
      </h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div className="flex flex-col space-y-4 transform">
          <div className="relative h-62.5 aspect-square">
            <img
              src={event1}
              alt="Sharing is Caring"
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent"
            />
          </div>
          <h1 className="text-3xl">Sharing is Caring</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span>12 November 2025</span>
            <span className="hidden md:inline">|</span>
            <span>3:00 - 5:00 PM</span>
          </div>
          <div>
            <button
              className="uppercase text-xl cursor-pointer w-fit"
              onClick={notify}
            >
              {" "}
              See Detail
            </button>
            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "#1e293b",
                  color: "#22c55e",
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 transform">
          <div className="relative h-62.5 aspect-square">
            <img
              src={event2}
              alt="Romantic Dinner"
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent"
            />
          </div>
          <h1 className="text-3xl">Romantic Dinner</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span>11 December 2025</span>
            <span className="hidden md:inline">|</span>
            <span>8:00 - 11:00 PM</span>
          </div>
          <div>
            <button
              className="uppercase text-xl cursor-pointer w-fit"
              onClick={notify}
            >
              {" "}
              See Detail
            </button>
            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "#1e293b",
                  color: "#22c55e",
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 transform">
          <div className="relative h-62.5 aspect-square">
            <img
              src={event3}
              alt="Party New Year Eve"
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent"
            />
          </div>
          <h1 className="text-3xl">Party New Year Eve</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span>31 December 2025</span>
            <span className="hidden md:inline">|</span>
            <span>10:00 PM - 1:00 AM</span>
          </div>
          <div>
            <button
              className="uppercase text-xl cursor-pointer w-fit"
              onClick={notify}
            >
              {" "}
              See Detail
            </button>
            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "#1e293b",
                  color: "#22c55e",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

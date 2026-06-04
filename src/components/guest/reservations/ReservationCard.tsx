import { Link } from "react-router-dom";
import type { Booking } from "../../../types/bookings/bookings";
import dayjs from "dayjs";

export const ReservationCard = ({
  booking,
  onChooseData,
}: {
  booking: Booking;
  onChooseData: (id: string) => void;
}) => {
  const handleDeleteBooking = async (id: string) => {
    onChooseData(id);
  };
  return (
    <div className="flex md:flex-row flex-col border border-primary-800">
      {/* IMAGE */}
      <div className="relative h-44 md:h-34 lg:h-36 aspect-square">
        <img
          src={booking.cabins.image}
          alt={booking.cabins.image}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-grow flex flex-col px-5 py-3 gap-2 md:gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            {booking.numNights} nights in {booking.cabins.name}
          </h3>
        </div>

        {/* DATE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-primary-300">
            {dayjs(booking.startDate).format("ddd, MMM DD YYYY")} -{" "}
            {dayjs(booking.endDate).format("ddd, MMM DD YYYY")}
          </p>
        </div>

        {/* PRICE */}
        <div className="flex flex-col md:flex-row items-baseline gap-1">
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold text-accent-400">
              ${booking.cabinPrice}
            </p>
            <p className="text-primary-300">•</p>
            <p className="text-lg text-primary-300">
              {booking.numGuests} Guest{booking.numGuests > 1 && "s"}
            </p>
          </div>
          <p className="md:ml-auto text-sm text-primary-400">
            Booked {dayjs(booking.createdAt).format("ddd, DD/MM/YYYY HH:mm")}
          </p>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex items-center gap-2">
            <p className="text-primary-300 text-sm">Status: </p>
            <span className="bg-blue-600 text-blue-200 h-5 px-3 uppercase text-[10px] font-bold flex items-center rounded-sm">
              {booking.status}
            </span>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="hidden lg:flex flex-col border-l border-primary-800 w-25">
        <Link
          to={`/guest/reservations/edit/${booking._id}`}
          className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
          Edit
        </Link>

        <button
          onClick={() => handleDeleteBooking(booking._id)}
          className="group cursor-pointer flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

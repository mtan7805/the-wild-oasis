import React from "react";
import { ReservationList } from "../../components/guest/reservations/ReservationList";

export const GuestReservations = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      <ReservationList />
    </div>
  );
};

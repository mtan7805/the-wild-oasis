import type { Booking } from "../../../types/bookings/bookings";
import { useState } from "react";
import { ReservationCard } from "./ReservationCard";
import { useAuth } from "../../../context/authContext";
import toast from "react-hot-toast";

export default function ReservationList({ bookings }: { bookings: Booking[] }) {
  const userData = useAuth();
  const [reservationList, setReservationList] = useState<Booking[]>(bookings);

  const handleDelete = async (bookingId: string) => {
    const isConfirm = window.confirm("Bạn có muốn xoá không?");
    if (!isConfirm) return;
    if (userData.user?.access_token) {
      const res = await fetch(
        `http://localhost:3000/api/bookings/${bookingId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.user.access_token}`,
          },
        },
      );
      try {
        if (res.status === 200) {
          setReservationList((prev) => prev.filter((b) => b.id !== bookingId));
          toast.success("Huỷ đặt phòng thành công!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Hủy đặt phòng thất bại. Vui lòng thử lại!");
      }
    }
  };

  console.log(reservationList, "reservationListreservationList");
  return !reservationList.length ? (
    <>
      {" "}
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      <p className="text-lg">
        You have no reservations yet. Check out our{" "}
        <a className="underline text-accent-500" href="/cabins">
          luxury cabins &rarr;
        </a>
      </p>
    </>
  ) : (
    <ul className="space-y-6">
      {reservationList.map((booking) => (
        <ReservationCard
          key={booking._id}
          booking={booking}
          onChooseData={handleDelete}
        />
      ))}
    </ul>
  );
}

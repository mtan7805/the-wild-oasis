import { useEffect, useState } from "react";
import ReservationList from "../../components/guest/reservations/ReservationList";
import { useAuth } from "../../context/authContext";
import { getBookingsGuest } from "../../services/cabins.api";
import type { Booking } from "../../types/bookings/bookings";
import Spinner from "../../components/common/Spinner";

export const GuestReservations = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.access_token) return;
      try {
        const data = await getBookingsGuest(user.access_token);
        setBookings(data || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?.access_token]);

  if (loading) return <Spinner />;

  return (
    <div>
      <ReservationList bookings={bookings} />
    </div>
  );
};

import { useEffect, useState } from "react";
import type { Booking } from "../../../types/bookings/bookings";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { getBookingApi, updateBookingApi } from "../../../services/cabins.api";
import toast from "react-hot-toast";
import Spinner from "../../common/Spinner";

export const EditReservation = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams<{ bookingId: string }>();
  const { user } = useAuth();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [numGuests, setNumGuests] = useState(1);
  const [observations, setObservations] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId || !user?.access_token) return;
      try {
        const data = await getBookingApi(bookingId, user.access_token);
        setBooking(data);
        setNumGuests(data.numGuests);
        setObservations(data.observations || "");
      } catch (error) {
        console.error("Error fetching booking:", error);
        toast.error("Không thể tải thông tin đặt phòng");
        navigate("/guest/reservations");
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [bookingId, user?.access_token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingId || !user?.access_token) return;

    setIsUpdating(true);
    try {
      await updateBookingApi(
        bookingId,
        { numGuests, observations },
        user.access_token,
      );
      toast.success("Cập nhật phòng đặt thành công!");
      navigate("/guest/reservations");
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Cập nhật thất bại. Vui lòng thử lại!");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) return <Spinner />;
  if (!booking)
    return (
      <div className="text-center py-8">
        Không tìm thấy thông tin đặt phòng.
      </div>
    );
  const maxCapacity = booking.cabins?.maxCapacity || 8;

  return (
    <div className="space-y-5">
      <div className="font-semibold text-2xl text-accent-400 mb-7">
        <p>Edit Reservation {booking?.cabins.name}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-primary-900 flex flex-col">
        <div className="flex flex-col px-8 py-5 gap-4">
          <div>
            <label className="block test-sm mb-1">
              How many guests? <span className="text-red-400">*</span>
            </label>
            <select
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
              className="w-full p-2 text-black rounded-md bg-primary-200"
            >
              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block test-sm mb-1">
              Anything we should know about your stay?
            </label>
            <textarea
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              className="w-full p-2 rounded-md  bg-primary-200 text-black h-28"
              placeholder="Any pets, allergies, special requirements, etc.?"
            />
          </div>

          <button
            type="submit"
            disabled={isUpdating}
            className="bg-accent-500 text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-accent-500/20 active:scale-[0.98] cursor-pointer mt-4 w-full text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isUpdating ? "Updating..." : "Update Reservation"}
          </button>
        </div>
      </form>
    </div>
  );
};

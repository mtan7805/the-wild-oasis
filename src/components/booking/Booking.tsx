import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import type { CabinType } from "../../types/cabins/cabins";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface BookingProps {
  cabin: CabinType;
}

export const Booking = ({ cabin }: BookingProps) => {
  const [range, setRange] = useState<any>({});
  const [numGuests, setNumGuests] = useState(1);
  const [observations, setObservations] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const numNights =
    range?.from && range?.to
      ? Math.ceil(
          (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const { id, regularPrice, discount, maxCapacity } = cabin;

  const total = numNights * regularPrice;

  const handleReserve = async () => {
    setIsLoading(true);
    try {
      const payload = {
        cabinId: id,
        startDate: range.from.toISOString(),
        endDate: range.to.toISOString(),
        numGuests,
        observations,
      };
      console.log(payload, "payloadpayload");
      console.log(user, "user");

      // Giả lập thời gian gửi request 1.5 giây
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Đặt phòng thành công!");
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] bg-[#0f1c2e] text-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 flex flex-col  justify-between">
        <DayPicker
          animate
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          disabled={{ before: today }}
          className="text-white rdp-custom justify-center"
          styles={{
            day: { borderRadius: "10px" },
          }}
        />

        <div className="mt-6 bg-[#c49a6c] text-black p-4 rounded-xl flex justify-between items-center">
          <div className="flex gap-4 items-center font-semibold">
            {discount > 0 ? (
              <div className="flex gap-2 items-center">
                <span className="line-through text-gray-500">
                  ${regularPrice}
                </span>
                <span className="text-xl font-bold">
                  ${regularPrice - discount}
                </span>
                <span>/ night</span>
              </div>
            ) : (
              <span>${regularPrice} / night</span>
            )}

            <span className="bg-[#b88a55] px-3 py-1 rounded-md font-bold">
              <b className="font-medium">x {numNights}</b>
            </span>

            <span className="font-bold text-lg"> TOTAL: ${total}</span>
          </div>

          <button
            onClick={setRange}
            className=" border px-4 py-1 rounded-md hover:bg-black/10 transition cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="bg-primary-900 flex flex-col">
        <div className="flex items-center justify-between py-2 px-8 bg-primary-800">
          <span className=" text-gray-300">Logged in as</span>
          <div className="flex items-center gap-4">
            <span className="font-bold">{user?.fullName}</span>
          </div>
        </div>

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

          {numNights > 0 ? (
            <button
              onClick={handleReserve}
              disabled={isLoading}
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-accent-500/20 active:scale-[0.98] cursor-pointer mt-4 w-full text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? "Reserving..." : "Reserve now"}
            </button>
          ) : (
            <div className="group flex text-sm px-8 py-4 gap-2 items-center text-primary-300 cursor-pointer justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 group-hover:-translate-x-3 transition-transform "
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>

              <span>Start by selecting dates</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

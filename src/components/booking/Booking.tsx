import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export const Booking = () => {
  const [range, setRange] = useState<any>({});
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
          className="text-white rdp-custom"
          styles={{
            day: { borderRadius: "10px" },
          }}
        />
      </div>

      <div className="bg-[#1e293b] p-8 flex flex-col justify-between">sdg</div>
    </div>
  );
};

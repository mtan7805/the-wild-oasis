import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

export const Booking = () => {
  const [range, setRange] = useState<any>({});

  return (
    <div className="grid grid-cols-2 border border-primary-800">
      <div className="flex flex-row justify-between  text-white rounded-2xl overflow-hidden shadow-2xl">
        <DayPicker
          animate
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="text-white rdp-custom"
          styles={{
            day: { borderRadius: "8px" },
          }}
        />
      </div>

      <div>sdg</div>
    </div>
  );
};

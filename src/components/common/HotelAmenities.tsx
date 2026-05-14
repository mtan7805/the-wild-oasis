import {
  Dumbbell,
  CircleParking,
  Sparkles,
  UtensilsCrossed,
  BrushCleaning,
  WavesLadder,
  UserCheck,
  WashingMachine,
} from "lucide-react";

export const HotelAmenities = () => {
  const amenities = [
    { label: "GYM", icon: Dumbbell },
    { label: "Parking", icon: CircleParking },
    { label: "Spa", icon: Sparkles },
    { label: "Restaurants", icon: UtensilsCrossed },
    { label: "Room Service", icon: BrushCleaning },
    { label: "Swimming Pool", icon: WavesLadder },
    { label: "24 Hour ConciergeYM", icon: UserCheck },
    { label: "In-house Laundry", icon: WashingMachine },
  ];

  return (
    <div className="mb-16">
      <h1 className="text-4xl font-semibold text-accent-500 pb-8">
        Hotel Amenities
      </h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {amenities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-4 border border-primary-800 
              transition duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <Icon size={24} />
              <h3 className=" text-primary-400 font-semibold">{item.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

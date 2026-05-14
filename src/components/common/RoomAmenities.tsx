import {
  Monitor,
  Wifi,
  Bath,
  CigaretteOff,
  AirVent,
  Heater,
  Phone,
  Waves,
} from "lucide-react";
export const RoomAmenities = () => {
  const amenities = [
    { label: "TV", icon: Monitor },
    { label: "Free Wifi", icon: Wifi },
    { label: "Bath Tub", icon: Bath },
    { label: "Non-Smoking", icon: CigaretteOff },
    { label: "Air Conditioning", icon: AirVent },
    { label: "Heater", icon: Heater },
    { label: "Phone", icon: Phone },
    { label: "Hair-dryer", icon: Waves },
  ];

  return (
    <div className="mb-16">
      <h1 className="font-semibold text-4xl pb-8 text-accent-500">
        Room Amenities
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {amenities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-4 border border-primary-800 
              transition duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <Icon />
              <h3 className="text-primary-400 font-semibold">{item.label}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

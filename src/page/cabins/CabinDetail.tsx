import { RoomFeature } from "../../components/common/RoomFeature";
import { RoomAmenities } from "../../components/common/RoomAmenities";
import { HotelAmenities } from "../../components/common/HotelAmenities";
import CabinDetailId from "../../components/cabins/CabinDetailId";
import { Booking } from "../../components/booking/Booking";

function CabinDetail() {
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-0 md:mt-8">
        <CabinDetailId />

        <div>
          <h2 className="text-5xl font-semibold text-center mb-10 text-accent-500">
            Reserve today. Pay on arrival.
          </h2>

          <Booking />

          <RoomFeature />
          <RoomAmenities />
          <HotelAmenities />
        </div>
      </div>
    </section>
  );
}

export default CabinDetail;

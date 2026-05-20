import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCabinApi } from "../../services/cabins.api";
import type { CabinType } from "../../types/cabins/cabins";
import Spinner from "../../components/common/Spinner";
import { RoomFeature } from "../../components/common/RoomFeature";
import { RoomAmenities } from "../../components/common/RoomAmenities";
import { HotelAmenities } from "../../components/common/HotelAmenities";
import CabinDetailId from "../../components/cabins/CabinDetailId";
import { Booking } from "../../components/booking/Booking";

function CabinDetail() {
  const { id } = useParams<{ id: string }>();
  const [cabin, setCabin] = useState<CabinType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCabin = async () => {
      if (!id) return;
      try {
        const data = await getCabinApi(id);
        setCabin(data);
      } catch (error) {
        console.error("Error fetching cabin detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCabin();
  }, [id]);

  if (loading) return <Spinner />;
  if (!cabin)
    return (
      <div className="text-center mt-10 text-2xl text-primary-200">
        Cabin not found
      </div>
    );

  return (
    <section>
      <div className="max-w-6xl mx-auto mt-0 md:mt-8">
        <CabinDetailId cabin={cabin} />

        <div>
          <h2 className="text-5xl font-semibold text-center mb-10 text-accent-500">
            Reserve today. Pay on arrival.
          </h2>

          <Booking cabin={cabin} />

          <RoomFeature />
          <RoomAmenities />
          <HotelAmenities />
        </div>
      </div>
    </section>
  );
}

export default CabinDetail;

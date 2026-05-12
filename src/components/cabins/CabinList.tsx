import { useEffect, useState } from "react";
import { getCabinsApi } from "../../services/cabins.api";
import type { Cabin } from "../../types/cabins/cabins";
import CabinCard from "./CabinCard";

export const CabinList = () => {
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [loading, setloading] = useState(true);

  const fetchDataCabins = async () => {
    try {
      const res = await getCabinsApi();
      console.log(res, "resres");
      setCabins(res);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchDataCabins();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;

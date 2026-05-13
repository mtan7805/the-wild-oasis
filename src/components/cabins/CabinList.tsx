import { useEffect, useState } from "react";
import { getCabinsApi } from "../../services/cabins.api";
import type { Cabin } from "../../types/cabins/cabins";
import CabinCard from "./CabinCard";
import Spinner from "../common/Spinner";
import type { FilterValue } from "../../page/cabins/Cabins";

export const CabinList = ({ filter }: { filter: FilterValue }) => {
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

  if (loading) return <Spinner />;

  const filterCabins = (() => {
    switch (filter) {
      case "small":
        return cabins.filter((cabin) => cabin.maxCapacity <= 4);
      case "medium":
        return cabins.filter(
          (cabin) => cabin.maxCapacity > 4 && cabin.maxCapacity <= 7,
        );
      case "large":
        return cabins.filter(
          (cabin) => cabin.maxCapacity > 7 && cabin.maxCapacity <= 12,
        );
      default:
        return cabins;
    }
  })();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filterCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCabinsApi } from "../../services/cabins.api";
import type { Cabin } from "../../types/cabins/cabins";
import CabinCard from "./CabinCard";
import Spinner from "../common/Spinner";
import Pagination from "../common/Pagination";
import type { FilterValue } from "../../page/cabins/Cabins";

const PAGE_SIZE = 4;

export const CabinList = ({ filter }: { filter: FilterValue }) => {
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [loading, setloading] = useState(true);
  const [searchParams] = useSearchParams();

  const fetchDataCabins = async () => {
    try {
      const res = await getCabinsApi();
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

  // Pagination logic
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedCabins = filterCabins.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {paginatedCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
      <Pagination count={filterCabins.length} pageSize={PAGE_SIZE} />
    </>
  );
};

export default CabinList;


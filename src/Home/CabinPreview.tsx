import { Link } from "react-router-dom";
import MyButton from "../components/common/MyButton";
import type { Cabin } from "../types/cabins/cabins";
import { getCabinsApi } from "../services/cabins.api";
import Spinner from "../components/common/Spinner";
import { useEffect, useState } from "react";

export const CabinPreview = () => {
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDataCabins = async () => {
    try {
      const res = await getCabinsApi();
      setCabins(res.slice(0, 3));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataCabins();
  }, []);

  if (loading) return <Spinner />;

  return (
    <section>
      <div className="flex items-center justify-between gap-2 mb-8">
        <h1 className=" text-5xl items-center">Cabins Availability</h1>
        <Link to="/Cabins" className="hidden sm:block">
          <MyButton>All Cabins</MyButton>
        </Link>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {cabins.map((cabin) => {
          const { id, name, maxCapacity, regularPrice, discount, image } =
            cabin;

          const finalPrice = regularPrice - discount;

          return (
            <div key={id} className="flex flex-col space-y-4">
              <Link
                to={`/cabins/${id}`}
                className="relative h-62.5 aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Cabin ${name}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </Link>

              <h1 className="text-3xl tracking-wide uppercase font-medium">
                {name}
              </h1>

              <div className="flex items-center gap-12">
                <span>1 King Bed</span>
                <span>Max {maxCapacity} Guests</span>
              </div>

              <Link
                to={`/cabins/${id}`}
                className="cursor-pointer hover:text-accent-500 transition-colors"
              >
                SEE DETAIL
              </Link>

              <hr className="border-primary-800" />

              <div className="flex justify-between items-end gap-4">
                <div className="flex flex-col">
                  <span>Start from</span>

                  <div className="flex items-center gap-2">
                    {discount > 0 ? (
                      <>
                        <span className="text-3xl font-[350]">
                          ${finalPrice}
                        </span>

                        <span className="line-through font-semibold text-primary-600">
                          ${regularPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-[350]">
                        ${regularPrice}
                      </span>
                    )}

                    <span> / night</span>
                  </div>
                </div>

                <Link to={`/cabins/${id}`}>
                  <MyButton>Check Availability</MyButton>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center pt-10 sm:hidden">
        <Link to="/Cabins">
          <MyButton>All Cabins</MyButton>
        </Link>
      </div>
    </section>
  );
};

import { UserIcon } from "@heroicons/react/24/solid";
import type { Cabin } from "../../types/cabins/cabins";
import { Link } from "react-router-dom";

type CabinCardProps = {
  cabin: Cabin;
};

function CabinCard({ cabin }: CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const finalPrice = regularPrice - discount;

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_2fr] border-primary-800 border">
      <div className="relative">
        <img
          src={image}
          alt={`Cabin ${name}`}
          className="absolute inset-0 w-full h-full object-cover border-r border-primary-800"
        />
      </div>

      <div>
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className=" text-3xl font-[350]">${finalPrice}</span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            to={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;

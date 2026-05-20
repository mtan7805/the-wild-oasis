import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { UsersIcon, MapPinIcon } from "lucide-react";
import type { CabinType } from "../../types/cabins/cabins";

interface CabinDetailIdProps {
  cabin: CabinType;
}

function CabinDetailId({ cabin }: CabinDetailIdProps) {
  const { name, maxCapacity, description, image } = cabin;
  console.log(cabin, "cabincabin");

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 border border-primary-800 lg:px-10 mb-24">
        <div className="relative lg:hidden w-full h-[300px]">
          <img
            src={image}
            alt={`Cabin ${name}`}
            className="absolute w-full h-full object-cover inset-0"
          />
        </div>

        <div className="hidden lg:block relative scale-[1.15] -translate-x-3">
          <img
            src={image}
            alt={`Cabin ${name}`}
            className="absolute w-full h-full object-cover inset-0"
          />
        </div>

        <div className="px-5">
          <h3 className="text-accent-100 font-black text-5xl lg:text-7xl lg:mb-5 mb-3 lg:translate-x-[-254px] bg-primary-950 lg:p-6 pb-1 lg:w-[150%]">
            {name}
          </h3>

          <p className=" text-lg text-primary-300 mb-8">{description}</p>

          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span> guest
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CabinDetailId;

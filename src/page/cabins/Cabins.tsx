import CabinFilter from "../../components/cabins/CabinFilter";
import CabinList from "../../components/cabins/CabinList";

export const Cabins = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&rsquo;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>

        <div className="flex justify-end mb-8">
          <CabinFilter />
        </div>
        <CabinList />
      </div>
    </section>
  );
};

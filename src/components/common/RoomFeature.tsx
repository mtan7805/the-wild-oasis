export const RoomFeature = () => {
  return (
    <div className="my-16 space-y-10">
      <h1 className="font-semibold  text-4xl text-accent-500 pb-8 border-b border-b-primary-800">
        Room Feature
      </h1>

      <div className="flex sm:items-center gap-10 sm:gap-48 flex-col sm:flex-row ">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bed-double"
            >
              <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
              <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
              <path d="M12 4v6" />
              <path d="M2 18h20" />
            </svg>

            <div>
              <p className="font-bold text-xl">Bed</p>
              <p className="text-primary-400">1 King Bed</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx="9" cy="7" r="4" />
            </svg>

            <div>
              <p className="font-bold text-xl">Max Guest</p>
              <p className="text-primary-400">2 Guests</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-4 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-scan"
            >
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            </svg>

            <div>
              <p className="font-bold text-xl">Room Space</p>
              <p className="text-primary-400">30 Sqm</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tent-tree"
            >
              <circle cx="4" cy="4" r="2" />
              <path d="m14 5 3-3 3 3" />
              <path d="m14 10 3-3 3 3" />
              <path d="M17 14V2" />
              <path d="M17 14H7l-5 8h20Z" />
              <path d="M8 14v8" />
              <path d="m9 14 5 8" />
            </svg>

            <div>
              <p className="font-bold text-xl">Room View</p>
              <p className="text-primary-400">Mountain View</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10  pb-8 border-b border-b-primary-800">
        <p>
          Discover the ultimate luxury getaway nestled deep in a picturesque
          forest. Each of our wooden cabins offers a secluded and intimate
          retreat designed for relaxation and connection with nature. Step
          inside to find warm, high-quality wood interiors, cozy living areas
          with fireplaces, fully-equipped kitchens, and spa-inspired bathrooms.
          Whether you're enjoying a peaceful night in a plush king-size bed or
          unwinding on your private deck with a hot tub, every detail is crafted
          to elevate your stay.
        </p>
        <p>
          Perfect for couples, families, or groups, our cabins come in various
          sizes to accommodate different needs without compromising comfort or
          style. From romantic escapes to grand family vacations, every cabin
          blends luxury and nature to create a serene and unforgettable
          experience. Escape the noise, breathe in the mountain air, and indulge
          in the comfort of your own private oasis.
        </p>
      </div>
    </div>
  );
};

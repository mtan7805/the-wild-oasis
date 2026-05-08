import { Link } from "react-router-dom";
import about1 from "../../assets/about-1.webp";
export const About = () => {
  return (
    <div className="flex-1 px-8 py-6 grid">
      <main>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-12 text-lg items-center">
            <div className="col-span-3">
              <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                Welcome to The Wild Oasis
              </h1>
              <div className="space-y-8">
                <p>
                  Where nature's beauty and comfortable living blend seamlessly.
                  Hidden away in the heart of the Italian Dolomites, this is
                  your paradise away from home.
                </p>
                <p>
                  Our 9 luxury cabins provide a cozy base, but the real freedom
                  and peace you'll find in the surrounding mountains. Wander
                  through lush forests, breathe in the fresh air, and stargaze
                  from your hot tub.
                </p>
                <p>
                  This is where memorable moments are made, surrounded by
                  nature's splendor. It's a place to slow down and feel the joy
                  of being together.
                </p>
              </div>
            </div>

            <div className="col-span-3 lg:col-span-2 bg-accent-100 w-full">
              <img
                src={about1}
                alt="Family sitting around a fire pit in front of cabin"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-24 gap-y-12 text-lg items-center">
            <div className="col-span-3 lg:col-span-2 aspect-square relative">
              <img
                src={about1}
                alt="Family sitting around a fire pit in front of cabin"
              />
            </div>

            <div className="col-span-3">
              <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                Managed by our family since 1962
              </h1>
              <div className="  space-y-8">
                <p>
                  Since 1962, The Wild Oasis has been a cherished family-run
                  retreat, started by our grandparents and nurtured with love
                  through generations.
                </p>

                <p>
                  We blend timeless mountain beauty with warm hospitality.
                  You're not just a guest here — you're part of the family.
                </p>

                <div>
                  <Link
                    to="/cabins"
                    className="inline-block bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-900 text-lg font-semibold hover:bg-accent-600 transition-all"
                  >
                    Explore our luxury cabins
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

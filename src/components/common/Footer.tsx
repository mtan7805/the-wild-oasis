import facebook from "../../assets/logo-facebook.png";
import tiktok from "../../assets/logo-tiktok.png";
import instagram from "../../assets/logo-instagram.png";
import linkedin from "../../assets/logo-linkedin.png";
import logo from "../../assets/logo.webp";
import award from "../../assets/awardPic.webp";
import card from "../../assets/cardPic.webp";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary-900 w-full p-8 md:p-10 lg:p-12 space-y-10">
      <div className="grid grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-4 z-10">
            <img
              src={logo}
              alt="The Wild Oasis "
              className="h-12.5 object-cover"
            />
            <span className="text-3xl font-semibold text-accent-500">TWO</span>
          </Link>
          <div className="flex gap-4 items-center ">
            <Link to="#">
              <img src={facebook} alt="facebook" className="w-6 h-6 invert" />
            </Link>
            <Link to="#">
              <img src={instagram} alt="facebook" className="w-6 h-6 invert" />
            </Link>
            <Link to="#">
              <img src={tiktok} alt="facebook" className="w-6 h-6 invert" />
            </Link>
            <Link to="#">
              <img src={linkedin} alt="facebook" className="w-6 h-6 invert" />
            </Link>
          </div>

          <span className="px-4 py-2 bg-primary-800 text-center font-semibold w-fit">
            USD
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold mb-3">Contact</span>
          <span>T: +66-9-147-9581</span>
          <span>E: thewildoasis.co</span>
          <span>F: +09-441-860-441</span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold mb-3">Hotel Address</span>
          <span>Via delle Dolomiti, 45</span>
          <span>39030 Cortina d’Ampezzo (BZ)</span>
          <span>South Tyrol, Italy</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link to="#">
            <img src={award} alt="Award Pic" />
          </Link>
          <Link to="#">
            <img src={card} alt="Award Pic" />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span>Privacy</span>
          <span>Legal Notice</span>
        </div>
        <span>Copyright © 2026 Le Minh Tan</span>
      </div>
    </footer>
  );
};

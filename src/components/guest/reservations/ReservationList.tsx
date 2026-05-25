import { Link } from "react-router-dom";

export const ReservationList = () => {
  return (
    <div>
      <p className="text-lg">
        You have no reservations yet. Check out our{" "}
        <Link className="underline text-accent-500" to="/cabins">
          luxury cabins &rarr;
        </Link>
      </p>
    </div>
  );
};

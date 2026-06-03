import { useAuth } from "../../context/authContext";

export const GuestHome = () => {
  const user = useAuth();
  console.log(user);
  return (
    <div className="py-1 mt-5 lg:mt-0">
      <h2 className="font-semibold text-2xl h-full text-accent-400 mb-7">
        WELCOME, {user.user?.fullName}
      </h2>
    </div>
  );
};

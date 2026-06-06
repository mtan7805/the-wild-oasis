import { GuestProfileForm } from "../../components/guest/GuestProfileForm";

export const GuestProfile = () => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
          Update your guest profile
        </h2>
        <p className="text-lg text-primary-200">
          Providing the following information will make your check-in process
          faster and smoother. See you soon!
        </p>
      </div>

      <GuestProfileForm />
    </div>
  );
};

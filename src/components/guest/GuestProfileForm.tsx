import { useState } from "react";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { updateProfileApi } from "../../services/auth.api";
import countriesData from "../../utils/countries.json";

interface Country {
  name: string;
  flag: string;
}

export const GuestProfileForm = () => {
  const { user, loginSuccess } = useAuth();

  const fullName = user?.fullName || "";
  const [nationalID, setNationalID] = useState(user?.nationalID || "");
  const [nationality, setNationality] = useState(user?.nationality || "");
  const [countryFlag, setCountryFlag] = useState(user?.countryFlag || "");

  const [countries] = useState<Country[]>(countriesData);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryName = e.target.value;
    const country = countries.find((c) => c.name === selectedCountryName);
    if (country) {
      setNationality(country.name);
      setCountryFlag(country.flag);
    } else {
      setNationality("");
      setCountryFlag("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.access_token) return;
    if (!nationalID.trim()) {
      toast.error("Vui lòng cung cấp số CCCD/Hộ chiếu (National ID)");
      return;
    }
    if (!nationality) {
      toast.error("Vui lòng chọn quốc tịch của bạn");
      return;
    }
    setIsUpdating(true);
    try {
      const updatedGuest = await updateProfileApi(
        { fullName, nationalID, nationality, countryFlag },
        user.access_token,
      );

      // Đồng bộ lại thông tin mới vào context & localStorage (giữ nguyên access_token)
      loginSuccess({
        ...user,
        ...updatedGuest,
      });
      toast.success("Cập nhật thông tin cá nhân thành công!");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Cập nhật thất bại. Vui lòng thử lại!");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="flex flex-col  bg-primary-900">
        <div className="px-12 py-8 flex flex-col gap-10 ">
          {/* FULL NAME */}
          <div className="flex flex-col gap-3">
            <label className="text-primary-200 font-semibold">Full name</label>
            <input
              type="text"
              className="px-5 py-3 rounded-md bg-primary-200 text-primary-800 opacity-50 cursor-not-allowed"
              value={fullName}
              disabled
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-3">
            <label className="text-primary-200 font-semibold">Email</label>
            <input
              type="email"
              className="px-5 py-3 rounded-md bg-primary-200 text-primary-800 opacity-50 cursor-not-allowed"
              value={user?.email}
              disabled
            />
          </div>

          {/* COUNTRY */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-primary-200 font-semibold">
                Where are you from?
              </label>
              {countryFlag && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-primary-300">Flag:</span>
                  <img
                    src={countryFlag}
                    alt={`${nationality} flag`}
                    className="h-5 w-8 object-cover rounded-sm border border-primary-700"
                  />
                </div>
              )}
            </div>

            <select
              value={nationality}
              onChange={handleCountryChange}
              className="w-full px-5 py-3 rounded-md bg-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer"
            >
              <option value="">-- Chọn quốc gia của bạn --</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* NATIONAL ID */}
          <div className="flex flex-col gap-2">
            <label className="text-primary-200 font-semibold">
              National ID / Passport number
            </label>
            <input
              type="text"
              className="px-5 py-3 rounded-md bg-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
              value={nationalID}
              onChange={(e) => setNationalID(e.target.value)}
              placeholder="Nhập số CCCD hoặc số Hộ chiếu"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={isUpdating}
              className="bg-accent-500 text-primary-900 px-8 py-3 rounded-md font-bold hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-accent-500/20 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isUpdating ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

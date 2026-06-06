import type { AuthState, Guest } from "../types/auth/auth";
import { api } from "./api";

export const LoginGoogle = async (
  idToken: string,
  email: string,
  fullName: string,
): Promise<AuthState> => {
  try {
    const res = await api.post("/auth/guest/google", {
      idToken,
      email,
      fullName,
    });

    const responseData = res.data;

    const guestData: Guest = {
      access_token: responseData.access_token,
      ...responseData.guest,
    };
    console.log(guestData, "guestDataguestData");
    return {
      user: guestData,
      isAuthenticated: true,
    };
  } catch (error: any) {
    console.log(error);
    const errorMessage = error.response?.data?.message || "Account verification failed";
    throw new Error(errorMessage);
  }
};

export const updateProfileApi = async (
  updateData: {
    fullName: string;
    nationalID: string;
    nationality: string;
    countryFlag: string;
  },
  token: string,
): Promise<Guest> => {
  try {
    const res = await api.patch("/guests/me", updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "Cập nhật thông tin thất bại";
    throw new Error(errorMessage);
  }
};


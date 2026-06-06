import type { AuthState, Guest } from "../types/auth/auth";

export const LoginGoogle = async (
  idToken: string,
  email: string,
  fullName: string,
): Promise<AuthState> => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/guest/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
        email,
        fullName,
      }),
    });
    if (!res.ok) throw new Error("Account verification failed");

    const responseData = await res.json();

    const guestData: Guest = {
      access_token: responseData.access_token,
      ...responseData.guest,
    };
    console.log(guestData, "guestDataguestData");
    return {
      user: guestData,
      isAuthenticated: true,
    };
  } catch (error) {
    console.log(error);
    throw error;
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
  const res = await fetch("http://localhost:3000/api/guests/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateData),
  });
  const responseData = await res.json();
  if (!res.ok) {
    throw new Error(responseData.message || "Cập nhật thông tin thất bại");
  }
  return responseData;
};

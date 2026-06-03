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

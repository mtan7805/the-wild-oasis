import type { Booking } from "../types/bookings/bookings";
import type { Cabin, CabinType } from "../types/cabins/cabins";
import { api } from "./api";

export const getCabinsApi = async (): Promise<Cabin[]> => {
  const res = await api.get(`/cabins`);
  return res.data;
};

export const getCabinApi = async (id: string | number): Promise<CabinType> => {
  const res = await api.get(`/cabins/${id}`);
  return res.data;
};

export const getBookingsGuest = async (token: string): Promise<Booking[]> => {
  if (!token) {
    throw new Error("Not authenticated");
  }
  console.log(token, "token");

  const res = await api.get(`/bookings/guest`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "res");
  return res.data;
};

export const getBookingApi = async (
  id: string,
  token: string,
): Promise<Booking> => {
  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await api.get(`/bookings/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateBookingApi = async (
  id: string,
  updateData: { numGuests: number; observations: string },
  token: string,
): Promise<Booking> => {
  if (!token) {
    throw new Error("Not authenticated");
  }

  const res = await api.patch(`/bookings/${id}`, updateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

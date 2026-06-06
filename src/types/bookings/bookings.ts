import type { Cabin } from "../cabins/cabins";

export interface Booking {
  _id: string;
  id: string;
  guests: string;
  cabins: Cabin;

  startDate: string;
  endDate: string;

  numNights: number;
  numGuests: number;

  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;

  status: "unconfirmed" | "confirmed" | "cancelled";

  hasBreakfast: boolean;
  isPaid: boolean;

  observations: string;

  createdAt: string;
  updatedAt: string;

  __v: number;
}

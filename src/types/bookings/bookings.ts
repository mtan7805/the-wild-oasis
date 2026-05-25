import type { Cabin } from "../cabins/cabins";

export interface Booking {
  id: string;
  cabins: Cabin;

  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;

  cabinPrice: number;
  status: "unconfirmed" | "confirmed" | "cancelled";
  createdAt: string;
}

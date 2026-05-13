import type { Cabin } from "../types/cabins/cabins";
import { api } from "./api";

export const getCabinsApi = async (): Promise<Cabin[]> => {
  const res = await api.get(`/cabins`);
  return res.data;
};

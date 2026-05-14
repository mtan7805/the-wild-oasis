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

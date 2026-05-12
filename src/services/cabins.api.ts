import axios from "axios";
import type { Cabin } from "../types/cabins/cabins";

const API_URL = "https://the-wild-oasis-api.vercel.app/api";
export const getCabinsApi = async (): Promise<Cabin[]> => {
  const res = await axios.get(`${API_URL}/cabins`);
  return res.data;
};

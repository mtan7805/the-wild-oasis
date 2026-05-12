import axios from "axios";

export const api = axios.create({
  baseURL: "https://the-wild-oasis-api.vercel.app/api",
});

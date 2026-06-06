import axios from "axios";

export const api = axios.create({
  baseURL: "https://booking-be-7.onrender.com/api",
});

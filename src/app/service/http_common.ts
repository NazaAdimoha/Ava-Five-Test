import axios from "axios";

export const baseURL = "https://dummyjson.com/"; // Your new base URL

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
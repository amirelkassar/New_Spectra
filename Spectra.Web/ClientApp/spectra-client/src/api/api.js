import axios from "axios";
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export const apiAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL+'/admin',
});

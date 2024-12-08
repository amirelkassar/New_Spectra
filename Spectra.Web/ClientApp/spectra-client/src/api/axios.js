import axios from 'axios';

import { getToken } from '@/lib/token';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const apiPublic = getAxiosInstance('/public');

export const apiAdmin = getAxiosInstance('/admin');

export const apiAuth = axios.create({
  baseURL: BASE_URL + '/public/identity',
});

function getAxiosInstance(URL) {
  const axiosInstance = axios.create({
    baseURL: BASE_URL + URL,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Accept = 'application/json';
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
  return axiosInstance;
}

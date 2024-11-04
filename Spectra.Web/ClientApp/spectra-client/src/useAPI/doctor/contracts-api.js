"use client";
import { api } from "@/api/api";
import { Doctor } from "@/api/endpoints";
import { useMutation, useQuery } from "@tanstack/react-query";

//getAll
export const GetContracts = (id) => {
  return useQuery({
    queryKey: [Doctor.Contracts.url(id)],
    queryFn: async () => {
      const response = await api.get(Doctor.Contracts.url(id), {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetContractsID = (id) => {
  return useQuery({
    queryKey: [Doctor.Contracts.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Doctor.Contracts.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//getAllServices
export const GetContractsServices = () => {
  return useQuery({
    queryKey: [Doctor.Contracts.getServices],
    queryFn: async () => {
      const response = await api.get(Doctor.Contracts.getServices, {
        headers: {},
      });
      return response;
    },
    staleTime: Infinity,
    refetchInterval: false,
  });
};
//sendContracts

export const useCreateContracts = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Doctor.Contracts.post, data, {
        headers: {},
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//delete
export const DeleteContracts = (id) => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.delete(Doctor.Contracts.getByID(id));
      return response.data;
    },

    onSuccess: (res) => {
      console.log(res);
    },
  });
};

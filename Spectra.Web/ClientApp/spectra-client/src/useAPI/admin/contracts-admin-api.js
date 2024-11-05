"use client";
import { api, apiAdmin } from "@/api/api";
import { Admin, Doctor } from "@/api/endpoints";
import NumPage from "@/components/numPage";
import { useMutation, useQuery } from "@tanstack/react-query";

//getAll
export const GetContractsInAdmin = () => {
  const page = NumPage();
  return useQuery({
    queryKey: ["todos", { page }],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Contracts.url + `PageNumber=${page}`,
        {
          headers: {},
        }
      );
      console.log("dfd");
      return response;
    },
    placeholderData: (previousData) => previousData,
  });
};

//getID
export const GetContractsIDInAdmin = (id) => {
  return useQuery({
    queryKey: [Doctor.Contracts.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.Contracts.getByID(id), {
        headers: {},
      });
      console.log("response");
      return response;
    },
    staleTime: Infinity,
    refetchInterval: false,
  });
};

//Edit
export const useEditContractsInAdmin = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(Admin.Contracts.edit(id), data, {
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

//getAllServices
export const GetContractsServicesInAdmin = () => {
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

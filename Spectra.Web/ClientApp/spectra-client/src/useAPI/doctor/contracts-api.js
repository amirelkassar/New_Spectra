"use client";
import { api } from "@/api/api";
import { Doctor } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//getAll
export const GetContracts = (id) => {
  return useQuery({
    queryKey: [Doctor.Contracts.url(id)],
    queryFn: async () => {
      const response = await api.get(Doctor.Contracts.url(id), {
        headers: {},
      });
      console.log("dfd");
      return response;
    },
    staleTime: Infinity,
    refetchInterval: false,
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
      console.log("response");

      return response;
    },
    staleTime: Infinity,
    refetchInterval: false,
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

export const useCreateContracts = (employeeId) => {
  const { refetch } = GetContracts(employeeId);
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Doctor.Contracts.post, data, {
        headers: {},
      });
      return response.data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//delete
export const DeleteContracts = (id, employeeId) => {
  const { refetch } = GetContracts(employeeId);
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["Contracts"],
    mutationFn: async () => {
      const response = await api.delete(Doctor.Contracts.getByID(id));
      return response.data;
    },
    onSuccess: (res) => {
      refetch();
      queryClient.invalidateQueries(["Contracts"]);
      console.log(res);
    },
  });
};
//Edit
export const useEditContracts = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.put(Doctor.Contracts.getByID(id), data, {
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

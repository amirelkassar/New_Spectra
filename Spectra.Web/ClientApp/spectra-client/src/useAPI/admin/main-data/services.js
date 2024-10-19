"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetMasterDataServices = () => {
  return useQuery({
    queryKey: [Admin.MasterDataServices.url],
    queryFn: async () => {
      const response = await api.get(Admin.MasterDataServices.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetMasterDataServicesID = (id) => {
  return useQuery({
    queryKey: [Admin.MasterDataServices.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.MasterDataServices.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteMasterDataServices = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["MasterDataServices"],
    mutationFn: async () => {
      const response = await api.delete(
        Admin.MasterDataServices.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["MasterDataServices"]);
    },
  });
};
//post
export const useCreateMasterDataServices = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.MasterDataServices.url, data, {});
      return response.data;
    },
    onSuccess: (data) => {
      console.log("تم الإرسال بنجاح:", data);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//put
export const useEditMasterDataServices = (id) => {
  return useMutation({
    mutationKey: ["EditMasterDataServices"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(
        Admin.MasterDataServices.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["EditMasterDataServices"]);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
